import React, { useContext } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import AlertMessageContext from '../../DataLayer/AlertMesageContext';

const AlertMessage = () => {
  const context = useContext(AlertMessageContext);
  return (
    <Snackbar
      open={context.open}
      TransitionComponent={Fade}
      autoHideDuration={2000}
      onClose={context.closeAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert
        elevation={12}
        variant="filled"
        onClose={context.closeAlert}
        severity={context.success ? 'success' : 'error'}
      >
        <span
          style={{
            fontWeight: 600,
          }}
        >
          {context.msg}
        </span>
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertMessage;
