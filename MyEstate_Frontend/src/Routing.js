import React, { useContext, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStateValue } from './shared/DataLayer/Context';
import { ACTIONS } from './shared/DataLayer/reducer';
import AlertMessageContext from './shared/DataLayer/AlertMesageContext';
import Loader from './shared/components/UIElements/Loader';

const PropertyDetailedView = lazy(() =>
  import('./pages/PropertyDetailedView/PropertyDetailedView'),
);
const Wishlists = lazy(() => import('./pages/Wishlists/Wishlists'));
const MyProperties = lazy(() => import('./pages/MyProperties/MyProperties'));
const SearchResults = lazy(() => import('./pages/SearchResults/SearchResults'));
const Home = lazy(() => import('./pages/Home/Home'));
const User = lazy(() => import('./pages/User/User'));
const UploadProperty = lazy(() =>
  import('./pages/UploadProperty/UploadProperty'),
);
const CategoryResults = lazy(() =>
  import('./pages/CategoryResults/CategoryResults'),
);

const Routing = () => {
  const [{ user }, dispatch] = useStateValue();
  const { setOpen, setSuccess, setMsg } = useContext(AlertMessageContext);

  if (user.id === undefined)
    return (
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/property/:id" component={PropertyDetailedView} />
          <Route exact path="/search/:query" component={SearchResults} />
          <Route
            exact
            path="/properties/:propertytype"
            component={CategoryResults}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );

  // validating user session with expiry time
  setInterval(() => {
    if (user.id !== undefined) {
      let current = new Date();
      let expiry = JSON.parse(localStorage.getItem('me_exp'));
      if (current > new Date(expiry)) {
        setOpen(true);
        setSuccess(false);
        setMsg('User session timed out please Log in again.');
        dispatch({
          type: ACTIONS.SIGN_OUT,
        });
        setTimeout(() => window.location.reload(), 2000);
      }
    }
  }, 5000);
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route exact path="/property/:id" component={PropertyDetailedView} />
        <Route
          exact
          path="/property/:id/edit"
          render={(props) => <UploadProperty isEdit={true} {...props} />}
        />
        <Route exact path="/search/:query" component={SearchResults} />
        <Route path="/profile" component={User} />
        <Route path="/upload-property" component={UploadProperty} exact />
        <Route exact path="/my-wishlists" component={Wishlists} />
        <Route exact path="/my-properties" component={MyProperties} />.{' '}
        <Route
          exact
          path="/properties/:propertytype"
          component={CategoryResults}
        />
      </Switch>
    </Suspense>
  );
};

export default Routing;
