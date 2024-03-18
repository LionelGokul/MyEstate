import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MdModeEdit } from 'react-icons/md';
import Fab from '@material-ui/core/Fab';

const MyPropertiesCard = ({ property }) => {
  return (
    <Grid item xs={12} className="prop_card">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs style={{ width: '40%' }}>
          <Link to={`/property/${property.id}`}>
            <img
              className="cmn_card_media"
              src={property.images[0].url}
              alt={property.name}
            />
          </Link>
        </Grid>
        <Grid item xs sm container style={{ height: 200 }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="subtitle1">{property.name}</Typography>
              <Typography variant="body2" gutterBottom>
                {property.bhk || ''}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card_prop_details"
              >
                {property.city}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {property.sqft} Sqft
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ${property.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Link to={`/property/${property.id}/edit`}>
              <Fab
                aria-label="like"
                color="secondary"
                size="medium"
                className="card_close_btn"
              >
                <MdModeEdit style={{ fontSize: 20, cursor: 'pointer' }} />
              </Fab>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(MyPropertiesCard);
