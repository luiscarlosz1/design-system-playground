import type { ComponentMetadata } from "../../components/documentationTable/types";

export const uiInputMetadata: ComponentMetadata = {
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'ui_input.props.label',
      defaultValue: '',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'ui_input.props.placeholder',
      defaultValue: '',
    },
    {
      name: 'type',
      type: 'string',
      description: 'ui_input.props.type',
      defaultValue: 'text',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'ui_input.props.disabled',
      defaultValue: false,
    },
    {
      name: 'readonly',
      type: 'boolean',
      description: 'ui_input.props.readonly',
      defaultValue: false,
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'ui_input.props.required',
      defaultValue: false,
    },
    {
      name: 'disableFloatingLabel',
      type: 'boolean',
      description: 'ui_input.props.disableFloatingLabel',
      defaultValue: false,
    },
    {
      name: 'autocomplete',
      type: 'string',
      description: 'ui_input.props.autocomplete',
      defaultValue: 'off',
      options: ['on', 'off'],
    },
    {
      name: 'maxLength',
      type: 'number',
      description: 'ui_input.props.maxLength',
    },
    {
      name: 'minLength',
      type: 'number',
      description: 'ui_input.props.minLength',
    },
    {
      name: 'min',
      type: 'string',
      description: 'ui_input.props.min',
    },
    {
      name: 'max',
      type: 'string',
      description: 'ui_input.props.max',
    },
    {
      name: 'step',
      type: 'number',
      description: 'ui_input.props.step',
    },
    {
      name: 'hint',
      type: 'string',
      description: 'ui_input.props.hint',
      defaultValue: '',
    },
    {
      name: 'pattern',
      type: 'string',
      description: 'ui_input.props.pattern',
      defaultValue: '',
    },
  ],
  sections: [
    {
      id: 'errors',
      label: 'ui_input.sections.errors.label',
      columns: [
        { field: 'name', text: 'Name', width: '200px' },
        { field: 'description', text: 'Description' },
        { field: 'type', text: 'Type', width: '150px' },
        { field: 'interface', text: 'Interface', width: '300px' },
        { field: 'defaultValue', text: 'Default', width: '100px' },
      ],
      data: [
        {
          name: 'validators',
          description: 'ui_input.sections.errors.props.validators',
          type: 'ValidatorFunction[]',
          interface: '(value: string | number) => { flags: ValidityStateFlags; message: string }',
        },
        {
          name: 'validationMessages',
          description: 'ui_input.sections.errors.props.validationMessages',
          type: 'ValidationMessages',
          interface: '{ valueMissing?: string; typeMismatch?: string; patternMismatch?: string; tooLong?: string; tooShort?: string; rangeUnderflow?: string; rangeOverflow?: string; stepMismatch?: string; customError?: string; }',
        },
        {
          name: 'externalError',
          type: 'string',
          description: 'ui_input.sections.errors.props.externalError',
          defaultValue: '',
        },
      ],
    },
    {
      id: 'events',
      label: 'props_table.tabs.events',
      columns: [
        { field: 'name', text: 'Name', width: '150px' },
        { field: 'description', text: 'Description' },
        { field: 'payload', text: 'Payload', width: '200px' },
      ],
      data: [
        {
          name: 'inputChange',
          description: 'ui_input.events.data.inputChange',
          payload: 'string',
        },
        {
          name: 'valueChange',
          description: 'ui_input.events.data.valueChange',
          payload: 'string',
        },
        {
          name: 'inputBlur',
          description: 'ui_input.events.data.inputBlur',
          payload: 'FocusEvent',
        },
        {
          name: 'validationChange',
          description: 'ui_input.events.data.validationChange',
          payload: '{ valid: boolean; message: string }',
        },
      ],
    },
    {
      id: 'api',
      label: 'ui_input.sections.api.label',
      columns: [
        { field: 'name', text: 'Name', width: '200px' },
        { field: 'description', text: 'Description' },
        { field: 'type', text: 'Type', width: '100px' },
        { field: 'defaultValue', text: 'Default', width: '100px' },
        { field: 'example', text: 'Example', width: '150px' },
      ],
      data: [
        // Slots
        {
          name: 'prefix',
          description: 'ui_input.sections.api.props.prefix',
          type: 'Slot',
          defaultValue: '-',
          example: '3, 4',
        },
        {
          name: 'suffix',
          description: 'ui_input.sections.api.props.suffix',
          type: 'Slot',
          defaultValue: '-',
          example: '5',
        },
        // Styles
        {
          name: 'text-align',
          description: 'ui_input.sections.api.props.text-align',
          type: 'CSS',
          defaultValue: 'left',
          example: '1, 2',
        },
        {
          name: '--ui-control-padding',
          description: 'ui_input.sections.api.props.ui-control-padding',
          type: 'CSS Var',
          defaultValue: '0 8px',
          example: '3, 4, 6',
        },
        {
          name: '--ui-control-border',
          description: 'ui_input.sections.api.props.ui-control-border',
          type: 'CSS Var',
          defaultValue: '#ccc',
          example: '6, 7',
        },
        {
          name: '--ui-control-border-focus',
          description: 'ui_input.sections.api.props.ui-control-border-focus',
          type: 'CSS Var',
          defaultValue: '#197fd1',
          example: '6, 7',
        },
        {
          name: '--ui-control-radius',
          description: 'ui_input.sections.api.props.ui-control-radius',
          type: 'CSS Var',
          defaultValue: '4px',
          example: '6, 7',
        },
        {
          name: '--ui-control-background',
          description: 'ui_input.sections.api.props.ui-control-background',
          type: 'CSS Var',
          defaultValue: '#fff',
          example: '6, 7',
        },
        {
          name: '--ui-control-bg-hover',
          description: 'ui_input.sections.api.props.ui-control-bg-hover',
          type: 'CSS Var',
          defaultValue: '#f8f9fa',
          example: '6,7',
        },
      ],
    }
  ],
};
