import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '../../Images/favorite_border-white-18dp.svg';
import { useStateValue } from '../../DataLayer/Context';

const HeartContainer = (props) => {
  const [{ user, favList }] = useStateValue();
  return (
    <div className="heart_container">
      {user.id === undefined ? (
        <Badge badgeContent={0} color="error">
          <img src={FavoriteIcon} className="heart_icon" alt="fav_icon" />
        </Badge>
      ) : (
        <Link to="/my-wishlists">
          <Badge badgeContent={favList.length} color="error">
            <img src={FavoriteIcon} className="heart_icon" alt="fav_icon" />
          </Badge>
        </Link>
      )}
    </div>
  );
};

export default HeartContainer;
