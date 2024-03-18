import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputError from './InputError';

const CustomTextAreaField = (props) => {
  const { register, errors } = useFormContext();

  return (
    <div className="cmn_textarea_container">
      <span htmlFor={props.id} className="cmn_form_label">
        {props.label}
      </span>
      <textarea
        id={props.id}
        name={props.name}
        ref={register(props.validation || { required: props.required })}
        className={
          props.className !== undefined
            ? `cmn_textareafield ${props.className}`
            : 'cmn_textareafield'
        }
        placeholder={props.placeholder || ''}
      />
      {errors[props.id] && <InputError error={errors[props.id]} />}
    </div>
  );
};

export default CustomTextAreaField;
