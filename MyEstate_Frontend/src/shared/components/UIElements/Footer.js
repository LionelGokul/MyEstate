import React, { useContext } from 'react';
import { useAxios } from '../../hooks/useAxios';
import AlertMesageContext from '../../DataLayer/AlertMesageContext';
import { useStateValue } from '../../DataLayer/Context';
import Grid from '@material-ui/core/Grid';
import Form from '../FormElements/Form';
import FooterElements from './FooterElements';
import FooterText from './FooterText';

const Footer = () => {
  const { sendRequest } = useAxios();
  const alertContext = useContext(AlertMesageContext);
  const [{ user }] = useStateValue();
  const onSubmit = (data) => {
    sendRequest(
      'post',
      'feedback',
      {
        feedback: data.feedback,
        userId: user.id === undefined ? null : user.id,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then(() => {
        alertContext.setOpen(true);
        alertContext.setSuccess(true);
        alertContext.setMsg('Thanks for your feedback!');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="cmn_footer"
        id="footer"
      >
        <Grid item xs={12} style={{ width: '100%' }}>
          <Form onSubmit={onSubmit}>
            <FooterElements />
          </Form>
        </Grid>
        <Grid item xs={12}>
          <FooterText />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
