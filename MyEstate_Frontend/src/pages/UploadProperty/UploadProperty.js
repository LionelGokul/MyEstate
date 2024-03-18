import React, { lazy, useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../shared/hooks/useAxios';
import Title from '../../shared/components/UIElements/Title';
import './UploadProperty.css';
import Loader from '../../shared/components/UIElements/Loader';

const UploadPropertyForm = lazy(() =>
  import('./Components/UploadPropertyForm'),
);

const UploadProperty = (props) => {
  const { sendRequest } = useAxios();
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    if (props.isEdit) {
      sendRequest('get', `property/${id}`)
        .then((res) => {
          setProperty(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="cmn_section">
      <Title title="Upload Property" />
      {props.isEdit ? (
        property.id && (
          <Suspense fallback={<Loader />}>
            <UploadPropertyForm property={property} />
          </Suspense>
        )
      ) : (
        <Suspense fallback={<Loader />}>
          <UploadPropertyForm />
        </Suspense>
      )}
    </div>
  );
};

export default UploadProperty;
