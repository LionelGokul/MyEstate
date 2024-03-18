import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['San Francisco', 'San Diego', 'Long Beach', 'New York'];

const PropertyDetailsCity = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        render={(props) => (
          <Autocomplete
            {...props}
            options={options}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose a city" variant="outlined" />
            )}
            onChange={(_, data) => props.onChange(data)}
          />
        )}
        name="prop_city"
        id="prop_city"
        control={control}
        defaultValue={options[0]}
        rules={{ required: true }}
      />
    </>
  );
};

export default PropertyDetailsCity;
