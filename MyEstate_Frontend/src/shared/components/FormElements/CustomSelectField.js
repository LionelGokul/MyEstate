import React from 'react';
import Select from '@material-ui/core/Select';
import { useFormContext, Controller } from 'react-hook-form';

const CustomCheckboxField = (props) => {
  const { control, watch } = useFormContext();

  return (
    <div>
      <label htmlFor={props.id} className="cmn_form_label">
        {props.label}
      </label>
      <Controller
        id={props.id}
        name={props.name}
        defaultValue={watch(props.name) || props.defaultValue}
        render={({ onChange, onBlur, value, name }) => (
          <Select
            native
            name={name}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          >
            {props.options.map((val) => {
              return (
                <option value={val.value} key={val.value}>
                  {val.label}
                </option>
              );
            })}
          </Select>
        )}
        control={control}
        rules={props.rules}
        {...props}
      />
    </div>
  );
};

export default CustomCheckboxField;
