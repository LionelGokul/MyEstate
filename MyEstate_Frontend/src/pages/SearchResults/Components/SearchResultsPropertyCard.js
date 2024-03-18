import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from '../../../shared/DataLayer/Context';
import FavoriteBorderIcon from '../../../shared/Images/favorite_border-white-18dp.svg';
import FavoriteIcon from '../../../shared/Images/favorite-white-18dp.svg';
import Fab from '@material-ui/core/Fab';
import { useWishList } from '../../../shared/hooks/useWishList';

const SearchResultsPropertyCard = ({ property }) => {
  const [{ favList }] = useStateValue();
  const { addItem, removeItem } = useWishList();
  const [ifwishListed, setIfwishListed] = useState(
    favList.find((elem) => elem.id === property.id) && true,
  );
  const addToWishlist = async () => {
    addItem(property);
    setIfwishListed(true);
  };

  const removeFromWishlist = () => {
    removeItem(property);
    setIfwishListed(false);
  };

  return (
    <Grid item xs={12}>
      <Grid
        container
        className="prop_card"
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        style={{ height: '100%', padding: 5 }}
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
              <Typography gutterBottom variant="subtitle1">
                {property.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {property.propertyType}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card_prop_details"
              >
                {property.city}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {property.sqft}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {property.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            {ifwishListed ? (
              <Fab aria-label="like" color="secondary" size="medium">
                <img
                  alt="wishlist icon"
                  onClick={removeFromWishlist}
                  className="wishlist_icn"
                  src={FavoriteIcon}
                />
              </Fab>
            ) : (
              <Fab aria-label="like" color="secondary" size="medium">
                <img
                  alt="wishlist icon"
                  onClick={addToWishlist}
                  src={FavoriteBorderIcon}
                  className="wishlist_icn"
                />
              </Fab>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchResultsPropertyCard;
