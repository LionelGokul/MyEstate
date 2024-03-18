import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomCheckboxField from '../../../shared/components/FormElements/CustomCheckBoxField';

const PropertyAmenities = (props) => {
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          Car Prarking
          <CustomCheckboxField name="prop_car_parking" id="prop_car_parking" />
        </Grid>
        <Grid item>
          Internet / WiFi
          <CustomCheckboxField name="prop_internet" id="prop_internet" />
        </Grid>
        <Grid item>
          Maintenance
          <CustomCheckboxField name="prop_maintenance" id="prop_maintenance" />
        </Grid>
        <Grid item>
          Rain water Harvesting
          <CustomCheckboxField
            name="prop_rain_water_harvesting"
            id="prop_rain_water_harvesting"
          />
        </Grid>
        <Grid item>
          Power Backup
          <CustomCheckboxField
            name="prop_power_backup"
            id="prop_power_backup"
          />
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2}>
        <Grid item>
          24 * 7 Security
          <CustomCheckboxField name="prop_security" id="prop_security" />
        </Grid>
        <Grid item>
          Park
          <CustomCheckboxField name="prop_park" id="prop_park" />
        </Grid>
        <Grid item>
          Gym
          <CustomCheckboxField name="prop_gym" id="prop_gym" />
        </Grid>
        <Grid item>
          Garden
          <CustomCheckboxField name="prop_garden" id="prop_garden" />
        </Grid>
        <Grid item>
          Lift
          <CustomCheckboxField name="prop_lift" id="prop_lift" />
        </Grid>
        <Grid item>
          ATM
          <CustomCheckboxField name="prop_atm" id="prop_atm" />
        </Grid>
        <Grid item>
          Reservered Parking
          <CustomCheckboxField
            name="prop_resevrved_parking"
            id="prop_resevrved_parking"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyAmenities;
