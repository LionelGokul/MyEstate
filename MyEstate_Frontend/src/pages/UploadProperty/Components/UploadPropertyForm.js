import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { useStateValue } from '../../../shared/DataLayer/Context';
import { useAxios } from '../../../shared/hooks/useAxios';
import PropertyDetails from './PropertyDetails';
import PropertyAmenities from './PropertyAmenities';
import PropertyFurnishing from './PropertyFurnishing';
import Grid from '@material-ui/core/Grid';
import Title from '../../../shared/components/UIElements/Title';
import PropertyType from './PropertyType';
import PropertyRooms from './PropertyRooms';
import PropertyRent from './PropertyRent';
import FormSubmitSection from '../../../shared/components/FormElements/FormSubmitSection';
import PropertyImages from './PropertyImages';
import Form from '../../../shared/components/FormElements/Form';
import {
  GetRequestData,
  GetInitialValues,
  GetPropertyType,
} from '../../../shared/services/PropertyServices';
import AlertMessageContext from '../../../shared/DataLayer/AlertMesageContext';

const UploadPropertyForm = ({ property }) => {
  const history = useHistory();
  const alertContext = useContext(AlertMessageContext);
  const [{ user }] = useStateValue();
  const defaultImages =
    property !== undefined
      ? property.images.map((val) => {
          let name = val.url.split('/');
          return { name: name[name.length - 1] };
        })
      : [];
  const [files, setFiles] = useState(defaultImages);
  const { sendRequest } = useAxios();
  const [sell, setSell] = useState(
    property !== undefined ? property.propertyRentPreferences === null : true,
  );
  const [propType, setPropType] = useState(
    property !== undefined ? GetPropertyType(property.propertyType) : 2,
  );

  const onSubmit = (data) => {
    if (files.length > 0) {
      const formData = GetRequestData(
        data,
        propType,
        files,
        user.id,
        sell,
        property === undefined ? [] : property.images,
      );
      const url =
        property !== undefined ? `property/${property.id}` : `properties`;
      sendRequest('post', url, formData, {
        'content-type': 'multipart/form-data',
      })
        .then((response) => {
          alertContext.setOpen(true);
          alertContext.setSuccess(true);
          alertContext.setMsg('Successfully uplaoded property');
          history.goBack();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alertContext.setOpen(true);
      alertContext.setSuccess(false);
      alertContext.setMsg('Property must have atleast one image.');
    }
  };
  const onCancel = () => {};

  const setPropertyType = (val) => {
    setPropType(val);
  };
  let init = {};

  if (property !== undefined) {
    init = GetInitialValues(property);
  }

  let propertyTypeButtonSection;
  if (property === undefined) {
    propertyTypeButtonSection = (
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs>
          <Button
            type="button"
            variant={sell ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => {
              if (property === undefined) setSell(true);
            }}
          >
            Sell
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            type="button"
            variant={sell ? 'outlined' : 'contained'}
            color="secondary"
            onClick={() => {
              if (property === undefined) setSell(false);
            }}
          >
            Rent
          </Button>
        </Grid>
      </Grid>
    );
  } else {
    propertyTypeButtonSection = sell ? (
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs>
          <Button type="button" variant="contained" color="secondary">
            Sell
          </Button>
        </Grid>
      </Grid>
    ) : (
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs>
          <Button type="button" variant="contained" color="secondary">
            Rent
          </Button>
        </Grid>
      </Grid>
    );
  }
  return (
    <Form onSubmit={onSubmit} initialValue={init}>
      <Grid
        container
        spacing={4}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs>
          {propertyTypeButtonSection}
        </Grid>

        <Grid item>
          <Title title="Type" sub={true} />
          <PropertyType
            propType={propType}
            setPropertyType={setPropertyType}
            isEdit={property && true}
          />
        </Grid>
        <Grid item xs>
          <Title title="Details" sub={true} />
          <PropertyDetails />
        </Grid>

        {/* checking if the proeprty type is not land*/}
        {propType !== 1 ? (
          <>
            <Grid item xs>
              <Title title="Amenities" sub={true} />
              <PropertyAmenities />
            </Grid>
            <Grid item xs>
              <Title title="Rooms" sub={true} />
              <PropertyRooms />
            </Grid>
            <Grid item xs>
              <Title title="Furnishing" sub={true} />
              <PropertyFurnishing />
            </Grid>
          </>
        ) : (
          <></>
        )}

        {/* checking if the type is rent and displaying rent fields */}
        {!sell && (
          <Grid item xs>
            <Title title="Rent Preferences" sub={true} />
            <PropertyRent />
          </Grid>
        )}

        <Grid item xs>
          <Title title="Images" sub={true} />
          <PropertyImages
            setFiles={setFiles}
            files={files}
            images={property?.images}
          />
        </Grid>
        <Grid item xs>
          <FormSubmitSection onCancel={onCancel} />
        </Grid>
      </Grid>
    </Form>
  );
};

export default UploadPropertyForm;
