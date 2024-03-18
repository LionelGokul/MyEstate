import React from 'react';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import Grid from '@material-ui/core/Grid';

const SocialLogin = (props) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justify="center"
      alignItems="center"
    >
      {/* <Grid item xs>
        <FacebookLogin handleClose={props.handleClose} />
      </Grid>
      */}
      <Grid item xs>
        <GoogleLogin handleClose={props.handleClose} />
      </Grid>
    </Grid>
  );
};

export default SocialLogin;
