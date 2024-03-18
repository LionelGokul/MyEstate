import React from 'react';
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookLogo from '../../../../Images/facebookLogo.png';
import { useStateValue } from '../../../../DataLayer/Context';
import { ACTIONS } from '../../../../DataLayer/reducer';

const FacebookLogin = (props) => {
  const [{}, dispatch] = useStateValue();

  // response Handler
  const responseFacebook = (response) => {
    if ('status' in response) {
      return;
    }
    const userData = {
      name: response.name,
      email: response.email,
      imageUrl: response.picture.data.url,
      facebookId: response.userID,
      isFromFacebook: true,
    };
    props.handleClose();
  };

  return (
    <ReactFacebookLogin
      appId="1463355837195702"
      scope="public_profile,email"
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <button className="social_login_btn" onClick={renderProps.onClick}>
          <img
            className="social_login_img"
            src={FacebookLogo}
            alt="Facebook Logo"
          />
          Signin with Facebook
        </button>
      )}
    />
  );
};

export default FacebookLogin;
