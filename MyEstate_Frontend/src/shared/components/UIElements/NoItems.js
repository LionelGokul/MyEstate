import React from 'react';
import Grid from '@material-ui/core/Grid';
import undraw_No_data_re_kwbl from '../../Icons/undraw_No_data_re_kwbl.svg';

const NoItems = (props) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <img
        alt="no result icon"
        src={undraw_No_data_re_kwbl}
        style={{ height: 200, margin: 0, width: '100%' }}
      />
      <Grid items xs></Grid>
      <Grid items xs>
        <span className="noitem_msg">{props.text}</span>
      </Grid>
    </Grid>
  );
};

export default NoItems;
