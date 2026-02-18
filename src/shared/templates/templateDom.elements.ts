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
 * Creates a monospace span (for prop names, code, etc.).
 */
export function createMonoSpan(text: string, color = '#007ECC'): HTMLSpanElement {
  const span = document.createElement('span');
  span.textContent = text;
  span.style.fontFamily = 'monospace';
  span.style.fontSize = '0.875rem';
  span.style.color = color;
  return span;
}

/**
 * Creates a badge element.
 */
export function createBadge(text: string): HTMLSpanElement {
  const badge = document.createElement('span');
  badge.style.display = 'inline-flex';
  badge.style.alignItems = 'center';
  badge.style.justifyContent = 'center';
  badge.style.width = '20px';
  badge.style.height = '20px';
  badge.style.borderRadius = '50%';
  badge.style.backgroundColor = '#333';
  badge.style.color = '#fff';
  badge.style.fontSize = '11px';
  badge.style.fontWeight = 'bold';
  badge.textContent = text;
  return badge;
}

/**
 * Creates a flex container with badges.
 */
export function createBadgeList(value: string): HTMLElement | string {
  if (!value || value === '-') return '-';
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '4px';
  value.split(',').map(s => s.trim()).forEach(id => {
    container.appendChild(createBadge(id));
  });
  return container;
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
