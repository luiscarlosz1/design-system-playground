export interface DocumentationTableProps {
    props: PropMetadata[];
    sections?: Section[];
    values: Record<string, unknown>;
    onValueChange: (propName: string, value: unknown) => void;
    activeTab?: string;
    onTabChange?: (tab: string) => void;
}

export type PropType = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'function';

export interface PropMetadata {
    name: string;
    type: PropType;
    description: string;
    defaultValue?: unknown;
    options?: unknown[];
}

export interface TableColumn {
    field: string;
    text: string;
    width?: string;
    maxWidth?: string;
}

export interface Section {
    id: string;
    label: string;
    data: unknown[];
    columns: TableColumn[];
    description?: string;
}

export interface ComponentMetadata {
    props: PropMetadata[];
    sections?: Section[];
    events?: EventMetadata[];
}

export interface TableRow {
    name: string;
    description: string;
    control: string;
    propData: PropMetadata;
}

export interface EventMetadata {
    name: string;
    description: string;
    payload: string;
}
