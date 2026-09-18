/* Text-based, letter-size factory PDF; only the door illustration is rasterized. */
window.BuildPdf = (() => {
  const ascii = value => String(value || '').normalize('NFKD').replace(/[\u2010-\u2015]/g,'-').replace(/\u2033/g,' inch').replace(/\u00b7|\u2022/g,' - ').replace(/\u25a1/g,'[ ]').replace(/[^\x20-\x7e\n]/g,'');
  const enc = value => new TextEncoder().encode(value);
  const literal = value => ascii(value).replace(/([\\()])/g,'\\$1');
  const measure = document.createElement('canvas').getContext('2d');
  function wrap(value, width, size, bold = false) {
    measure.font = `${bold ? 'bold ' : ''}${size}px Arial`;
    const lines = [];
    for (const paragraph of ascii(value).split('\n')) {
      let line = '';
      for (const word of paragraph.split(/\s+/)) {
        if (line && measure.measureText(`${line} ${word}`).width > width) { lines.push(line); line = ''; }
        for (const char of (line ? ' ' : '') + word) {
          if (measure.measureText(line + char).width > width && line) { lines.push(line); line = ''; }
          line += char;
        }
      }
      lines.push(line);
    }
    return lines;
  }
  async function picture(sheet) {
    const source = sheet.querySelector('.front-view');
    if (!source) return null;
    if (!window.html2canvas) throw Error('The door image renderer did not load. Refresh and try again.');
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:-10000px;top:0;width:360px;height:430px;background:white;display:flex;align-items:center;justify-content:center;';
    const clone = source.cloneNode(true);
    clone.querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
    clone.style.cssText += ';transform:scale(.8);transform-origin:center;flex-shrink:0;';
    host.appendChild(clone); document.body.appendChild(host);
    try {
      const images = [...clone.querySelectorAll('img[src]')].filter(img => img.getAttribute('src') && !img.hidden);
      await Promise.all(images.map(img => img.decode().catch(()=>{})));
      if (images.some(img => !img.naturalWidth)) throw Error('The door image has not loaded. Refresh before preparing the PDF.');
      const canvas = await html2canvas(host, {backgroundColor:'#fff',scale:1.5,useCORS:true,logging:false});
      const bytes = Uint8Array.from(atob(canvas.toDataURL('image/jpeg',.72).split(',')[1]), c=>c.charCodeAt(0));
      return {bytes,width:canvas.width,height:canvas.height};
    } finally { host.remove(); }
  }
  async function create(sheet) {
    const image = await picture(sheet);
    const pages = [[]]; let page = pages[0]; let y = 34;
    const text = (value,x,top,size=10,bold=false) => page.push(`BT /${bold?'F2':'F1'} ${size} Tf 0 g 1 0 0 1 ${x} ${792-top} Tm (${literal(value)}) Tj ET\n`);
    const line = top => page.push(`0.75 G 0.4 w 28 ${792-top} m 584 ${792-top} l S\n`);
    const reserve = height => { if(y+height>746){page=[];pages.push(page);text('WEST BUILT - BUILD DETAILS (continued)',28,34,12,true);y=54;} };
    text('WEST BUILT - FACTORY BUILD SHEET',28,y,14,true); y+=20;
    const name = sheet.querySelector('.build-sheet-head strong')?.textContent || 'Door build';
    for(const row of wrap(name,556,11,true)){text(row,28,y,11,true);y+=14;}
    const meta = sheet.querySelector('.build-sheet-head > div:last-child')?.innerText || '';
    text(meta.replace(/\n/g,'   |   '),28,y,8); y+=12;line(y);y+=20;
    const top = y;
    const widthLabel = sheet.querySelector('.build-picture-width')?.textContent || '';
    text(widthLabel,44,top,14,true);
    for(const item of sheet.querySelectorAll('.build-key-specs > div')) {
      const size = 13;
      for(const row of wrap(item.textContent,365,size,true)){reserve(size+7);text(row,216,y,size,true);y+=size+7;}
    }
    if(image) pages[0].push(`q 135 0 0 161 28 ${792-top-173} cm /Im0 Do Q\n`);
    else text('No linked door illustration',28,top+50,8);
    let handY=top+185;
    for(const row of wrap(sheet.querySelector('.build-picture-handing')?.textContent || '',174,10,true)){text(row,28,handY,10,true);handY+=12;}
    y=Math.max(y,handY+5)+5;line(y);y+=17;
    reserve(86);text('CUT SIZES',28,y,10,true);y+=17;
    text('Component',28,y,9,true);text('Cut to',290,y,9,true);text('Checked',525,y,9,true);y+=9;line(y);y+=16;
    for(const row of sheet.querySelectorAll('.build-cut-table tbody tr')) {
      const cells=row.querySelectorAll('td');text(cells[0].textContent,28,y,10);text(cells[1].textContent,290,y,11,true);text('[ ]',535,y,10);y+=18;
    }
    y+=4;
    const sections=[...sheet.querySelectorAll('.build-spec:not(.build-cuts)')];
    for(let index=0;index<sections.length;index+=2) {
      const pair=sections.slice(index,index+2).map(section=>({title:section.querySelector('h3')?.textContent || '',content:section.querySelector('p')?.innerText || ''}));
      const rows=pair.map(section=>wrap(section.content,266,8.5));
      const height=28+Math.max(...rows.map(lines=>lines.length))*11;
      if(height>680){
        for(const section of pair){reserve(30);line(y);y+=12;text(section.title.toUpperCase(),28,y,8.5,true);y+=12;for(const row of wrap(section.content,556,8.5)){reserve(11);text(row,28,y,8.5);y+=11;}y+=4;}
      }else{
        reserve(height);line(y);
        pair.forEach((section,column)=>{const x=28+column*290;text(section.title.toUpperCase(),x,y+12,8.5,true);rows[column].forEach((row,i)=>text(row,x,y+24+i*11,8.5));});
        y+=height;
      }
    }
    reserve(43);line(y);y+=15;text('[ ] Materials   [ ] Machining   [ ] Assembly   [ ] Finish   [ ] Final QC',28,y,9);y+=19;
    text('Built by: __________________    Checked by: __________________    Date: __________',28,y,9);
    pages.forEach((commands,i)=>commands.push(`BT /F1 8 Tf 0 g 1 0 0 1 520 20 Tm (Page ${i+1} of ${pages.length}) Tj ET\n`));
    const objects=[];
    const add=value=>{objects.push(typeof value==='string'?enc(value):value);return objects.length;};
    add('<< /Type /Catalog /Pages 2 0 R >>');add('');
    add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
    const imageId=image?add(new Blob([enc(`<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.bytes.length} >>\nstream\n`),image.bytes,enc('\nendstream')])):null;
    const refs=[];
    for(const commands of pages){const content=enc(commands.join(''));const contentId=add(new Blob([enc(`<< /Length ${content.length} >>\nstream\n`),content,enc('endstream')]));refs.push(add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> ${imageId?`/XObject << /Im0 ${imageId} 0 R >>`:''} >> /Contents ${contentId} 0 R >>`));}
    objects[1]=enc(`<< /Type /Pages /Kids [${refs.map(id=>`${id} 0 R`).join(' ')}] /Count ${refs.length} >>`);
    const parts=[enc('%PDF-1.4\n')],offsets=[0];let position=parts[0].length;
    objects.forEach((body,i)=>{const header=enc(`${i+1} 0 obj\n`),tail=enc('\nendobj\n');offsets.push(position);parts.push(header,body,tail);position+=header.length+(body.size??body.length)+tail.length;});
    parts.push(enc(`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')}trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${position}\n%%EOF`));
    return {blob:new Blob(parts,{type:'application/pdf'}),name:ascii(`Build - ${name}`).replace(/[<>:"/\\|?*]/g,'-').trim()+'.pdf',pages:pages.length};
  }
  function mount(container,sheet) {
    container.innerHTML='<button type="button" data-prepare>Prepare PDF</button><span role="status" aria-live="polite"></span><div class="build-pdf-ready" hidden><a data-open target="_blank" rel="noopener">Open / Print PDF</a><a data-save>Save PDF</a><button type="button" data-share>Email / Share PDF</button></div>';
    const button=container.querySelector('[data-prepare]'),status=container.querySelector('[role=status]'),ready=container.querySelector('.build-pdf-ready');let current=null,url=null,revision=0;
    const invalidate=()=>{revision++;current=null;ready.hidden=true;status.textContent='';if(url){URL.revokeObjectURL(url);url=null;}};
    new MutationObserver(invalidate).observe(sheet,{childList:true,subtree:true,characterData:true});
    button.addEventListener('click',async()=>{
      if(sheet.hidden || !sheet.textContent.trim()){status.textContent='Choose an order first.';return;}
      if(document.querySelector('.build-settings-form')?.dataset.dirty==='true'){status.textContent='Save your build requirements first, then prepare the PDF.';return;}
      button.disabled=true;status.textContent='Preparing a small, print-ready PDF...';const started=revision;
      try{const result=await create(sheet);if(started!==revision)throw Error('The sheet changed. Prepare the PDF again.');if(url)URL.revokeObjectURL(url);current=result;url=URL.createObjectURL(result.blob);const open=container.querySelector('[data-open]'),save=container.querySelector('[data-save]');open.href=url;save.href=url;save.download=result.name;ready.hidden=false;status.textContent=`Ready - ${result.pages} page${result.pages===1?'':'s'}, ${Math.ceil(result.blob.size/1024)} KB. Open to print, or save/email the PDF.`;}
      catch(error){status.textContent=`PDF not prepared: ${error.message}`;}finally{button.disabled=false;}
    });
    container.querySelector('[data-share]').addEventListener('click',async()=>{
      if(!current)return;const file=new File([current.blob],current.name,{type:'application/pdf'});
      try{if(navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:current.name});return;}
        container.querySelector('[data-save]').click();status.textContent='PDF downloaded. Attach it to the email that opens.';
        location.href=`mailto:?subject=${encodeURIComponent(current.name.replace(/\.pdf$/i,''))}&body=${encodeURIComponent('Please see the attached factory build sheet.\n\nAttach the PDF you just downloaded before sending.')}`;
      }catch(error){if(error.name!=='AbortError')status.textContent='Sharing is unavailable here. Use Save PDF, then attach the file to your email.';}
    });
  }
  return {create,mount};
})();
