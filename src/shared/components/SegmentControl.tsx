import { UiButton } from '@luiscarlosz1/react-library';

export interface SegmentOption<T extends string = string> {
    value: T;
    label: string;
    badge?: number | string;
}

export interface SegmentControlProps<T extends string = string> {
    options: SegmentOption<T>[];
    selected: T;
    onSelect: (value: T) => void;
    style?: React.CSSProperties;
}


export default function SegmentControl<T extends string = string>({
    options,
    selected,
    onSelect,
    style,
}: SegmentControlProps<T>) {
    const getButtonStyle = (index: number, total: number): React.CSSProperties => {
        if (total === 1) return {};
        if (index === 0) {
            return { borderTopRightRadius: 0, borderBottomRightRadius: 0 };
        }
        if (index === total - 1) {
            return { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 };
        }
        return { borderRadius: 0 };
    };

    const formatLabel = (option: SegmentOption<T>): string => {
        if (option.badge !== undefined) {
            return `${option.label} (${option.badge})`;
        }
        return option.label;
    };

    return (
        <div
            style={{
                display: 'inline-block',
                margin: '15px 0',
                borderRadius: '8px',
                border: '2px solid var(--ui-theme-primary, #1f8fe6)',
                ...style,
            }}
        >
            {options.map((option, index) => (
                <UiButton
                    key={option.value}
                    label={formatLabel(option)}
                    color={selected === option.value ? 'primary' : 'tertiary'}
                    onButtonClick={() => onSelect(option.value)}
                    style={getButtonStyle(index, options.length)}
                />
            ))}
        </div>
    );
}
