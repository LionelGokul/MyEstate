import React from 'react';
import { useStateValue } from '../../../shared/DataLayer/Context';
import WishlistedPropertyCard from './WishlistedPropertyCard';
import NoItems from '../../../shared/components/UIElements/NoItems';

const WishlistedPropertyList = () => {
  const [{ favList }] = useStateValue();
  return (
    <>
      {favList !== undefined ? (
        favList.length === 0 ? (
          <NoItems text="Sorry you haven't shortlisted any properties." />
        ) : (
          favList.map((fav) => {
            return <WishlistedPropertyCard property={fav} key={fav.id} />;
          })
        )
      ) : null}
    </>
  );
};

export default WishlistedPropertyList;
