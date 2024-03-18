import { createContext } from 'react';

const AlertMessageContext = createContext({
  open: false,
  msg: '',
  success: false,
  setOpen: () => {},
  setMsg: () => {},
  setSuccess: () => {},
  closeAlert: () => {},
});

export default AlertMessageContext;
