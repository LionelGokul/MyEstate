import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const FormSubmitSection = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs>
        <Button type="submit" variant="contained" color="secondary">
          {props.submitButtonText || 'Submit'}
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            props.onCancel();
          }}
        >
          {props.cancelButtonText || 'Cancel'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormSubmitSection;
