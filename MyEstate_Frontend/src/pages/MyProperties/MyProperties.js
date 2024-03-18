import React, { Suspense, lazy } from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from '../../shared/components/UIElements/Loader';

const MyPropertiesList = lazy(() => import('./Components/MyPropertiesList'));

const MyProperties = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="prop_cards_container"
        spacing={3}
      >
        <MyPropertiesList />
      </Grid>
    </Suspense>
  );
};

export default MyProperties;
