import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useFormContext, Controller } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputError from './InputError';

const CustomRadioGroup = (props) => {
  const { control, errors, watch } = useFormContext();

  const [promoting, setValue] = useState(
    props.defaultValue || watch(props.name) || '',
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <FormLabel component="legend">{props.label}</FormLabel>
      <Controller
        rules={props.rules || {}}
        control={control}
        defaultValue={promoting}
        name={props.name}
        as={
          <RadioGroup
            aria-label={props.name}
            value={promoting}
            onChange={handleChange}
          >
            {props.options.map((val) => {
              return (
                <>
                  <FormControlLabel
                    key={val.value}
                    value={val.value}
                    control={<Radio />}
                    label={val.label}
                  />
                  {errors[props.id] && <InputError error={errors[props.id]} />}
                </>
              );
            })}
          </RadioGroup>
        }
      />
    </>
  );
};

export default CustomRadioGroup;
