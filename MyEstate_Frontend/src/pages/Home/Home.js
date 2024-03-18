import React, { lazy, Suspense } from 'react';
import Loader from '../../shared/components/UIElements/Loader';
import Title from '../../shared/components/UIElements/Title';

const Categories = lazy(() => import('./Components/Categories'));
const Services = lazy(() => import('./Components/Services'));
const PropertyList = lazy(() => import('./Components/PropertyList'));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Title title="Categories" />
      <Categories />
      <div className="margin_top" />
      <div className="margin_top" />
      <div className="margin_top" />
      <div className="cmn_section">
        <Suspense fallback={<Loader />}>
          <Title title="Featured Properties" />
          <PropertyList />
        </Suspense>
      </div>
      <Services />
    </Suspense>
  );
};

export default React.memo(Home);
