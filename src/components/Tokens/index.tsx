import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UiTable } from "@luiscarlosz1/react-library";
import { SegmentControl } from '../../shared/components/segmentControl';
import { tokens } from './tokens';

const CATEGORY_GROUPS_CONFIG = [
    { key: 'typography', categories: ['Typography'] },
    { key: 'layout', categories: ['Layout'] },
    { key: 'icons', categories: ['Icons'] },
    { key: 'status', categories: ['Status'] },
    { key: 'forms', categories: ['Controls', 'Form Text', 'Form Interaction', 'Form Error', 'Form Disabled'] },
    { key: 'themes', categories: ['Primary', 'Secondary', 'Tertiary', 'Selected', 'Success'] },
    { key: 'buttons', categories: ['Button Sizes'] },
    { key: 'table', categories: ['Table'] },
];

export default function TokensComponent() {
    const { t } = useTranslation();
    const [activeGroup, setActiveGroup] = useState<string>('typography');

    const group = CATEGORY_GROUPS_CONFIG.find(g => g.key === activeGroup);
    const activeCategories = group ? group.categories : [];
    const filteredTokens = tokens.filter(token => activeCategories.includes(token.category));
    const tableData = filteredTokens.map(({ apiKey, category, description, type }) => ({
        apiKey,
        category,
        description,
        type,
    }));
    const columns = [
        { field: 'apiKey', text: 'API Key (Theme API)' },
        { field: 'category', text: t('tokens.table.category') },
        { field: 'description', text: t('tokens.table.description') }
    ];

    const segmentOptions = CATEGORY_GROUPS_CONFIG.map(group => ({
        value: group.key,
        label: t(`tokens.groups.${group.key}`)
    }));

    return (
        <>
            <p>{t('tokens.description')}</p>

            <SegmentControl
                options={segmentOptions}
                selected={activeGroup}
                onSelect={(value: string) => setActiveGroup(value)}
            />

            <p>
                {t('common.showing')} <strong>{filteredTokens.length}</strong> {t('common.tokens')} {t('common.in')} <strong>{t(`tokens.groups.${activeGroup}`)}</strong>.
            </p>

            <UiTable headers={columns} data={tableData} />
        </>
    );
}
