import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../../components/FormElements/CustomTextField';
import { useAxios } from '../../../../hooks/useAxios';
import Form from '../../../../components/FormElements/Form';
import { useStateValue } from '../../../../DataLayer/Context';
import { ACTIONS } from '../../../../DataLayer/reducer';
import FormSubmitSection from '../../../FormElements/FormSubmitSection';
import AlertMessageContext from '../../../../DataLayer/AlertMesageContext';

const LoginForm = (props) => {
  const alertContext = useContext(AlertMessageContext);
  const [{}, dispatch] = useStateValue();
  const { sendRequest } = useAxios();

  const onSubmit = async (data) => {
    sendRequest(
      'post',
      'users/login',
      {
        email: data.email,
        password: data.password,
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
    <Form onSubmit={onSubmit}>
      <Grid container spacing={3} direction="column">
        <Grid item xs>
          <CustomTextField
            id="email"
            name="email"
            label="Email"
            defaultValue=""
            rules={{
              required: true,
              pattern: { value: /^\S+@\S+$/i, message: 'please check email' },
            }}
          />
        </Grid>
        <Grid item xs>
          <CustomTextField
            id="password"
            name="password"
            type="password"
            label="Password"
            defaultValue=""
            rules={{
              required: true,
            }}
          />
        </Grid>
        <Grid item xs>
          <FormSubmitSection
            onCancel={() => {
              props.handleClose();
            }}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default LoginForm;
