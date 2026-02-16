import { useTranslation } from 'react-i18next';
import { UiButton } from '@luiscarlosz1/react-library';
import ThemeFan from '../shared/components/themeFan';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header style={{
      background: 'var(--ui-theme-header-bg, #1f8fe6)',
      color: 'var(--ui-theme-header-text, var(--ui-theme-text-on-primary, #fff))',
      padding: '0.75rem 2rem',
      borderBottom: '3px solid var(--ui-theme-selected, #007ECC)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px',
      boxSizing: 'border-box'
    }}>
      <h1 className="header-title" style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--ui-theme-header-text, var(--ui-theme-text-on-primary, #fff))' }}>
        {t('header.title')}
      </h1>

      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        <ThemeFan />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t('common.language')}:</span>
        <UiButton
          label="EN"
          color={i18n.language.startsWith('en') ? 'selected' : 'primary'}
          onButtonClick={() => changeLanguage('en')}
          style={{ padding: '0.25rem 0.5rem', minWidth: 'auto', height: 'auto' }}
        />
        <UiButton
          label="ES"
          color={i18n.language.startsWith('es') ? 'selected' : 'primary'}
          onButtonClick={() => changeLanguage('es')}
          style={{ padding: '0.25rem 0.5rem', minWidth: 'auto', height: 'auto' }}
        />
      </div>
    </header>
  );
}
