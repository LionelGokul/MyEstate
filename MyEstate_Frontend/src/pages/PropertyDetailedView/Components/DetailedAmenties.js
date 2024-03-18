import React from 'react';
import Title from '../../../shared/components/UIElements/Title';

const DetailedAmenties = ({
  amenities,
  rooms,
  furnishings,
  rentPreferences,
}) => {
  Object.keys(amenities).forEach((amenity) => {
    if (!amenities[amenity]) delete amenities[amenity];
  });
  let amenitiesName = Object.keys(amenities);
  return (
    <div className="property_details">
      <div className="amenties">
        <div className="title_amenties">
          <Title title="Amenties" sub={true}></Title>
        </div>
        <div className="amenties_content">
          <div className="amenties_list">
            {amenitiesName.map((amenity) => {
              return <span>{amenity}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="title_rooms">
          <Title title="Rooms" sub={true}></Title>
        </div>
        <div className="rooms_content">
          <div className="rooms_list">
            {Object.keys(rooms).map((roomcount, i) => {
              return (
                <span>
                  {roomcount} : <b>{rooms[roomcount]}</b>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="furnishing">
        <div className="title_furnishing">
          <Title title="Furnishing" sub={true}></Title>
        </div>
        <div className="furnishing_content">
          <div className="furnishing_list">
            {Object.keys(furnishings).map((key, i) => {
              if (typeof furnishings[key] === 'number')
                return (
                  <span>
                    {key} : <b>{furnishings[key]}</b>
                  </span>
                );
              if (furnishings[key]) return <span>{key}</span>;
            })}
          </div>
        </div>
      </div>
      {rentPreferences && (
        <div className="furnishing">
          <div className="title_furnishing">
            <Title title="Furnishing" sub={true}></Title>
          </div>
          <div className="furnishing_content">
            <div className="furnishing_list">
              {Object.keys(furnishings).map((key, i) => {
                if (typeof furnishings[key] === 'number')
                  return (
                    <span>
                      {key} : <b>{furnishings[key]}</b>
                    </span>
                  );
                if (furnishings[key]) return <span>{key}</span>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(DetailedAmenties);
