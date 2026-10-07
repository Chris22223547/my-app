/* A factory build is an explicitly reviewed snapshot, not a live quote drawing. */
window.BuildReview = (() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clone = value => JSON.parse(JSON.stringify(value));
  const normalize = value => String(value || '').toLowerCase().replace(/six/g,'6').replace(/two/g,'2').replace(/fibreglass/g,'fiberglass').replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/).sort().join(' ');
  const fields = [
    ['layout','Door layout',/^layout-/], ['material','Slab material',/^type-/], ['width','Slab width',/^width-/],
    ['height','Slab height',/^height-/], ['hand','Hinge side',/^hinge-(lhh|rhh)$/],
    ['swing','Swing',/^swing-/], ['bore','Bore / lock preparation',/^bore-/],
    ['jamb','Jamb depth / length',/^jamb-/], ['hinge','Hinge finish',/^hinge-(?!lhh|rhh)/],
  ];
  function fingerprint(order, quote) {
    // Deliberately exclude timestamps and build settings; include every source specification.
    const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(k => [k,stable(value[k])])) : value;
    return JSON.stringify(stable({order:{checks:order.checks || {},text:order.text || {},sourceQuoteId:order.sourceQuoteId || '',title:order.title || ''},quote:quote ? {id:quote.id,values:quote.values,customFrameHeight:quote.customFrameHeight,notes:quote.notes,location:quote.location,itemType:quote.itemType} : null}));
  }
  function model(order, quote, catalog, checkboxes, quoteOrder) {
    const q = quoteOrder || {checks:{},text:{}};
    const resolvePanel = (text, material) => {
      if (!text) return '';
      const exact = catalog.filter(p => normalize(p.label) === normalize(text));
      if (exact.length === 1) return exact[0].id;
      const candidates = catalog.filter(p => p.type === material && normalize(p.label.replace(/steel|fiberglass|smooth|woodgrain/gi,'')) === normalize(text.replace(/steel|fiberglass|smooth|woodgrain/gi,'')));
      return candidates.length === 1 ? candidates[0].id : '';
    };
    const material = order.checks?.['type-steel-polytex'] ? 'steel' : order.checks?.['type-fiberglass-smooth'] ? 'smooth' : order.checks?.['type-fiberglass-woodgrain'] ? 'woodgrain' : '';
    const panel = resolvePanel(order.text?.slabPanel, material);
    const qp = catalog.some(p => p.id === quote?.values?.panelStyle) ? quote.values.panelStyle : '';
    const rows = [{id:'panel',label:'Slab style / picture',options:catalog.map(p=>[p.id,p.label]).concat([['custom','Custom / no catalogue picture']]),order:panel,quote:qp,orderLabel:order.text?.slabPanel || 'Missing',quoteLabel:qp ? catalog.find(p=>p.id===qp).label : 'Missing'}];
    for (const [id,label,pattern] of fields) {
      const options = checkboxes.filter(([key])=>pattern.test(key)).map(([key,name])=>[key,name]);
      if(id==='width' && !options.some(([key])=>key==='width-custom')) options.push(['width-custom','Custom width - enter dimensions below']);
      const values = source => options.filter(([key])=>source.checks?.[key]).map(([key])=>key);
      const a=values(order),b=values(q);
      rows.push({id,label,options,order:a.length===1?a[0]:'',quote:b.length===1?b[0]:'',orderLabel:a.map(v=>options.find(([k])=>k===v)[1]).join(' / ') || 'Missing',quoteLabel:b.map(v=>options.find(([k])=>k===v)[1]).join(' / ') || 'Missing',ambiguous:a.length>1});
    }
    const brick = source => Object.hasOwn(source.checks || {},'other-brickmould') ? String(!!source.checks['other-brickmould']) : '';
    rows.push({id:'brick',label:'Brick mould',options:[['true','Yes'],['false','No']],order:brick(order),quote:brick(q)});
    for (const side of ['Exterior','Interior']) {
      const colour = source => {
        const t=source.text || {};
        if(t['stain'+side]) return 'Stain: '+t['stain'+side];
        return t['paint'+side] === 'custom' ? t['paint'+side+'Custom'] || '' : t['paint'+side] || t['stain'+side] || '';
      };
      rows.push({id:'colour'+side,label:side+' colour',order:colour(order),quote:colour(q)});
    }
    for(const row of rows) {
      if(row.id==='bore' && ['deadbolt-passage','grip-set'].includes(quote?.values?.handleSet)) {
        row.quoteLabel='Double bore - diameter must be confirmed on the order';
        row.quote=/^bore-double-/.test(row.order) ? row.order : 'double-bore-unspecified';
      }
      const label = value => row.options?.find(([key])=>key===value)?.[1] || value || 'Missing';
      row.orderLabel ||= label(row.order);row.quoteLabel ||= label(row.quote);
      row.conflict = row.ambiguous || (!!row.order && !!row.quote && normalize(row.order)!==normalize(row.quote)) || (row.id==='panel' && !!order.text?.slabPanel && !panel);
      row.initial = row.conflict ? '' : row.order || row.quote || '';
    }
    return rows;
  }
  function mount(container, {order,quote,catalog,checkboxes,textFields,quoteOrder,save}) {
    const rows=model(order,quote,catalog,checkboxes,quoteOrder);
    const snapshot=order.buildSnapshot;
    const stale=!!snapshot && snapshot.sourceFingerprint!==fingerprint(order,quote);
    const referenceDifferences = [...checkboxes.filter(([key])=>!fields.some(([, ,pattern])=>pattern.test(key)) && !/^(sill-|extension-|can-am-extension-)/.test(key) && quoteOrder?.checks?.[key] && !order.checks?.[key]).map(([,label])=>label), ...textFields.filter(([key])=>!['slabPanel','companyName'].includes(key) && !/^(paint|stain)/.test(key) && quoteOrder?.text?.[key] && normalize(quoteOrder.text[key])!==normalize(order.text?.[key])).map(([key,label])=>label+': '+quoteOrder.text[key])];
    const extraChecks=checkboxes.filter(([key])=>!fields.some(([, ,pattern])=>pattern.test(key)) && key!=='other-brickmould' && !/^(sill-|extension-|can-am-extension-)/.test(key));
    const extraText=textFields.filter(([key])=>!['slabPanel','doorCustomSize','headerCutLength','sillCutLength','poNumber','companyName','agreementDate','agreementSignature'].includes(key) && !/^(paint|stain)/.test(key));
    container.innerHTML=`<details class="build-review-details"><summary>Review / edit build details (optional for draft printing)</summary><form class="build-review-form"><h2>Check the door before building</h2><p>${snapshot ? stale ? 'The order or quote changed. Your last confirmed build is preserved below. Review and confirm again.' : 'Saved build details are confirmed. You can review and replace them below.' : 'Compare the order and quote, then confirm the factory details. Differences need a choice.'}</p><p>${quote ? 'Linked quote: '+esc(quote.quoteNumber || quote.id) : 'No linked quote found. Confirm the order details manually.'}</p>${referenceDifferences.length ? `<p class="build-conflict">Check additional quote details: ${esc(referenceDifferences.join('; '))}. Review glass, machining and other build details below before confirming.</p>` : ''}<div class="build-review-rows">${rows.map(r=>`<label class="build-review-row${r.conflict?' build-conflict':''}"><strong>${esc(r.label)}${r.conflict?' - CHECK DIFFERENCE':''}</strong><span>Order: ${esc(r.orderLabel)}<br>Quote: ${esc(r.quoteLabel)}</span>${r.options?`<select name="${r.id}" required><option value="">Choose confirmed detail</option>${r.options.map(([v,l])=>`<option value="${esc(v)}">${esc(l)}</option>`).join('')}</select>`:`<input name="${r.id}" required maxlength="100">`}</label>`).join('')}</div>
      <div class="build-settings-fields"><label>Outside frame width (inches)<input name="outsideFrameWidth" maxlength="30" required></label><label>Outside frame height (inches)<input name="outsideFrameHeight" maxlength="30" required></label><label>Hinges viewed from EXTERIOR<select name="exteriorHingeSide" required><option value="">Confirm exterior hinge position</option><option value="left">Left side from exterior</option><option value="right">Right side from exterior</option></select></label><label>Door slab glass<select name="glassRequirement" required><option value="">Not yet specified</option><option value="none">Not required - solid door</option><option value="required">Required - enter name and size below</option></select></label></div><label>Sill extension assembly check (if an extension is used)<input name="extensionAssemblyNote" maxlength="160" placeholder="Confirm the cut length against your assembly method"></label><p>For finish colours, enter Not required when no finish is needed. Blank means not yet specified.</p><label>Custom slab description (when using Custom)<input name="customPanel" maxlength="150"></label>
      <label>Custom SLAB dimensions / height (inches, not frame size)<input name="doorCustomSize" maxlength="80"></label>
      <div class="build-settings-fields"><label>Header cut length (inches)<input name="headerCutLength" maxlength="30" required></label><label>Sill cut length (inches)<input name="sillCutLength" maxlength="30" required></label></div>
      <details><summary>Glass, machining and other build details</summary><p>These are copied from the order. Changes here apply to this build only.</p><p>Quote selections: ${esc(checkboxes.filter(([key])=>quoteOrder?.checks?.[key]).map(([,label])=>label).join(' / ') || 'None')}</p><p>Quote glass: ${esc([quote?.values?.doorLite,quote?.values?.liteSize,quote?.values?.liteGlassStyle].filter(Boolean).join(' / ') || 'Not specified')}</p><p>Quote notes: ${esc(quote?.notes || 'None')}</p><div class="build-settings-fields">${extraChecks.map(([key,label])=>`<label><input type="checkbox" name="check:${esc(key)}"> ${esc(label)}</label>`).join('')}${extraText.map(([key,label])=>`<label>${esc(label)}<input name="text:${esc(key)}" maxlength="1000"></label>`).join('')}</div></details>
      <label><input type="checkbox" name="checked" required> I checked the slab, dimensions, glass, machining and special instructions against the order and quote.</label><button type="submit">Confirm build details</button><span role="status" aria-live="polite"></span></form></details>`;
    const form=container.querySelector('form'),status=form.querySelector('[role=status]');
    const starting=!stale && snapshot ? snapshot : order;
    for(const r of rows) form.elements[r.id].value = !stale && snapshot?.choices ? snapshot.choices[r.id] || '' : r.initial;
    for(const key of ['customPanel','doorCustomSize','headerCutLength','sillCutLength','outsideFrameWidth','outsideFrameHeight','exteriorHingeSide','glassRequirement','extensionAssemblyNote']) form.elements[key].value = starting.text?.[key] || '';
    for(const [key] of extraChecks) form.elements['check:'+key].checked=!!starting.checks?.[key];
    for(const [key] of extraText) form.elements['text:'+key].value=starting.text?.[key] || '';
    form.addEventListener('input',()=>{form.dataset.dirty='true';status.textContent='Unconfirmed changes';container.dispatchEvent(new Event('build-review-change',{bubbles:true}));});
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      const choices=Object.fromEntries(rows.map(r=>[r.id,form.elements[r.id].value.trim()]));
      const text={...(order.text || {})};
      for(const key of ['customPanel','doorCustomSize','headerCutLength','sillCutLength','outsideFrameWidth','outsideFrameHeight','exteriorHingeSide','glassRequirement','extensionAssemblyNote']) text[key]=form.elements[key].value.trim();
      const panel=catalog.find(p=>p.id===choices.panel);
      const expected={'type-steel-polytex':'steel','type-fiberglass-smooth':'smooth','type-fiberglass-woodgrain':'woodgrain'}[choices.material];
      if(panel && panel.type!==expected){status.textContent='The slab picture and material do not match. Choose the correct slab or Custom.';return;}
      if(choices.panel==='custom' && !text.customPanel){status.textContent='Enter the custom slab description.';return;}
      if((choices.height==='height-custom' || choices.width==='width-custom') && !text.doorCustomSize){status.textContent='Enter the custom door dimensions.';return;}
      if(choices.jamb==='jamb-custom' && !form.elements['text:jambCustom']?.value.trim()){status.textContent='Enter the custom jamb depth in the other build details.';return;}
      if(['headerCutLength','sillCutLength','outsideFrameWidth','outsideFrameHeight'].some(k=>text[k] && !BuildSettings.validSize(text[k]))){status.textContent='Enter valid positive frame dimensions and cut lengths, for example 32 or 35 3/4.';return;}
      const checks={...(order.checks || {})};
      for(const [key] of extraChecks) checks[key]=form.elements['check:'+key].checked;
      for(const [key] of extraText) text[key]=form.elements['text:'+key].value.trim();
      if(text.glassRequirement==='none' && (checks.doorlite || checks['cutout-yes'] || text.doorliteName || text.doorliteSize)){status.textContent='Solid door selected, but door glass or a cutout is listed. Correct the glass details before confirming.';return;}
      if(text.glassRequirement==='required' && (!text.doorliteName || !text.doorliteSize)){status.textContent='Enter the required door glass name and size.';return;}
      const exclusive=[['cutout-yes','cutout-no'],['multipoint-yes','multipoint-no'],['multipoint-prep-yes','multipoint-prep-no'],['sidelite-cutout-yes','sidelite-cutout-no']];
      if(exclusive.some(keys=>keys.filter(k=>checks[k]).length>1)){status.textContent='Both Yes and No are selected in the glass / machining details. Correct these before confirming.';return;}
      if(choices.bore!=='bore-multipoint' && (checks['multipoint-yes'] || checks['multipoint-prep-yes'])){status.textContent='Multipoint hardware / prep is selected but the bore is not Multipoint. Check the machining details.';return;}
      for(const [id,,pattern] of fields){for(const [key] of checkboxes.filter(([key])=>pattern.test(key))) checks[key]=false;checks[choices[id]]=true;}
      checks['other-brickmould']=choices.brick==='true';
      text.slabPanel=panel?.label || text.customPanel;
      for(const side of ['Exterior','Interior']) text['build'+side+'Finish']=choices['colour'+side];
      const button=form.querySelector('button');button.disabled=true;
      try{status.textContent=await save({version:1,checks,text,choices,panel:panel ? clone(panel) : null,sourceFingerprint:fingerprint(order,quote),confirmedAt:new Date().toISOString()});form.dataset.dirty='false';}
      catch(error){status.textContent=error.message;}finally{button.disabled=false;}
    });
  }
  return {mount,model,fingerprint};
})();
