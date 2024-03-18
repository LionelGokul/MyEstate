import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { GrLogout } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DefaultUserIcon from '../../Images/user.svg';

const LoggedInUserSection = ({ user, dispatch, ACTIONS }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignOut = () => {
    dispatch({
      type: ACTIONS.SIGN_OUT,
    });
    window.location.reload();
  };

  return (
    <>
      <Chip
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        avatar={
          <Avatar alt={user.name} src={user.imageUrl || DefaultUserIcon} />
        }
        label={user.name}
        className="width_100"
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          style={{ paddingLeft: 10, paddingTop: 5 }}
        >
          <Link to="/profile">
            <CgProfile
              fontSize={30}
              color="black"
              style={{ marginRight: 10, marginLeft: -4 }}
            />
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={SignOut} style={{ paddingLeft: 10, paddingTop: 5 }}>
          <GrLogout fontSize={30} style={{ paddingRight: 2 }} />
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
};

export default LoggedInUserSection;
