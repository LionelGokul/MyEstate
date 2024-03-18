import React from 'react';
import { useFormContext } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../../components/FormElements/CustomTextField';
import { TextField } from '@material-ui/core';
import FormSubmitSection from '../../../FormElements/FormSubmitSection';

const SignUpForm = (props) => {
  const { getValues } = useFormContext();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <CustomTextField
            id="name"
            name="name"
            label="Name"
            defaultValue=""
            rules={{ required: true }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="email"
            name="email"
            label="Email"
            defaultValue=""
            rules={{
              required: true,
              pattern: { value: /^\S+@\S+$/i, message: 'please check email' },
            }}
          />
        </Grid>
        <Grid item xs={4} sm={1}>
          <TextField defaultValue="+91" disabled label="Country Code" />
        </Grid>
        <Grid item xs={8} sm={5}>
          <CustomTextField
            id="mobile"
            name="mobile"
            label="Phone Number"
            defaultValue=""
            rules={{
              required: true,
              pattern: {
                value: /^\d{10}/i,
                message: 'please check Phone Number',
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="password"
            name="password"
            label="Password"
            type="password"
            defaultValue=""
            rules={{
              required: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            id="confirm_password"
            name="confirm_password"
            label="Confirm Password"
            type="password"
            defaultValue=""
            rules={{
              required: true,
              validate: (value) => {
                if (value !== getValues('password')) {
                  return 'password mismatch';
                }
                return true;
              },
            }}
          />
        </Grid>
      </Grid>
      <div className="margin_top">
        <Grid container direction="row">
          <Grid item xs></Grid>
          <Grid item xs>
            <FormSubmitSection onCancel={() => {}} />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </>
  );
};

export default SignUpForm;
