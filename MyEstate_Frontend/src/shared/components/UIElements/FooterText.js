import React from 'react';
import Grid from '@material-ui/core/Grid';
const FooterText = () => {
  return (
    <Grid container className="cmn_footer_text_section">
      <Grid item xs={12}>
        Contact us : myestate.app@gmail.com
      </Grid>
      <Grid item xs={12}>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Grid>
    </Grid>
  );
};

export default FooterText;
