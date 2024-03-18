import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useFormContext, Controller } from 'react-hook-form';

const CustomTextField = (props) => {
  const { control, errors } = useFormContext();
  return (
    <Controller
      as={
        props.type !== undefined ? (
          <TextField
            type="password"
            autoComplete="current-password"
            error={errors[props.name] && true}
            helperText={errors[props.name]?.message}
            style={{ width: '100%' }}
          />
        ) : (
          <TextField
            error={errors[props.name] && true}
            helperText={errors[props.name]?.message}
            style={{ width: '100%' }}
          />
        )
      }
      id={props.id}
      name={props.name}
      label={props.label}
      control={control}
      defaultValue={props.defaultValue}
      rules={props.rules}
      {...props}
    />
  );
};

export default CustomTextField;
