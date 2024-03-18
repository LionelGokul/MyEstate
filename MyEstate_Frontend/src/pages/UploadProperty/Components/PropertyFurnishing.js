import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomCheckboxField from '../../../shared/components/FormElements/CustomCheckBoxField';
import CustomSelectField from '../../../shared/components/FormElements/CustomSelectField';

const PropertyFurnishing = (props) => {
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
    <>
      <Grid container direction="row" spacing={6} justify="center">
        <Grid item>
          <CustomSelectField
            options={options}
            defaultValue={1}
            name="prop_bed"
            id="prop_bed"
            label="Bed"
          />
        </Grid>
        <Grid item>
          <CustomSelectField
            options={options}
            defaultValue={1}
            name="prop_ac"
            id="prop_ac"
            label="AC"
          />
        </Grid>
        <Grid item>
          <CustomSelectField
            options={options}
            defaultValue={1}
            name="prop_tv"
            id="prop_tv"
            label="Tv"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          Dining Table
          <CustomCheckboxField
            name="prop_dining_table"
            id="prop_dining_table"
          />
        </Grid>
        <Grid item>
          WiFi Connection
          <CustomCheckboxField
            name="prop_wifi_connection"
            id="prop_wifi_connection"
          />
        </Grid>
        <Grid item>
          Washing Machine
          <CustomCheckboxField
            name="prop_washing_machine"
            id="prop_washing_machine"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyFurnishing;
