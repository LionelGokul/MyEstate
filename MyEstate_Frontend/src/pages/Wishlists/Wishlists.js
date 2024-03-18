import React, { Suspense, lazy } from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from '../../shared/components/UIElements/Loader';

const WishlistedPropertyList = lazy(() =>
  import('./Components/WishlistedPropertyList'),
);

const Wishlists = () => {
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
        <WishlistedPropertyList />
      </Grid>
    </Suspense>
  );
};

export default Wishlists;
