import { useState, useEffect } from 'react';
import { themes } from './Themes';
import './ThemeFan.scss';

export default function ThemeFan() {
    const [currentThemeId, setCurrentThemeId] = useState(() => {
        return localStorage.getItem('app-theme') || 'blue';
    });

    useEffect(() => {
        const theme = themes.find(t => t.id === currentThemeId) || themes[0];
        const root = document.documentElement;

        Object.entries(theme.tokens).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        localStorage.setItem('app-theme', currentThemeId);
    }, [currentThemeId]);

    return (
        <div className="theme-fan">
            <div className="theme-fan__palette">
                {themes.map((theme) => (
                    <span
                        key={theme.id}
                        className={`theme-fan__color ${currentThemeId === theme.id ? 'theme-fan__color--active' : ''}`}
                        style={{ backgroundColor: theme.primaryColor }}
                        title={theme.name}
                        onClick={() => setCurrentThemeId(theme.id)}
                    />
                ))}
                <div className="theme-fan__rivet">
                    <div className="theme-fan__rivet-inner"></div>
                </div>
            </div>
        </div>
    );
}
