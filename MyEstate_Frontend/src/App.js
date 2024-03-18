import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './shared/components/UIElements/Header';
import { StateProvider } from './shared/DataLayer/Context';
import reducer from './shared/DataLayer/reducer';
import Loader from './shared/components/UIElements/Loader';
import AlertMessage from './shared/components/UIElements/AlertMessage';
import LoaderContext from './shared/DataLayer/LoaderContext';
import AlertMessageContext from './shared/DataLayer/AlertMesageContext';
import Footer from './shared/components/UIElements/Footer';
import Routing from './Routing';

function App() {
  // locader context
  const [loader, setLoader] = useState(null);

  //alert message context
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const closeAlert = () => {
    setOpen(false);
    setMsg('');
  };

  const user =
    localStorage.getItem('me_user') !== undefined &&
    localStorage.getItem('me_user') !== null
      ? JSON.parse(localStorage.getItem('me_user'))
      : {};

  const favList =
    localStorage.getItem('me_favList') !== undefined &&
    localStorage.getItem('me_favList') !== null
      ? JSON.parse(localStorage.getItem('me_favList'))
      : [];
  const init = {
    user: user,
    favList: [...favList],
    loginModalOpen: false,
    signUpModalOpen: false,
  };
  return (
    <StateProvider defaultState={init} reducer={reducer}>
      <Router>
        <AlertMessageContext.Provider
          value={{
            open,
            msg,
            success,
            setOpen,
            setMsg,
            setSuccess,
            closeAlert,
          }}
        >
          {open && <AlertMessage />}
          <LoaderContext.Provider value={{ loader, setLoader }}>
            {loader && <Loader />}
            <Header />
            <div className="cmn_workarea">
              <Routing />
            </div>
            <Footer />
          </LoaderContext.Provider>
        </AlertMessageContext.Provider>
      </Router>
    </StateProvider>
  );
}

export default App;
