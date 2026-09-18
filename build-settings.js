/* Factory requirements are separate from the supplier's purchase selections. */
window.BuildSettings = (() => {
  const sills = ['4 13/16', '5 3/4', '6 13/16', '7 1/4'];
  const standard = ['1 5/16', '1 1/2', '2', '2 3/4', '3 1/8', '4'];
  const canAm = ['1 1/16', '2', '3 1/4', '4 3/8'];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const option = (value, label) => `<option value="${escape(value)}">${escape(label)}</option>`;
  function validSize(value) {
    if (!/^\d+(?:\.\d+|(?:\s+\d+)?\/\d+)?$/.test(value)) return false;
    const parts = value.split(/\s+/);
    const fraction = parts.at(-1).split('/');
    const number = fraction.length === 2 ? (parts.length === 2 ? Number(parts[0]) : 0) + Number(fraction[0]) / Number(fraction[1]) : Number(value);
    return Number.isFinite(number) && number > 0;
  }
  function description(settings = {}) {
    const sill = settings.sillSize === 'custom' ? settings.sillCustom : settings.sillSize;
    const extension = settings.extensionSize === 'custom' ? settings.extensionCustom : settings.extensionSize?.split(':').at(-1);
    return {
      sill: sill ? `${sill} inch sill` : 'Sill size: select for build',
      extension: settings.extensionSize === 'none' ? 'No sill extension' : extension ? `${extension} inch sill extension` : 'Sill extension: select for build',
      cut: settings.extensionSize === 'none' ? 'Not required' : settings.extensionCutLength ? `${settings.extensionCutLength} inch` : 'Verify / enter size',
    };
  }
  function mount(container, settings = {}, save) {
    container.innerHTML = `<form class="build-settings-form"><h2>Sill requirements for this build</h2><p>Choose what the door needs, including parts from stock. These selections do not change the supplier order.</p>
      <div class="build-settings-fields">
      <label>Sill size<select name="sillSize">${option('', 'Select sill size')}${sills.map(size => option(size, `${size} inch`)).join('')}${option('custom','Custom size')}</select></label>
      <label data-custom="sill" hidden>Custom sill size (inches)<input name="sillCustom" placeholder="e.g. 7 1/4" maxlength="30"></label>
      <label>Sill extension<select name="extensionSize">${option('','Select extension')}${option('none','No extension')}<optgroup label="Standard extensions">${standard.map(size => option(`standard:${size}`, `${size} inch`)).join('')}</optgroup><optgroup label="Can Am extensions">${canAm.map(size => option(`can-am:${size}`, `${size} inch`)).join('')}</optgroup>${option('custom','Custom extension')}</select></label>
      <label data-custom="extension" hidden>Custom extension size (inches)<input name="extensionCustom" placeholder="e.g. 1 1/16" maxlength="30"></label>
      <label>Extension cut length (inches)<input name="extensionCutLength" placeholder="e.g. 35 3/4" maxlength="30"><small>Length to cut, separate from the extension size above.</small></label></div>
      <button type="submit">Save build requirements</button><span class="build-settings-status" role="status" aria-live="polite"></span></form>`;
    const form = container.querySelector('form');
    const status = form.querySelector('[role="status"]');
    for (const key of ['sillSize','sillCustom','extensionSize','extensionCustom','extensionCutLength']) form.elements[key].value = settings[key] || '';
    function update() {
      form.querySelector('[data-custom="sill"]').hidden = form.elements.sillSize.value !== 'custom';
      form.querySelector('[data-custom="extension"]').hidden = form.elements.extensionSize.value !== 'custom';
      form.elements.extensionCutLength.disabled = form.elements.extensionSize.value === 'none';
    }
    form.addEventListener('input', () => { form.dataset.dirty = 'true'; status.textContent = 'Unsaved changes'; update(); });
    form.addEventListener('change', update);
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const data = Object.fromEntries(['sillSize','sillCustom','extensionSize','extensionCustom','extensionCutLength'].map(key => [key,form.elements[key].value.trim()]));
      const required = [!data.sillSize && 'Choose a sill size.', !data.extensionSize && 'Choose an extension or No extension.', data.sillSize === 'custom' && !validSize(data.sillCustom) && 'Enter a valid custom sill size.', data.extensionSize === 'custom' && !validSize(data.extensionCustom) && 'Enter a valid custom extension size.', data.extensionSize && data.extensionSize !== 'none' && !validSize(data.extensionCutLength) && 'Enter the extension cut length, for example 35 3/4.'].filter(Boolean);
      if (required.length) { status.textContent = required[0]; return; }
      if (data.extensionSize === 'none') data.extensionCutLength = '';
      if (data.sillSize !== 'custom') data.sillCustom = '';
      if (data.extensionSize !== 'custom') data.extensionCustom = '';
      const button = form.querySelector('button'); button.disabled = true;
      try { status.textContent = await save(data) || 'Build requirements saved.'; form.dataset.dirty = 'false'; }
      catch (error) { status.textContent = `Could not save: ${error.message}`; }
      finally { button.disabled = false; }
    });
    update();
  }
  return { mount, description };
})();
