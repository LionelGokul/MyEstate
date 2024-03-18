import React, { useContext } from 'react';
import { useAxios } from '../../../../hooks/useAxios';
import ReactGoogleLogin from 'react-google-login';
import GoogleLogo from '../../../../../shared/Images/googleLogo.png';
import { useStateValue } from '../../../../DataLayer/Context';
import { ACTIONS } from '../../../../DataLayer/reducer';
import AlertMessageContext from '../../../../DataLayer/AlertMesageContext';

const GoogleLogin = (props) => {
  const alertContext = useContext(AlertMessageContext);
  const [{}, dispatch] = useStateValue();
  const { sendRequest } = useAxios();

  const responseGoogle = async (response) => {
    debugger;
    await sendRequest(
      'post',
      'users/login',
      {
        name: response.profileObj.name,
        email: response.profileObj.email,
        imageUrl: response.profileObj.imageUrl,
        googleId: response.profileObj.googleId,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then((user) => {
        dispatch({
          type: ACTIONS.ADD_USER,
          user: {
            name: user.name,
            id: user.id,
            imageUrl: user.profilePic,
            email: user.email,
            mobile: user.mobile,
          },
          favList: user.favList,
        });
        alertContext.setOpen(true);
        alertContext.setSuccess(true);
        alertContext.setMsg('Successfully logged in');
        props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ReactGoogleLogin
      clientId="616969578716-n1jjnecfuv98jcdec3ih7baevu44arcv.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={(renderProps) => (
        <button className="social_login_btn" onClick={renderProps.onClick}>
          <img
            src={GoogleLogo}
            className="social_login_img"
            alt="Google Logo"
          />
          Signin with Google
        </button>
      )}
    />
  );
};

export default GoogleLogin;
