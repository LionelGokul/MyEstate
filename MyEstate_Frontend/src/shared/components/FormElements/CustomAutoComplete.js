import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useFormContext, Controller } from 'react-hook-form';

const CustomAutoComplete = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      id={props.id}
      defaultValue={props.defaultValue}
      control={control}
      rules={props.rules}
      render={({ onChange, ...renderParams }) => (
        <Autocomplete
          multiple={props.multiple || false}
          {...renderParams}
          options={props.options}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              variant="outlined"
              color="secondary"
            />
          )}
          onChange={(e, data) => onChange(data)}
        />
      )}
    />
  );
};

export default CustomAutoComplete;
