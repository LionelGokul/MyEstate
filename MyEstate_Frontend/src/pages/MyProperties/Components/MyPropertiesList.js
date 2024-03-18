import React, { useEffect, useState, useContext } from 'react';
import { useStateValue } from '../../../shared/DataLayer/Context';
import MyPropertiesCard from './MyPropertiesCard';
import { useAxios } from '../../../shared/hooks/useAxios';
import NoItems from '../../../shared/components/UIElements/NoItems';
import AlertMessageContext from '../../../shared/DataLayer/AlertMesageContext';

const MyPropertiesList = () => {
  const { sendRequest } = useAxios();
  const alertContext = useContext(AlertMessageContext);
  const [properties, setProperties] = useState();
  const [{ user }] = useStateValue();
  useEffect(() => {
    sendRequest(
      'post',
      'my-properties',
      {
        userId: user.id,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then((response) => {
        setProperties(response);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {properties !== undefined ? (
        properties.length === 0 ? (
          <NoItems text="Sorry you haven't created any properties." />
        ) : (
          properties.map((property) => {
            return <MyPropertiesCard property={property} key={property.id} />;
          })
        )
      ) : null}
    </>
  );
};

export default MyPropertiesList;
