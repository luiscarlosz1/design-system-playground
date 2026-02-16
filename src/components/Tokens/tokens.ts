export interface Token {
    apiKey: string;
    category: string;
    description: string;
    type?: 'color' | 'size' | 'typography' | 'spacing' | 'other';
}

export const tokens: Token[] = [
    // Typography
    { apiKey: '--ui-theme-font-family', category: 'Typography', description: 'Base font family for UI components', type: 'typography' },
    { apiKey: '--ui-theme-font-xs', category: 'Typography', description: 'Extra small font size', type: 'typography' },
    { apiKey: '--ui-theme-font-s', category: 'Typography', description: 'Small font size', type: 'typography' },
    { apiKey: '--ui-theme-font-m', category: 'Typography', description: 'Medium font size (default)', type: 'typography' },
    { apiKey: '--ui-theme-font-l', category: 'Typography', description: 'Large font size', type: 'typography' },
    { apiKey: '--ui-theme-font-xl', category: 'Typography', description: 'Extra large font size', type: 'typography' },
    { apiKey: '--ui-theme-font-xxl', category: 'Typography', description: 'Extra extra large font size', type: 'typography' },
    { apiKey: '--ui-theme-text-color', category: 'Typography', description: 'Default text color (Legacy alias)', type: 'color' },
    { apiKey: '--ui-theme-weight-regular', category: 'Typography', description: 'Regular font weight', type: 'other' },
    { apiKey: '--ui-theme-weight-medium', category: 'Typography', description: 'Medium font weight', type: 'other' },
    { apiKey: '--ui-theme-weight-bold', category: 'Typography', description: 'Bold font weight', type: 'other' },

    // Text Hierarchy
    { apiKey: '--ui-theme-text-primary', category: 'Typography', description: 'Primary text color (High contrast)', type: 'color' },
    { apiKey: '--ui-theme-text-secondary', category: 'Typography', description: 'Secondary text color (Supporting/Labels)', type: 'color' },
    { apiKey: '--ui-theme-text-tertiary', category: 'Typography', description: 'Tertiary text color (Placeholders/Metadata)', type: 'color' },

    // Controls
    { apiKey: '--ui-theme-control-bg', category: 'Controls', description: 'Default background for form controls', type: 'color' },
    { apiKey: '--ui-theme-control-border', category: 'Controls', description: 'Default border color for controls', type: 'color' },
    { apiKey: '--ui-theme-control-height', category: 'Controls', description: 'Default height for controls', type: 'size' },
    { apiKey: '--ui-theme-control-radius', category: 'Controls', description: 'Border radius for controls', type: 'size' },
    { apiKey: '--ui-theme-control-padding', category: 'Controls', description: 'Internal padding for controls', type: 'spacing' },
    { apiKey: '--ui-theme-control-line-height', category: 'Controls', description: 'Line height for control text', type: 'size' },
    { apiKey: '--ui-theme-control-margin', category: 'Controls', description: 'External margin for controls', type: 'spacing' },

    // Form Text & States
    { apiKey: '--ui-theme-text-tertiary', category: 'Form Text', description: 'Color for floating labels (idle)', type: 'color' },
    { apiKey: '--ui-theme-text-placeholder', category: 'Form Text', description: 'Placeholder text color', type: 'color' },
    { apiKey: '--ui-theme-text-secondary', category: 'Form Text', description: 'Active floating label color', type: 'color' },
    { apiKey: '--ui-theme-text-secondary', category: 'Form Text', description: 'Hint text color', type: 'color' },

    // Form Interaction
    { apiKey: '--ui-theme-control-bg-hover', category: 'Form Interaction', description: 'Background on hover', type: 'color' },
    { apiKey: '--ui-theme-control-bg-focus', category: 'Form Interaction', description: 'Background on focus', type: 'color' },
    { apiKey: '--ui-theme-control-border-focus', category: 'Form Interaction', description: 'Border color on focus', type: 'color' },
    { apiKey: '--ui-theme-control-label-focus', category: 'Form Interaction', description: 'Label color on focus', type: 'color' },

    // Layout / Surfaces
    { apiKey: '--ui-theme-bg-body', category: 'Layout', description: 'Main background color', type: 'color' },
    { apiKey: '--ui-theme-border-default', category: 'Layout', description: 'Default border color', type: 'color' },
    { apiKey: '--ui-theme-border-strong', category: 'Layout', description: 'Strong border color', type: 'color' },
    { apiKey: '--ui-theme-border-active', category: 'Layout', description: 'Interactive border color', type: 'color' },

    // Semantic Colors (API Mapped)
    { apiKey: '--ui-theme-primary', category: 'Primary', description: 'Primary surface color', type: 'color' },
    { apiKey: '--ui-theme-primary-hover', category: 'Primary', description: 'Primary surface hover', type: 'color' },
    { apiKey: '--ui-theme-text-on-primary', category: 'Primary', description: 'Text color on primary surface', type: 'color' },

    { apiKey: '--ui-theme-selected', category: 'Selected', description: 'Selected surface color', type: 'color' },
    { apiKey: '--ui-theme-selected-hover', category: 'Selected', description: 'Selected surface hover', type: 'color' },
    { apiKey: '--ui-theme-selected-active', category: 'Selected', description: 'Selected surface active', type: 'color' },
    { apiKey: '--ui-theme-text-on-selected', category: 'Selected', description: 'Text color on selected surface', type: 'color' },

    { apiKey: '--ui-theme-success', category: 'Success', description: 'Success surface color', type: 'color' },
    { apiKey: '--ui-theme-success-hover', category: 'Success', description: 'Success surface hover', type: 'color' },
    { apiKey: '--ui-theme-text-on-success', category: 'Success', description: 'Text color on success surface', type: 'color' },

    { apiKey: '--ui-theme-secondary', category: 'Secondary', description: 'Secondary surface color', type: 'color' },
    { apiKey: '--ui-theme-secondary-hover', category: 'Secondary', description: 'Secondary surface hover', type: 'color' },
    { apiKey: '--ui-theme-text-on-secondary', category: 'Secondary', description: 'Text color on secondary surface', type: 'color' },

    { apiKey: '--ui-theme-tertiary', category: 'Tertiary', description: 'Tertiary surface color', type: 'color' },
    { apiKey: '--ui-theme-tertiary-hover', category: 'Tertiary', description: 'Tertiary surface hover', type: 'color' },
    { apiKey: '--ui-theme-tertiary-active', category: 'Tertiary', description: 'Tertiary surface active', type: 'color' },
    { apiKey: '--ui-theme-text-on-tertiary', category: 'Tertiary', description: 'Text color on tertiary surface', type: 'color' },

    // Status
    { apiKey: '--ui-theme-active', category: 'Status', description: 'Active status color', type: 'color' },
    { apiKey: '--ui-theme-status-success', category: 'Status', description: 'Success status color', type: 'color' },
    { apiKey: '--ui-theme-status-warning', category: 'Status', description: 'Warning status color', type: 'color' },
    { apiKey: '--ui-theme-status-info', category: 'Status', description: 'Info status color', type: 'color' },
    { apiKey: '--ui-theme-status-danger', category: 'Status', description: 'Danger status color', type: 'color' },

    // Icons
    { apiKey: '--ui-theme-icon-color', category: 'Icons', description: 'Default icon color', type: 'color' },
    { apiKey: '--ui-theme-icon-bg', category: 'Icons', description: 'Icon background color', type: 'color' },
    { apiKey: '--ui-theme-icon-inverse', category: 'Icons', description: 'Inverse icon color', type: 'color' },
    { apiKey: '--ui-theme-icon-disabled', category: 'Icons', description: 'Disabled icon color', type: 'color' },

    // Button Sizes
    { apiKey: '--ui-theme-btn-height-xs', category: 'Button Sizes', description: 'Extra small button height', type: 'size' },
    { apiKey: '--ui-theme-btn-height-s', category: 'Button Sizes', description: 'Small button height', type: 'size' },
    { apiKey: '--ui-theme-btn-height-m', category: 'Button Sizes', description: 'Medium button height', type: 'size' },
    { apiKey: '--ui-theme-btn-height-l', category: 'Button Sizes', description: 'Large button height', type: 'size' },
    { apiKey: '--ui-theme-btn-height-xl', category: 'Button Sizes', description: 'Extra large button height', type: 'size' },
    { apiKey: '--ui-theme-btn-width-xs', category: 'Button Sizes', description: 'Extra small button width', type: 'size' },
    { apiKey: '--ui-theme-btn-width-s', category: 'Button Sizes', description: 'Small button width', type: 'size' },
    { apiKey: '--ui-theme-btn-width-m', category: 'Button Sizes', description: 'Medium button width', type: 'size' },
    { apiKey: '--ui-theme-btn-width-l', category: 'Button Sizes', description: 'Large button width', type: 'size' },
    { apiKey: '--ui-theme-btn-width-xl', category: 'Button Sizes', description: 'Extra large button width', type: 'size' },

    // Error
    { apiKey: '--ui-theme-error-bg', category: 'Form Error', description: 'Error background color', type: 'color' },
    { apiKey: '--ui-theme-error-border', category: 'Form Error', description: 'Error border color', type: 'color' },
    { apiKey: '--ui-theme-error-text', category: 'Form Error', description: 'Error text color', type: 'color' },
    { apiKey: '--ui-theme-error-bg-hover', category: 'Form Error', description: 'Error background color on hover', type: 'color' },

    // Disabled
    { apiKey: '--ui-theme-disabled-bg', category: 'Form Disabled', description: 'Disabled background color', type: 'color' },
    { apiKey: '--ui-theme-disabled-border', category: 'Form Disabled', description: 'Disabled border color', type: 'color' },
    { apiKey: '--ui-theme-disabled-text', category: 'Form Disabled', description: 'Disabled text color', type: 'color' },
    { apiKey: '--ui-theme-disabled-fg', category: 'Form Disabled', description: 'Disabled foreground color', type: 'color' },

    // Table
    { apiKey: '--ui-theme-table-header-bg', category: 'Table', description: 'Table header background color', type: 'color' },
    { apiKey: '--ui-theme-table-header-text', category: 'Table', description: 'Table header text color', type: 'color' },
    { apiKey: '--ui-theme-table-header-border', category: 'Table', description: 'Table header border color', type: 'color' },
    { apiKey: '--ui-theme-weight-medium', category: 'Table', description: 'Table header font weight', type: 'other' },
    { apiKey: '--ui-theme-table-header-hover-bg', category: 'Table', description: 'Table header background on hover', type: 'color' },
    { apiKey: '--ui-theme-table-body-bg', category: 'Table', description: 'Table body background color', type: 'color' },
    { apiKey: '--ui-theme-table-row-bg', category: 'Table', description: 'Table row background color', type: 'color' },
    { apiKey: '--ui-theme-table-row-hover-bg', category: 'Table', description: 'Table row background on hover', type: 'color' },
    { apiKey: '--ui-theme-table-row-selected-bg', category: 'Table', description: 'Table row background when selected', type: 'color' },
    { apiKey: '--ui-theme-border-default', category: 'Table', description: 'Table row border color', type: 'color' },
    { apiKey: '--ui-theme-spacing-md', category: 'Table', description: 'Table cell horizontal padding', type: 'spacing' },
    { apiKey: '--ui-theme-spacing-sm', category: 'Table', description: 'Table cell vertical padding', type: 'spacing' },
    { apiKey: '--ui-theme-text-color', category: 'Table', description: 'Table cell text color', type: 'color' },
    { apiKey: '--ui-theme-text-secondary', category: 'Table', description: 'Table empty state text color', type: 'color' },
    { apiKey: '--ui-theme-text-secondary', category: 'Table', description: 'Table loading state text color', type: 'color' },
    { apiKey: '--ui-theme-table-footer-bg', category: 'Table', description: 'Table footer background color', type: 'color' },
    { apiKey: '--ui-theme-text-color', category: 'Table', description: 'Table footer text color', type: 'color' },
    { apiKey: '--ui-theme-border-default', category: 'Table', description: 'Table footer border color', type: 'color' },
    { apiKey: '--ui-theme-weight-bold', category: 'Table', description: 'Table footer font weight', type: 'other' },
];