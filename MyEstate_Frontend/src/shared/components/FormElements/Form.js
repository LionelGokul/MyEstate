import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const Form = ({ initialValue, children, onSubmit, ...props }) => {
  const methods = useForm({ defaultValues: initialValue, mode: 'onBlur' });
  return (
    <FormProvider {...methods} noValidate>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
export default Form;
