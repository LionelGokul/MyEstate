import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const CustomTextField = (props) => {
  const { control } = useFormContext();
  console.log(props.Name);
  return (
    <Controller
      as={TextField}
      type="number"
      id={props.id}
      name={props.name}
      label={props.label}
      control={control}
      defaultValue={props.defaultValue}
      rules={props.rules}
      style={{ width: '100%' }}
    />
  );
};

export default CustomTextField;
