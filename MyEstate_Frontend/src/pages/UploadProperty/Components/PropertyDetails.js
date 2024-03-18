import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../shared/components/FormElements/CustomTextField';
import PropertyDetailsCity from './PropertyDetailsCity';
import CustomTextAreaField from '../../../shared/components/FormElements/CustomTextAreaField';
import CustomSelectField from '../../../shared/components/FormElements/CustomSelectField';

const bhk_options = [
  { value: '1BHK', label: '1BHK' },
  { value: '2BHK', label: '2BHK' },
  { value: '3BHK', label: '3BHK' },
];
const PropertyDetails = () => {
  return (
    <Grid container direction="column" spacing={3}>
      {/* column*/}
      <Grid item xs={12}>
        {/*row */}
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6}>
            <PropertyDetailsCity />
          </Grid>
          <Grid item xs={6} sm={3}>
            <CustomTextField
              id="prop_latitute"
              name="prop_latitute"
              label="Latitude"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^\d/i,
                  message: 'please check',
                },
              }}
            />
          </Grid>

          <Grid item xs={6} sm={3}>
            <CustomTextField
              id="prop_longitude"
              name="prop_longitude"
              label="Longitude"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^\d/i,
                  message: 'please check',
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* column*/}
      <Grid item xs={12} sm={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} sm={9}>
            <CustomTextField
              id="prop_name"
              name="prop_name"
              label="Name"
              defaultValue=""
              rules={{ required: true }}
            />
          </Grid>

          <Grid item xs={6} sm={3}>
            <CustomSelectField
              options={bhk_options}
              defaultValue={'1BHK'}
              name="prop_bhk"
              id="prop_bhk"
              label=""
            />
          </Grid>
        </Grid>
      </Grid>
      {/* column*/}
      <Grid item xs={12}>
        {/*row */}
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              id="prop_locality"
              name="prop_locality"
              label="Locality"
              defaultValue=""
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              id="prop_street"
              name="prop_street"
              label="Street Name"
              defaultValue=""
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              id="prop_pincode"
              name="prop_pincode"
              label="Pincode"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^\d/i,
                  message: 'please check',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              id="prop_area"
              name="prop_area"
              label="Property Area (sq.ft)"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^\d/i,
                  message: 'please check',
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={8}>
            <CustomTextAreaField
              name="prop_desc"
              id="prop_desc"
              placeholder="something about property (atleast 100 words)......."
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomTextField
              name="prop_price"
              id="prop_price"
              label="Price($)"
              placeholder="Price"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^\d/i,
                  message: 'please check',
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PropertyDetails;
