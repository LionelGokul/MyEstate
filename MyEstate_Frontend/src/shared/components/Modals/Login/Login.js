import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../shared/CSS/Login.css';
import LoginForm from './Components/LoginForm';
import Grid from '@material-ui/core/Grid';
import Title from '../../../../shared/components/UIElements/Title';
import SocialLogin from './Components/SocialLogin';
import CoverImage from '../../../Images/Login_cover.jpg';

const Login = (props) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal login_modal"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="login_body modal_body">
            <Title title="Login" />
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={4}
            >
              <Grid item xs className="login_modal_img">
                <img
                  className="login_cover_img"
                  src={CoverImage}
                  alt="login_image"
                />
              </Grid>
              <Grid item xs>
                <Grid container spacing={3} direction="column">
                  <Grid item xs>
                    <LoginForm handleClose={props.handleClose} />
                    <div
                      className="signup_form margin_top"
                      onClick={props.openSignUpModal}
                    >
                      New? Create an account here
                    </div>
                  </Grid>
                  <h2 className="horizontal_text">
                    <span>OR</span>
                  </h2>
                  <Grid item xs>
                    <div className="margin_top">
                      <SocialLogin handleClose={props.handleClose} />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Login;
