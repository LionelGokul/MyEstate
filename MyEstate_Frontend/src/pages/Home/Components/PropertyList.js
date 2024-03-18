import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import Slider from '../../../shared/components/UIElements/Slider';
import { useAxios } from '../../../shared/hooks/useAxios';

const PropertyList = () => {
  const { sendRequest } = useAxios();
  const [featured, setFeatured] = useState();

  useEffect(() => {
    sendRequest(
      'get',
      'featured',
      {},
      {
        Accept: 'application/json',
      },
    )
      .then((resp) => {
        const content = resp.map((item) => {
          return (
            <div className="item" key={item.id}>
              <PropertyCard propertyDetails={item} key={item.id} />
            </div>
          );
        });
        setFeatured(content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>{featured && <Slider Content={featured} className="featured_prop" />}</>
  );
};
export default PropertyList;
