/* Explicit manufacturing dimensions; never infer frame or cut allowances. */
window.BuildPrint = (() => {
  const value = (text,key) => text[key]?.trim() || '';
  function enhance(sheet,order) {
    const t=order.text || {},c=order.checks || {},requirements=order.buildRequirements || {};
    const snapshot=order.buildSnapshot;
    const width=Object.keys(c).find(k=>/^width-\d+$/.test(k)&&c[k])?.slice(6);
    const height=c['height-79']?'79':c['height-95']?'95':null;
    const slab=width&&height?`${width} x ${height} inch`:value(t,'doorCustomSize') || 'NOT YET SPECIFIED';
    const frame=value(t,'outsideFrameWidth')&&value(t,'outsideFrameHeight')?`${t.outsideFrameWidth} x ${t.outsideFrameHeight} inch`:'NOT YET SPECIFIED';
    const jamb=Object.keys(c).find(k=>/^jamb-.*-x-/.test(k)&&c[k]);
    const jambStock=jamb?.split('-x-')[1];
    const depth=jamb?.slice(5).split('-x-')[0].replace(/^(\d+)-(\d+)-(\d+)$/,'$1 $2/$3') || t.jambCustom || 'NOT YET SPECIFIED';
    const sill=BuildSettings.description(requirements);
    const glass=t.glassRequirement==='none'?'Not required - solid door':t.glassRequirement==='required'?'Required - see glass details':'NOT YET SPECIFIED';
    const summary=sheet.querySelector('.build-key-specs');summary.replaceChildren();
    const lines=[t.slabPanel || 'Slab style: NOT YET SPECIFIED',`SLAB: ${slab} (W x H)`,`OUTSIDE FRAME: ${frame} (W x H)`,`JAMB DEPTH: ${depth} inch`,`JAMB STOCK: ${jambStock ? jambStock+' inch - before cutting':'NOT YET SPECIFIED'}`,sill.sill.replace(' inch sill',' inch sill depth'),sill.extension.replace(' inch sill extension',' inch extension depth'),`GLASS: ${glass}`];
    for(const line of lines){const div=document.createElement('div');div.textContent=line;summary.appendChild(div);}
    summary.children[5].dataset.buildSill='';summary.children[6].dataset.buildExtension='';
    sheet.querySelector('.build-picture-width').textContent='VIEWED FROM EXTERIOR';
    sheet.querySelector('figcaption').textContent='Slab style reference. Not to scale. Glass and machining are listed separately.';
    const side=t.exteriorHingeSide,outswing=!!c['swing-out'];
    const swing=document.createElement('div');swing.className='build-swing-diagram';
    if(['left','right'].includes(side) && (c['swing-in']||c['swing-out'])) {
      const x=side==='left'?90:130,end=side==='left'?130:90,dy=outswing?40:-40;
      swing.innerHTML=`<svg viewBox="0 0 220 125" role="img" aria-label="Overhead swing, hinges ${side} when viewed from exterior, ${outswing?'out swing':'in swing'}"><text x="110" y="12" text-anchor="middle">INTERIOR</text><text x="110" y="120" text-anchor="middle">EXTERIOR</text><path d="M20 62 H90 M130 62 H200" stroke="black" stroke-width="4"/><path d="M90 62 H130" stroke="#555" stroke-dasharray="3 3"/><path d="M${x} 62 L${x} ${62+dy}" stroke="black" stroke-width="3"/><path d="M${end} 62 Q${end} ${62+dy} ${x} ${62+dy}" fill="none" stroke="black"/><circle cx="${x}" cy="62" r="4" fill="black"/></svg><small>Overhead - ${side} hinges from exterior / ${outswing?'out swing':'in swing'}</small>`;
      sheet.dataset.exteriorHingeSide=side;sheet.dataset.outswing=String(outswing);
    } else {swing.textContent='Overhead swing: exterior hinge position not yet confirmed';delete sheet.dataset.exteriorHingeSide;}
    sheet.querySelector('figure').appendChild(swing);
    const glassSection=[...sheet.querySelectorAll('.build-spec')].find(el=>el.querySelector('h3')?.textContent==='Glass / sidelites');
    if(glassSection && t.glassRequirement==='none')glassSection.querySelector('p').textContent='Door slab glass: not required - solid door. '+(/sidelite|transom/.test(Object.keys(c).filter(k=>c[k]).join(' '))?'Sidelites / transom: check component details.':'');
    const outstanding=[];
    for(const [key,label] of [['headerCutLength','Header cut length'],['sillCutLength','Sill cut length'],['outsideFrameWidth','Outside frame width'],['outsideFrameHeight','Outside frame height']])if(!BuildSettings.validSize(value(t,key)))outstanding.push(label);
    if(!['none','required'].includes(t.glassRequirement))outstanding.push('Glass requirement');
    if(!['left','right'].includes(side))outstanding.push('Exterior hinge position');
    if(requirements.extensionSize && requirements.extensionSize!=='none' && (!value(t,'extensionAssemblyNote') || snapshot?.extensionCheck!==JSON.stringify(requirements)))outstanding.push('Extension cut length: confirm assembly method');
    if(t.glassRequirement==='required' && (!value(t,'doorliteName')||!value(t,'doorliteSize')))outstanding.push('Glass name and size');
    const cuts=sheet.querySelectorAll('.build-cut-table tbody tr');
    for(const row of cuts) if(/Verify|enter size/i.test(row.children[1].textContent)){row.children[1].textContent='MISSING - DO NOT RELEASE';row.classList.add('build-missing-cut');}
    const note=document.createElement('section');note.className='build-spec';
    note.innerHTML='<h3>Sill extension / assembly</h3><p></p>';
    note.querySelector('p').textContent=requirements.extensionSize==='none'?'Not required':`Depth: ${sill.extension.replace(' inch sill extension',' inch')}. Cut length: ${sill.cut}. Assembly check: ${t.extensionAssemblyNote || 'NOT YET CONFIRMED'}`;
    const instructions=[...sheet.querySelectorAll('.build-spec')].find(el=>el.querySelector('h3')?.textContent==='Hardware / special instructions');
    if(instructions) instructions.querySelector('p').textContent+=' | Extension assembly: '+note.querySelector('p').textContent;
    if(outstanding.length){sheet.dataset.buildReady='false';sheet.querySelector('.build-review-status').textContent='DRAFT - DO NOT RELEASE. Outstanding: '+outstanding.join('; ')+'.'+(!snapshot?' Build details not confirmed.':'');}
  }
  return {enhance};
})();
