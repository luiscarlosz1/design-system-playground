import { useState, useMemo, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UiTable } from '@luiscarlosz1/react-library';
import {
    createDiv,
    createSpan,
    createMonoSpan,
    createUiInput,
    createUiCheckbox,
    createUiSelect,
    createUiTextarea
} from '../../shared/templates/templateDom.elements';
import { SegmentControl } from '../../shared/components/segmentControl';
import type { SegmentOption } from '../../shared/components/segmentControl';
import type { DocumentationTableProps, PropMetadata, TableRow } from './types';

export default function DocumentationTable({
    props,
    sections = [],
    values,
    onValueChange,
    activeTab: controlledActiveTab,
    onTabChange
}: DocumentationTableProps) {
    const { t } = useTranslation();

    const [internalActiveTab, setInternalActiveTab] = useState<string>(() => {
        if (props.length) return 'props';
        if (sections.length) return sections[0].id;
        return '';
    });

    const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

    const handleTabChange = (tab: string) => {
        if (onTabChange) onTabChange(tab);
        else setInternalActiveTab(tab);
    };

    const createControl = useCallback(
        (prop: PropMetadata): HTMLElement => {
            const currentValue =
                values[prop.name] ?? prop.defaultValue;

            switch (prop.type) {
                case 'boolean': {
                    const el = createUiCheckbox(!!currentValue);
                    el.addEventListener('inputChange', (e: any) => onValueChange(prop.name, e.detail.checked));
                    return el;
                }

                case 'number': {
                    const el = createUiInput('number', String(currentValue ?? ''));
                    el.addEventListener('inputChange', (e: any) => onValueChange(prop.name, e.detail ? Number(e.detail) : undefined));
                    return el;
                }

                case 'string': {
                    if (prop.options?.length) {
                        const el = createUiSelect(prop.options, String(currentValue ?? ''));
                        el.addEventListener('inputChange', (e: any) => onValueChange(prop.name, e.detail));
                        return el;
                    }

                    const el = createUiInput('text', String(currentValue ?? ''));
                    el.addEventListener('inputChange', (e: any) => onValueChange(prop.name, e.detail));
                    return el;
                }

                case 'array':
                case 'object': {
                    const el = createUiTextarea(currentValue ? JSON.stringify(currentValue, null, 2) : '');
                    el.addEventListener('inputChange', (e: any) => {
                        try {
                            const parsed = JSON.parse(e.detail.value ?? e.detail);
                            onValueChange(prop.name, parsed);
                        } catch { }
                    });
                    return el;
                }

                default:
                    return createSpan('-');
            }
        },
        [values, onValueChange]
    );

    const controlCache = useRef(new Map<string, HTMLElement>());
    const containerCache = useRef(new Map<string, HTMLElement>());

    const propsTableData = useMemo(
        () =>
            props.map((prop) => ({
                name: prop.name,
                description: prop.description,
                control: `control-${prop.name}`,
                propData: prop
            })),
        [props]
    );

    const propsHeaders = [
        { field: 'name', text: t('props_table.headers.name'), maxWidth: '150px' },
        { field: 'description', text: t('props_table.headers.description') },
        { field: 'control', text: t('props_table.headers.control'), maxWidth: '250px' }
    ];

    const propsTemplates = useMemo(
        () => ({
            cell: {
                name: (value: string) => createMonoSpan(value),
                description: (value: string) => createSpan(t(value, value)),
                control: (_: unknown, row: TableRow) => {
                    const prop = row.propData;
                    const key = prop.name;

                    if (!controlCache.current.has(key)) {
                        controlCache.current.set(key, createControl(prop));
                    }

                    if (!containerCache.current.has(key)) {
                        const container = createDiv();
                        container.appendChild(controlCache.current.get(key)!);
                        containerCache.current.set(key, container);
                    }

                    return containerCache.current.get(key)!;
                }
            }
        }),
        [createControl, t]
    );

    const genericTemplates = useMemo(
        () => ({
            cell: {
                name: (value: string) => createMonoSpan(value),
                description: (value: string) => createSpan(t(value, value)),
                payload: (value: string) => createMonoSpan(value, '#666'),
                example: (value: string) => createSpan(value || '-'),
                interface: (value: string) => createMonoSpan(value, '#666')
            }
        }),
        [t]
    );

    const options: SegmentOption[] = useMemo(() => {
        const items: SegmentOption[] = [];

        if (props.length) {
            items.push({
                value: 'props',
                label: t('props_table.tabs.props'),
                badge: props.length
            });
        }

        sections.forEach((section) => {
            items.push({
                value: section.id,
                label: t(section.label, section.label),
                badge: section.data.length
            });
        });

        return items;
    }, [props.length, sections, t]);

    const localizedActiveSection = useMemo(() => {
        const section = sections.find((s) => s.id === activeTab);
        if (!section) return null;

        return {
            ...section,
            columns: section.columns.map((col) => ({ ...col, text: t(col.text, col.text) }))
        };
    }, [sections, activeTab, t]);

    return (
        <>
            <SegmentControl
                selected={activeTab}
                onSelect={handleTabChange}
                options={options}
            />

            {activeTab === 'props' ? (
                <UiTable
                    style={{ overflow: 'auto', maxHeight: '400px' }}
                    headers={propsHeaders}
                    data={propsTableData}
                    templates={propsTemplates}
                />
            ) : localizedActiveSection ? (
                <UiTable
                    headers={localizedActiveSection.columns}
                    data={localizedActiveSection.data}
                    templates={genericTemplates}
                />
            ) : null}
        </>
    );
}