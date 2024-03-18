import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignUpForm from './Components/SignUpForm';
import Grid from '@material-ui/core/Grid';
import { useAxios } from '../../../hooks/useAxios';
import Title from '../../../../shared/components/UIElements/Title';
import SocialLogin from '../Login/Components/SocialLogin';
import '../../../CSS/SignUp.css';
import Form from '../../FormElements/Form';
import { useStateValue } from '../../../DataLayer/Context';
import { ACTIONS } from '../../../DataLayer/reducer';
import AlertMessageContext from '../../../DataLayer/AlertMesageContext';

const SignUp = (props) => {
  const { sendRequest } = useAxios();
  const alertContext = useContext(AlertMessageContext);
  const [{}, dispatch] = useStateValue();

  const onSubmit = async (data) => {
    sendRequest(
      'post',
      'users',
      {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        password: data.password,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then((user) => {
        // checking if the user already exists
        if (user.userAlreadyExists === undefined) {
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
          alertContext.setMsg('Successfully signed in');
          props.handleClose();
        } else {
          alertContext.setOpen(true);
          alertContext.setSuccess(false);
          alertContext.setMsg('User already exists!');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal signup_modal"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="signup_body modal_body">
            <Title title="Sign Up" />
            <Grid container spacing={3}>
              <Grid item xs>
                <Form onSubmit={onSubmit}>
                  <SignUpForm />
                </Form>
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
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SignUp;
