import React from 'react';
import CustomRadioGroup from '../../../shared/components/FormElements/CustomRadioGroup';
import Grid from '@material-ui/core/Grid';

const PropertyRent = (props) => {
  const tenantTypes = [
    { value: 'family', label: 'Family' },
    { value: 'bachelor', label: 'Bachelor' },
    { value: 'all', label: 'ALL' },
  ];
  const tenantWork = [
    { value: 'salaried', label: 'Salaried' },
    { value: 'student', label: 'Student' },
    { value: 'buisnessmen', label: 'Buisnessmen' },
    { value: 'all', label: 'ALL' },
  ];
  const tenantFood = [
    { value: 'veg', label: 'Veg' },
    { value: 'nonveg', label: 'Non - Veg' },
    { value: 'no', label: 'No Preference' },
  ];
  const tenantDuration = [
    { value: '1', label: 'Atleast 1 year' },
    { value: '2', label: 'Atleast 2 year' },
    { value: '3', label: 'Atleast 3 year' },
    { value: 'no', label: 'No Preference' },
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
        <CustomRadioGroup
          options={tenantTypes}
          name="prop_tenant_type"
          id="prop_bedroom"
          label="Tenant Type"
          rules={{ required: true }}
        />
      </Grid>
      <Grid item>
        <CustomRadioGroup
          options={tenantWork}
          name="prop_tenant_work"
          id="prop_bedroom"
          label="Tenant Work"
          rules={{ required: true }}
        />
      </Grid>
      <Grid item>
        <CustomRadioGroup
          options={tenantFood}
          name="prop_tenant_food"
          id="prop_bedroom"
          label="Tenant Food Type"
          rules={{ required: true }}
        />
      </Grid>
      <Grid item>
        <CustomRadioGroup
          options={tenantDuration}
          name="prop_tenant_stay"
          id="prop_bedroom"
          label="Tenant Stay"
          rules={{ required: true }}
        />
      </Grid>
    </Grid>
  );
};

export default PropertyRent;
