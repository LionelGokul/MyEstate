import React from 'react';

const InputError = (props) => {
  return (
    <span className="cmn_inp_error">
      {props.error.type === 'required' ? 'Required' : props.error.message}
    </span>
  );
};

export default InputError;
