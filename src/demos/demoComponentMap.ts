
import UiAutocompleteComponent from './UiAutocomplete';
import UiButtonComponent from './UiButton';
import UiCheckboxComponent from './UiCheckbox';
import UiDatepickerComponent from './UiDatepicker';
import UiInputComponent from './UiInput';
import UiRadiobuttonComponent from './UiRadiobutton';
import UiSelectComponent from './UiSelect';
import UiTextareaComponent from './UiTextarea';
import UiButtonIconComponent from './UiButtonIcon';
import UiButtonDropdownComponent from './UiButtonDropdown';
import UiIconComponent from './UiIcon';
import UiTableComponent from './UiTable';
import UiTableManagerComponent from './UiTableManager';
import UiCalendarComponent from './UiCalendar';
import UiDropdownComponent from './UiDropdown';
import UiCardComponent from './UiCard';
import UiPaginatorComponent from './UiPaginator';
import UiSearchComponent from './UiSearch';
import UiAccordionComponent from './UiAccordion';
import UiPopupComponent from './UiPopup';
import UiSidePanelComponent from './UiSidePanel';
import UiNotificationComponent from './UiNotification';
import TokensComponent from '../components/Tokens';

export const demoComponentMap: Record<string, React.FC> = {
    'Tokens': TokensComponent,
    'UI Input': UiInputComponent,
    'UI Autocomplete': UiAutocompleteComponent,
    'UI Select': UiSelectComponent,
    'UI Datepicker': UiDatepickerComponent,
    'UI Textarea': UiTextareaComponent,
    'UI Checkbox': UiCheckboxComponent,
    'UI Radiobutton': UiRadiobuttonComponent,
    'UI Button': UiButtonComponent,
    'UI Button Icon': UiButtonIconComponent,
    'UI Button Dropdown': UiButtonDropdownComponent,
    'UI Icon': UiIconComponent,
    'UI Table': UiTableComponent,
    'UI Table Manager': UiTableManagerComponent,
    'UI Calendar': UiCalendarComponent,
    'UI Dropdown': UiDropdownComponent,
    'UI Card': UiCardComponent,
    'UI Paginator': UiPaginatorComponent,
    'UI Search': UiSearchComponent,
    'UI Accordion': UiAccordionComponent,
    'UI Popup': UiPopupComponent,
    'UI Side Panel': UiSidePanelComponent,
    'UI Notification': UiNotificationComponent,
};

