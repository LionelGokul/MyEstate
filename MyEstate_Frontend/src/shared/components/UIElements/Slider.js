import React from 'react';
import SlickSlider from 'react-slick';

let slides = 4;

let settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  speed: 1400,
  autoplaySpeed: 3000,
  slidesToShow: slides,
  slidesToScroll: slides,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Slider = (props) => {
  return (
    <>
      <SlickSlider className={props.className} {...settings}>
        {props.Content}
      </SlickSlider>
    </>
  );
};

export default Slider;
