import React from 'react';
import CustomSelectField from '../../../shared/components/FormElements/CustomSelectField';
import Grid from '@material-ui/core/Grid';

const PropertyRooms = (props) => {
  const options = [
    { value: 0, label: 0 },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
  ];
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <CustomSelectField
          options={options}
          defaultValue={1}
          name="prop_bedroom"
          id="prop_bedroom"
          label="Bedrooms"
        />
      </Grid>
      <Grid item>
        <CustomSelectField
          options={options}
          defaultValue={1}
          name="prop_washroom"
          id="prop_washroom"
          label="Washrooms"
        />
      </Grid>
      <Grid item>
        <CustomSelectField
          options={options}
          defaultValue={0}
          name="prop_balconies"
          id="prop_balconies"
          label="Balconies"
        />
      </Grid>
      <Grid item>
        <CustomSelectField
          options={options}
          defaultValue={0}
          name="prop_halls"
          id="prop_halls"
          label="Halls"
        />
      </Grid>
    </Grid>
  );
};

export default PropertyRooms;
