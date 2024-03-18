import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../DataLayer/Context';
import Login from '../../components/Modals/Login/Login';
import SignUp from '../Modals/SignUp/SignUp';
import { ACTIONS } from '../../DataLayer/reducer';
import LoggedInUserSection from './LoggedInUserSection';

const LoginSection = (props) => {
  const [{ user, loginModalOpen, signUpModalOpen }, dispatch] = useStateValue();

  const openLoginModal = () => {
    dispatch({
      type: ACTIONS.LOGIN_MODAL,
      payload: true,
    });
  };

  const closeLoginModal = () => {
    dispatch({
      type: ACTIONS.LOGIN_MODAL,
      payload: false,
    });
  };

  const openSignUpModal = () => {
    dispatch({
      type: ACTIONS.SIGNUP_MODAL,
      payload: true,
    });
  };

  const closeSignUpModal = () => {
    dispatch({
      type: ACTIONS.SIGNUP_MODAL,
      payload: false,
    });
  };

  return (
    <>
      <Login
        open={loginModalOpen}
        handleClose={closeLoginModal}
        openSignUpModal={openSignUpModal}
      />
      <SignUp
        open={signUpModalOpen}
        handleClose={closeSignUpModal}
        openSignUpModal={openSignUpModal}
      />
      {user?.name !== undefined ? (
        <LoggedInUserSection
          user={user}
          dispatch={dispatch}
          ACTIONS={ACTIONS}
        />
      ) : (
        <Link
          to="#"
          className="menu-bars no_decor_links"
          onClick={openLoginModal}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default LoginSection;
