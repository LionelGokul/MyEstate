import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from 'react-hook-form';

const CustomCheckboxField = (props) => {
  const { control, watch } = useFormContext();

  const [checked, setChecked] = useState(
    props.defaultChecked || watch(props.name) || false,
  );

  return (
    <Controller
      id={props.id}
      name={props.name}
      label={props.label}
      defaultValue={props.defaultChecked || false}
      render={({ onChange, onBlur, value, name }) => (
        <Checkbox
          onBlur={onBlur}
          value={value}
          onChange={(e) => {
            onChange(e.target.checked);
            setChecked(!checked);
          }}
          checked={checked}
          name={name}
        />
      )}
      control={control}
      rules={props.rules}
      {...props}
    />
  );
};

export default CustomCheckboxField;
