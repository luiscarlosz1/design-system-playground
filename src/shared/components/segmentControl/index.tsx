import { UiButton } from '@luiscarlosz1/react-library';
import './index.scss';

export interface SegmentOption<T extends string = string> {
  value: T;
  label: string;
  badge?: number | string;
}

export interface SegmentControlProps<T extends string = string> {
  options: SegmentOption<T>[];
  selected: T;
  onSelect: (value: T) => void;
}

export function SegmentControl<T extends string = string>({
  options,
  selected,
  onSelect,
}: SegmentControlProps<T>) {
  const formatLabel = (option: SegmentOption<T>): string => {
    if (option.badge !== undefined) {
      return `${option.label} (${option.badge})`;
    }
    return option.label;
  };

  return (
    <div
      className="segment-control"
      data-multiple={options.length > 1}
    >
      {options.map((option) => (
        <UiButton
          key={option.value}
          className="segment-control__button"
          label={formatLabel(option)}
          color={selected === option.value ? 'primary' : 'tertiary'}
          onButtonClick={() => onSelect(option.value)}
        />
      ))}
    </div>
  );
}
