import { useState } from 'react';
import { UiButton, UiButtonIcon, UiInput } from "@luiscarlosz1/react-library";
import PropsTable from '../../components/documentationTable';
import DemoAnnotation from '../../shared/components/demoAnnotation';
import { uiInputMetadata } from './props';
import './index.scss';

export default function UiInputComponent() {
  const [activeTab, setActiveTab] = useState('props');
  const [propValues, setPropValues] = useState<Record<string, any>>({
    placeholder: 'Type here...',
    label: 'Input Label',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  const handlePropChange = (propName: string, value: any) => {
    setPropValues((prev) => ({
      ...prev,
      [propName]: value,
    }));
  };

  return (
    <>
      {(activeTab === 'props' || activeTab === 'events') && (
        <UiInput
          className='demo-section'
          {...propValues}
          onInputChange={(e: any) => console.log('Input changed:', e.detail)}
          onValueChange={(e: any) => console.log('Value changed:', e.detail)}
          onInputBlur={(e: any) => console.log('Input blurred:', e)}
          onValidationChange={(e: any) => console.log('Validation changed:', e.detail)}
        />
      )}

      {activeTab === 'api' && (
        <div className="demo-section">
          <section className="demo-section__row">
            <UiInput />
            <DemoAnnotation id="1">
              <UiInput
                disableFloatingLabel
                label="text-align: center;"
                className="demo-input demo-input--center"
              />
            </DemoAnnotation>
            <DemoAnnotation id="2">
              <UiInput
                disableFloatingLabel
                label="text-align: right;"
                className="demo-input demo-input--right"
              />
            </DemoAnnotation>
          </section>

          <section className="demo-section__row">
            <DemoAnnotation id="3">
              <UiInput className="demo-input demo-input--with-prefix">
                <span className="demo-prefix" slot="prefix">NIT</span>
              </UiInput>
            </DemoAnnotation>

            <DemoAnnotation id="4">
              <UiInput className="demo-input demo-input--with-prefix">
                <svg className="demo-icon" slot="prefix" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </UiInput>
            </DemoAnnotation>

            <DemoAnnotation id="5" position="right">
              <UiInput
                label="Password with toggle"
                hint="hint"
                type={showPassword ? 'text' : 'password'}
                onInputChange={(e: any) => setPasswordValue(e.detail)}
              >
                {passwordValue && (
                  <UiButtonIcon
                    id="toggleIcon"
                    color="tertiary"
                    size="m"
                    icon={showPassword ? 'eye' : 'eye-slash'}
                    slot="suffix"
                    className="demo-toggle"
                    onButtonIconClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </UiInput>
            </DemoAnnotation>
          </section>

          <section className="demo-section__row">
            <DemoAnnotation id="6" position="right">
              <UiInput label='Input with underline' className='demo-input demo-input--underlined' />
            </DemoAnnotation>
            <DemoAnnotation id="7" position="right">
              <UiInput disableFloatingLabel label='Input with underline and disableFloatingLabel' className='demo-input demo-input--underlined' />
            </DemoAnnotation>
          </section>
        </div>
      )}

      {activeTab === 'errors' && (
        <section className="demo-section">
          <UiInput
            disableFloatingLabel
            label="email required and with minlength of 4"
            type="email"
            minLength={4}
            required
            placeholder="Enter your email"
            validationMessages={{
              valueMissing: 'Email is required',
              typeMismatch: 'Please enter a valid email address',
              tooShort: 'Email is too short'
            }}
          />

          <UiInput
            disableFloatingLabel
            label="Custom Validator (eg. Numbers only)"
            placeholder="Enter a number"
            validators={[
              (value: any) => {
                const isNumber = /^\d+$/.test(String(value));
                return {
                  flags: { customError: !isNumber },
                  message: isNumber ? '' : 'Only numbers are allowed'
                };
              }
            ]}
          />

          <div className="demo-section__row--block">
            <UiInput
              disableFloatingLabel
              label="External Error Control"
              placeholder="Check availability"
              externalError={propValues.externalError}
              onInputChange={() => handlePropChange('externalError', '')}
            />
            <UiButton
              label={propValues.externalError ? 'Clear Error' : 'Trigger Error'}
              onButtonClick={() => handlePropChange('externalError', propValues.externalError ? '' : 'Username is already taken')}
            />
          </div>
        </section>
      )}

      <PropsTable
        activeTab={activeTab}
        onTabChange={setActiveTab}
        props={uiInputMetadata.props}
        sections={uiInputMetadata.sections}
        values={propValues}
        onValueChange={handlePropChange}
      />
    </>
  );
}
