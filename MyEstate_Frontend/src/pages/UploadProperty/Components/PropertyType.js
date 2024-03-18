import React from 'react';
import Grid from '@material-ui/core/Grid';
import Land from '../../../shared/Icons/land.svg';
import Appartment from '../../../shared/Icons/appartment.svg';
import Villa from '../../../shared/Icons/villa (1).svg';
import House from '../../../shared/Icons/house.svg';

const PropertyType = (props) => {
  const inActiveClassName = props.isEdit
    ? 'prop_type_detail cmn_none'
    : 'prop_type_detail';
  if (!props.isEdit) {
    return (
      <Grid container direction="row" spacing={2}>
        <Grid
          item
          xs={6}
          sm={3}
          className={
            props.propType === 1 ? 'prop_type_detail active' : inActiveClassName
          }
          onClick={() => {
            props.setPropertyType(1);
          }}
        >
          <img
            alt="Land"
            src={Land}
            className="prop_type_img"
            onClick={() => {
              if (props.isEdit) props.setPropertyType(1);
            }}
          />
          <span className="prop_type_name">Land</span>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          className={
            props.propType === 2 ? 'prop_type_detail active' : inActiveClassName
          }
          onClick={() => {
            props.setPropertyType(2);
          }}
        >
          <img alt="Appartment" src={Appartment} className="prop_type_img" />
          <span className="prop_type_name">Appartment</span>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          className={
            props.propType === 3 ? 'prop_type_detail active' : inActiveClassName
          }
          onClick={() => {
            props.setPropertyType(3);
          }}
        >
          <img alt="Villa" src={Villa} className="prop_type_img" />
          <span className="prop_type_name">Villa</span>
        </Grid>

        <Grid
          item
          xs={6}
          sm={3}
          className={
            props.propType === 4 ? 'prop_type_detail active' : inActiveClassName
          }
          onClick={() => {
            props.setPropertyType(4);
          }}
        >
          <img alt="House" src={House} className="prop_type_img" />
          <span className="prop_type_name">House</span>
        </Grid>
      </Grid>
    );
  }
  // For edit property
  let propTypeIcon;
  let propTypeText;

  switch (props.propType) {
    case 1:
      propTypeIcon = Land;
      propTypeText = 'Land';
    case 2:
      propTypeIcon = Appartment;
      propTypeText = 'Appartment';
    case 3:
      propTypeIcon = Villa;
      propTypeText = 'Villa';
    default:
      propTypeIcon = House;
      propTypeText = 'House';
  }

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} sm={12} className={'prop_type_detail active'}>
        <img alt="House" src={propTypeIcon} className="prop_type_img" />
        <span className="prop_type_name">{propTypeText}</span>
      </Grid>
    </Grid>
  );
};

export default PropertyType;
