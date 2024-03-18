import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const CustomSlider = (props) => {
  return (
    <>
      {props.label && (
        <Typography id="non-linear-slider" gutterBottom>
          {props.label}
        </Typography>
      )}
      {props.formatLabel !== undefined ? (
        <Slider
          value={props.value}
          valueLabelFormat={props.formatLabel}
          onChange={(e, newValue) => {
            props.setValue(newValue);
          }}
          min={props.minValue}
          max={props.maxValue}
          color="secondary"
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          {...props}
        />
      ) : (
        <Slider
          value={props.value}
          onChange={(e, newValue) => {
            props.setValue(newValue);
          }}
          min={props.minValue}
          max={props.maxValue}
          color="secondary"
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          {...props}
        />
      )}
    </>
  );
};

export default CustomSlider;
