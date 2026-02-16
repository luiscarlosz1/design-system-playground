import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

const getMenuSections = (t: TFunction) => [
  {
    title: t('menu.documentation'),
    items: [
      { key: 'Tokens', label: t('menu.tokens') },
    ],
  },
  {
    title: t('menu.form_controls'),
    items: [
      { key: 'UI Input', label: t('menu.ui_input') },
      { key: 'UI Autocomplete', label: t('menu.ui_autocomplete') },
      { key: 'UI Select', label: t('menu.ui_select') },
      { key: 'UI Datepicker', label: t('menu.ui_datepicker') },
      { key: 'UI Textarea', label: t('menu.ui_textarea') },
      { key: 'UI Checkbox', label: t('menu.ui_checkbox') },
      { key: 'UI Radiobutton', label: t('menu.ui_radiobutton') },
    ],
  },
  {
    title: t('menu.buttons'),
    items: [
      { key: 'UI Button', label: t('menu.ui_button') },
      { key: 'UI Button Icon', label: t('menu.ui_button_icon') },
      { key: 'UI Button Dropdown', label: t('menu.ui_button_dropdown') },
    ],
  },
  {
    title: t('menu.data_display'),
    items: [
      { key: 'UI Icon', label: t('menu.ui_icon') },
      { key: 'UI Table', label: t('menu.ui_table') },
      { key: 'UI Table Manager', label: t('menu.ui_table_manager') },
      { key: 'UI Calendar', label: t('menu.ui_calendar') },
      { key: 'UI Dropdown', label: t('menu.ui_dropdown') },
      { key: 'UI Card', label: t('menu.ui_card') },
    ],
  },
  {
    title: t('menu.navigation'),
    items: [
      { key: 'UI Paginator', label: t('menu.ui_paginator') },
      { key: 'UI Search', label: t('menu.ui_search') },
    ],
  },
  {
    title: t('menu.panels_accordions'),
    items: [
      { key: 'UI Accordion', label: t('menu.ui_accordion') },
    ],
  },
  {
    title: t('menu.overlays'),
    items: [
      { key: 'UI Popup', label: t('menu.ui_popup') },
      { key: 'UI Side Panel', label: t('menu.ui_side_panel') },
      { key: 'UI Notification', label: t('menu.ui_notification') },
    ],
  },
];


interface SideMenuProps {
  onSelect?: (name: string) => void;
}

export default function SideMenu({ onSelect }: SideMenuProps) {
  const { t } = useTranslation();
  const menuSections = getMenuSections(t);

  return (
    <aside style={{
      width: '240px',
      background: 'var(--ui-theme-tertiary, #f0f9ff)',
      borderRight: '1px solid var(--ui-theme-border-default, #e3f2fd)',
      padding: '2rem 1rem',
      overflowY: 'auto',
      boxShadow: 'var(--ui-theme-shadow-s, 2px 0 8px #e3f2fd33)'
    }}>
      <nav>
        {menuSections.map(section => (
          <div key={section.title} style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--ui-theme-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid var(--ui-theme-primary-hover, #4DBAFF)',
              background: 'none',
            }}>{section.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {section.items.map(item => (
                <li key={item.key} style={{}}>
                  <a
                    href="#"
                    onClick={e => { e.preventDefault(); onSelect?.(item.key); }}
                    style={{
                      display: 'block',
                      padding: '0.625rem 1rem',
                      background: 'var(--ui-theme-control-bg, #fff)',
                      border: '1px solid var(--ui-theme-border-default, #e3f2fd)',
                      borderRadius: '4px',
                      color: 'var(--ui-theme-text-primary, #37465a)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'all 0.15s',
                      boxShadow: 'var(--ui-theme-shadow-xs)',
                      cursor: 'pointer',
                    }}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
