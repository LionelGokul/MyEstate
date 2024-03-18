import React from 'react';
import Title from '../../../shared/components/UIElements/Title';

const DetailPropertyOverview = ({ property }) => {
  return (
    <div className="overview">
      <div className="overview_left">
        <div className="title">
          <h1>
            <div className="name"> {property.name}</div>
            <div className="address">
              {property.street}, {property.locality}, {property.city},{' '}
              {property.state}
            </div>
          </h1>
        </div>
        <div className="about">
          <Title title="About" sub={true}></Title>
          <br></br>
          {property.description}
        </div>

        <div className="price">{property.price} $</div>
        {property.propertyAmenities !== null ? (
          <div className="type">
            {property.bhk} {property.propertyType}
          </div>
        ) : (
          <div className="type">{property.propertyType}</div>
        )}
      </div>
      <div className="overview_right">
        <img alt={property.name} src={property.images[0].url} />
      </div>
    </div>
  );
};

export default React.memo(DetailPropertyOverview);
