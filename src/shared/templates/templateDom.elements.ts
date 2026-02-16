/**
 * Creates a div container for table cells.
 */
export function createDiv(text: string = ''): HTMLDivElement {
  const div = document.createElement('div');
  div.style.setProperty('display', 'flex');
  div.style.setProperty('align-items', 'center');
  div.style.setProperty('width', '100%');

  if (text !== '') {
    div.appendChild(createSpan(text));
  }

  return div;
}

/**
 * Creates a span with ellipsis behavior.
 */
export function createSpan(text: string): HTMLSpanElement {
  const span = document.createElement('span');
  span.textContent = text;
  span.style.setProperty('white-space', 'nowrap');
  span.style.setProperty('overflow', 'hidden');
  span.style.setProperty('text-overflow', 'ellipsis');
  span.style.setProperty('flex', '1');
  return span;
}

/**
 * Creates a ui-input element.
 */
export function createUiInput(
  type: 'text' | 'number',
  value: string
): HTMLElement {
  const input = document.createElement('ui-input');
  input.setAttribute('type', type);
  input.setAttribute('value', value);
  return input;
}

/**
 * Creates a ui-checkbox element.
 */
export function createUiCheckbox(checked: boolean): HTMLElement {
  const checkbox = document.createElement('ui-checkbox');
  if (checked) {
    checkbox.setAttribute('checked', '');
  }
  return checkbox;
}

/**
 * Creates a ui-select element.
 */
export function createUiSelect(
  options: unknown[],
  value: string
): HTMLElement {
  const select = document.createElement('ui-select');
  select.setAttribute('value', value);
  (select as any).options = options.map(o => ({
    value: o,
    text: o
  }));
  return select;
}

/**
 * Creates a ui-textarea element.
 */
export function createUiTextarea(value: string): HTMLElement {
  const textarea = document.createElement('ui-textarea');
  textarea.setAttribute('value', value);
  return textarea;
}
