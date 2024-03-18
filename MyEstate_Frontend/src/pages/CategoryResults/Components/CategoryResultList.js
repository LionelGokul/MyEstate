import React from 'react';
import SearchResultsPropertyCard from '../../SearchResults/Components/SearchResultsPropertyCard';
import NoItems from '../../../shared/components/UIElements/NoItems';

const CategoryResultList = ({ propertyList }) => {
  return (
    <>
      {propertyList !== undefined ? (
        propertyList.length === 0 ? (
          <NoItems text="Sorry no properties matched. Please try again for a different property type." />
        ) : (
          propertyList.map((property) => {
            return (
              <SearchResultsPropertyCard
                property={property}
                key={property.id}
              />
            );
          })
        )
      ) : null}
    </>
  );
};

export default CategoryResultList;
