const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/chris/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 try {
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true});const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',async route=>{
   const url=new URL(route.request().url());if(url.origin!=='http://build.test')return route.abort();
   if(url.pathname==='/supabase-config.js')return route.fulfill({contentType:'text/javascript',body:'window.WEST_BUILT_SUPABASE={};'});
   const file=path.join(root,url.pathname==='/'?'index.html':url.pathname);
   if(!fs.existsSync(file))return route.abort();
   return route.fulfill({body:fs.readFileSync(file),contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png'})[path.extname(file)]||'application/octet-stream'});
  });
  await page.goto('http://build.test/');
  const original=await page.evaluate(async()=>{
   currentUsername='chris';sessionStorage.setItem('westBuiltDoorBuilderUser','chris');await setAuthenticated(true);
   const quote=captureQuoteState();quote.id='review-quote';quote.quoteNumber='TEST-Q';quote.values={...quote.values,panelStyle:'steel-6-panel',grainFilter:'steel',systemType:'single',frameWidth:'32',frameHeight:'81.875',handing:'left',swingType:'inswing',jambDepth:'4.625',brickmould:true,hardware:'black',doorLite:'none',handleSet:'none',exteriorFinishType:'paint',interiorFinishType:'paint',finish:'white',interiorFinish:'white'};
   writeSavedQuotes([quote]);
   const order={id:'review-order',title:'Synthetic mismatch test',orderNumber:'TEST-O',sourceQuoteId:quote.id,sourceQuoteNumber:quote.quoteNumber,checks:{'layout-single':true,'type-steel-polytex':true,'width-32':true,'height-79':true,'hinge-lhh':true,'swing-in':true,'bore-double-2-18':true,'jamb-4-5-8-x-84':true,'hinge-flat-black':true,'other-brickmould':true,'cutout-no':true},text:{slabPanel:'Steel 2 Panel Camber Top',paintExterior:'white',paintInterior:'white',poNumber:'TEST-PO'}};
   writeSavedDoorOrders([order]);return JSON.stringify(order);
  });
  const builderBefore=await page.evaluate(()=>JSON.stringify(captureQuoteState().values));
  await page.locator('#buildLink').click();await page.locator('#buildOrderSelect').selectOption('review-order');await page.locator('.build-review-details').evaluate(el=>el.open=true);
  const form=page.locator('.build-review-form');
  assert.equal(await form.locator('[name=panel]').inputValue(),'');
  assert.match(await form.locator('.build-review-row.build-conflict').first().textContent(),/Camber Top.*Steel 6 Panel/s);
  assert.equal(await page.locator('#buildPicture img').count(),0);
  assert.match(await page.locator('.build-review-status').textContent(),/DRAFT/);
  await page.locator('.build-review-details').evaluate(el=>el.open=false);
  assert.equal(await form.isVisible(),false);
  assert.equal(await page.locator('[data-prepare]').isVisible(),true);
  await page.locator('[data-prepare]').click();await page.locator('[data-save]').waitFor({state:'visible'});
  assert.match(await page.locator('#buildPdfActions [role=status]').textContent(),/Ready/);
  const draftPath=path.join(root,'test-results','incomplete-print.pdf');fs.mkdirSync(path.dirname(draftPath),{recursive:true});
  const incompleteDownload=page.waitForEvent('download');await page.locator('[data-save]').click();await (await incompleteDownload).saveAs(draftPath);
  await page.locator('[name=sillSize]').selectOption('4 13/16');await page.locator('[name=extensionSize]').selectOption('none');await page.locator('.build-settings-form button').click();
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('[name=panel]').selectOption('steel-6-panel');
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('[name=headerCutLength]').fill('32');await form.locator('[name=sillCutLength]').fill('32');await form.locator('[name=outsideFrameWidth]').fill('33 1/2');await form.locator('[name=outsideFrameHeight]').fill('81 7/8');await form.locator('[name=exteriorHingeSide]').selectOption('left');await form.locator('[name=glassRequirement]').selectOption('none');await form.locator('[name=checked]').check();
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('button[type=submit]').click();
  assert.match(await page.locator('.build-review-status').textContent(),/^CONFIRMED/);
  assert.match(await page.locator('#buildPicture img').getAttribute('src'),/steel-panels\/6-panel.png/);
  assert.equal(await page.evaluate(()=>JSON.stringify(captureQuoteState().values)),builderBefore,'Build must not modify the builder');
  assert.equal(await page.evaluate(()=>JSON.stringify(readSavedDoorOrders()[0].checks)),JSON.stringify(JSON.parse(original).checks),'Purchase selections must be untouched');
  assert.equal(await page.evaluate(()=>readSavedDoorOrders()[0].text.slabPanel),'Steel 2 Panel Camber Top');
  // PDF contains selected panel text and a genuine image, with no draft label.
  await page.locator('[data-prepare]').click();await page.locator('[data-save]').waitFor({state:'visible'});
  assert.match(await page.locator('#buildPdfActions [role=status]').textContent(),/1 page/);
  const output=path.join(root,'test-results');fs.mkdirSync(output,{recursive:true});
  const download=page.waitForEvent('download');await page.locator('[data-save]').click();await (await download).saveAs(path.join(output,'confirmed-build.pdf'));
  await page.locator('#buildSheet').screenshot({path:path.join(output,'confirmed-phone.png')});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),true,'No phone horizontal overflow');
  // Explicit extension depth and cut length, and all four swing combinations.
  await page.evaluate(()=>{const o=readSavedDoorOrders()[0];o.buildRequirements={sillSize:'4 13/16',extensionSize:'can-am:3 1/4',extensionCutLength:'36'};writeSavedDoorOrders([o]);renderBuildSheet();});
  assert.match(await page.locator('.build-review-status').textContent(),/confirm assembly method/);
  await page.evaluate(()=>{const o=readSavedDoorOrders()[0];o.buildSnapshot.text.extensionAssemblyNote='36 inch cut checked against assembly method';o.buildSnapshot.extensionCheck=JSON.stringify(o.buildRequirements);writeSavedDoorOrders([o]);renderBuildSheet();});
  assert.match(await page.locator('.build-key-specs').textContent(),/3 1\/4 inch extension depth/);
  assert.equal(await page.locator('[data-build-extension-cut]').textContent(),'36 inch');
  await page.locator('[data-prepare]').click();await page.locator('[data-save]').waitFor({state:'visible'});
  assert.match(await page.locator('#buildPdfActions [role=status]').textContent(),/1 page/);
  const extensionDownload=page.waitForEvent('download');await page.locator('[data-save]').click();await (await extensionDownload).saveAs(path.join(output,'extension-build.pdf'));
  for(const side of ['left','right']) for(const out of [false,true]) {
    await page.evaluate(({side,out})=>{const o=readSavedDoorOrders()[0];o.buildSnapshot.text.exteriorHingeSide=side;o.buildSnapshot.checks['swing-out']=out;o.buildSnapshot.checks['swing-in']=!out;writeSavedDoorOrders([o]);renderBuildSheet();},{side,out});
    assert.match(await page.locator('.build-swing-diagram svg').getAttribute('aria-label'),new RegExp(side+'.*'+(out?'out swing':'in swing')));
  }
  await page.evaluate(()=>{const o=readSavedDoorOrders()[0];o.buildSnapshot.text.exteriorHingeSide='left';o.buildSnapshot.checks['swing-out']=false;o.buildSnapshot.checks['swing-in']=true;o.buildRequirements={sillSize:'4 13/16',extensionSize:'none'};writeSavedDoorOrders([o]);renderBuildSheet();});
  // Editing any review field invalidates existing downloadable output.
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('[name=headerCutLength]').fill('33');assert.equal(await page.locator('.build-pdf-ready').isVisible(),false);
  await page.locator('[data-prepare]').click();await page.locator('[data-save]').waitFor({state:'visible'});assert.match(await page.locator('#buildPdfActions [role=status]').textContent(),/DRAFT: unsaved edits are not included/);
  const unsavedDownload=page.waitForEvent('download');await page.locator('[data-save]').click();await (await unsavedDownload).saveAs(path.join(output,'unsaved-print.pdf'));
  await page.reload();await page.locator('#buildLink').click();await page.locator('#buildOrderSelect').selectOption('review-order');await page.locator('.build-review-details').evaluate(el=>el.open=true);
  assert.match(await page.locator('.build-review-status').textContent(),/^CONFIRMED/);
  // Source change leaves last confirmed picture and text intact, but requires review.
  await page.evaluate(()=>{const q=readSavedQuotes()[0];q.values.panelStyle='steel-flush';writeSavedQuotes([q]);renderBuildSheet();});
  assert.match(await page.locator('.build-review-status').textContent(),/DRAFT.*changed/);
  assert.match(await page.locator('#buildPicture img').getAttribute('src'),/6-panel.png/);
  assert.equal(await form.locator('[name=panel]').inputValue(),'');
  await page.locator('[data-prepare]').click();await page.locator('[data-save]').waitFor({state:'visible'});
  const draftDownload=page.waitForEvent('download');await page.locator('[data-save]').click();await (await draftDownload).saveAs(path.join(output,'draft-build.pdf'));
  // Missing quote/material must not inherit defaults; duplicate widths must be resolved.
  await page.evaluate(()=>{const o=readSavedDoorOrders()[0];delete o.buildSnapshot;o.sourceQuoteId='missing';o.checks['width-34']=true;delete o.checks['type-steel-polytex'];o.text.slabPanel='Unlisted custom slab';writeSavedDoorOrders([o]);renderBuildSheet();});
  assert.equal(await form.locator('[name=material]').inputValue(),'');assert.equal(await form.locator('[name=width]').inputValue(),'');assert.equal(await form.locator('[name=panel]').inputValue(),'');
  assert.equal(await page.locator('#buildPicture img').count(),0);
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('[name=panel]').selectOption('steel-6-panel');await form.locator('[name=material]').selectOption('type-fiberglass-smooth');await form.locator('[name=width]').selectOption('width-32');await form.locator('[name=headerCutLength]').fill('32');await form.locator('[name=sillCutLength]').fill('32');await form.locator('[name=outsideFrameWidth]').fill('33 1/2');await form.locator('[name=outsideFrameHeight]').fill('81 7/8');await form.locator('[name=exteriorHingeSide]').selectOption('left');await form.locator('[name=glassRequirement]').selectOption('none');await form.locator('[name=checked]').check();await form.locator('button').click();
  assert.match(await form.locator('[role=status]').textContent(),/picture and material do not match/);
  // Pure comparison checks for handwritten descriptions, hardware and unknown quote fields.
  const comparisons=await page.evaluate(()=>{
    const catalog=[{id:'steel-6-panel',label:'Steel 6 Panel',type:'steel'}];
    const base={checks:{'type-steel-polytex':true,'bore-multipoint':true},text:{slabPanel:'six panel steel'}};
    const rows=BuildReview.model(base,{values:{panelStyle:'steel-6-panel',handleSet:'grip-set'}},catalog,buildCheckboxes,{checks:{},text:{}});
    const reference=buildQuoteReference({values:{}});
    return {panel:rows.find(r=>r.id==='panel').initial,boreConflict:rows.find(r=>r.id==='bore').conflict,hasDefaultHand:Object.keys(reference.checks).some(k=>/^hinge-[lr]hh|^swing-|^type-|^cutout-/.test(k)),sizeChecks:['0','1/0','-1','abc','35 3/4','1.0625'].map(BuildSettings.validSize)};
  });
  assert.equal(comparisons.panel,'steel-6-panel');assert.equal(comparisons.boreConflict,true);assert.equal(comparisons.hasDefaultHand,false);assert.deepEqual(comparisons.sizeChecks,[false,false,false,false,true,true]);
  // A custom slab can be confirmed without inventing a picture; simulate failed shared sync.
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('[name=panel]').selectOption('custom');await form.locator('[name=customPanel]').fill('Custom six-panel fibreglass slab');await form.locator('[name=width]').selectOption('width-custom');await form.locator('[name=doorCustomSize]').fill('33 x 79');
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('[name=headerCutLength]').fill('33');await form.locator('[name=sillCutLength]').fill('33');
  await page.evaluate(()=>{sharedStorageEnabled=()=>true;sharedStorageRequest=async()=>{throw Error('Synthetic offline test');};});
  await page.locator('.build-review-details').evaluate(el=>el.open=true);await form.locator('button').click();assert.match(await form.locator('[role=status]').textContent(),/Sync failed/);assert.match(await page.locator('.build-review-status').textContent(),/^CONFIRMED/);assert.equal(await page.locator('#buildPicture img').count(),0);assert.match(await page.locator('.build-key-specs').textContent(),/33 x 79/);
  // Copying an order must not carry factory approval forward.
  await page.evaluate(async()=>{sharedStorageEnabled=()=>false;generateDoorPurchaseOrderNumber=async()=>999;await copyDoorOrder('review-order');});
  assert.equal(await page.evaluate(()=>!!readSavedDoorOrders().find(o=>o.id!=='review-order').buildSnapshot),false);
  assert.deepEqual(errors,[]);
  console.log('PASS: conflict selection, correct slab image, unchanged builder/purchase order, confirmed persistence, stale-source draft, missing source, duplicate widths, material validation, PDF invalidation, one-page PDF and phone layout. No production traffic.');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});


