import React from 'react';
import Slider from 'react-slick';

const DetailPropertyImage = ({ images }) => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    className: 'slider',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToScroll: 2,
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
  return (
    <div className="property_images">
      {images.length > 1 ? (
        <Slider {...settings}>
          {images.map((img) => {
            return (
              <div className="image_content">
                <img width="100%" src={img.url} alt="property_image" />
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className="image_content">
          <img width="100%" src={images[0].url} alt="property_image" />
        </div>
      )}
    </div>
  );
};
export default React.memo(DetailPropertyImage);
