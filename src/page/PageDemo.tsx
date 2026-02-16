import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { demoComponentMap } from '../demos/demoComponentMap';
import Header from '../layouts/Header';
import SideMenu from '../layouts/SideMenu';

export default function PageDemo() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>('Tokens');
  const DemoComponent = demoComponentMap[selected];

  const getTranslatedTitle = (key: string) => {
    if (key === 'Tokens') return t('menu.tokens');
    const menuKey = key.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_');
    const translated = t(`menu.${menuKey}`);
    return translated !== `menu.${menuKey}` ? translated : key;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      background: 'var(--ui-theme-bg-body, #fff)',
      color: 'var(--ui-theme-text-primary, #1A202C)',
      overflow: 'hidden'
    }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <SideMenu onSelect={setSelected} />
        <main style={{ flex: 1, padding: '2rem', overflow: 'auto', minHeight: 0 }}>
          <h2>{getTranslatedTitle(selected)}</h2>
          {DemoComponent ? <DemoComponent /> : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'var(--ui-theme-text-secondary)'
            }}>
              {t('common.select_component')}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}