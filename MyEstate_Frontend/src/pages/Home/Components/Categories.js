import React from 'react';
import { Link } from 'react-router-dom';
import ApartmentImage from '../../../shared/Images/Apartments.jpg';
import VillaImage from '../../../shared/Images/Villa.jpg';
import House from '../../../shared/Images/w575.jpg';
import Land from '../../../shared/Images/Land.jpg';

let CategoriesImages = [
  {
    id: 1,
    image: ApartmentImage,
    name: 'Appartment',
  },
  {
    id: 2,
    image: VillaImage,
    name: 'Villa',
  },
  {
    id: 3,
    image: Land,
    name: 'Land',
  },
  {
    id: 4,
    image: House,
    name: 'House',
  },
];
const Categories = ({}) => {
  return (
    <section className="categories">
      <div className="categories__type">
        <div className="categories_types_center">
          {CategoriesImages.map((categories, id) => {
            return (
              <div className="category" key={id}>
                <div className="img_container">
                  <img src={categories.image} alt={categories.name} />
                  <Link
                    to={`/properties/${categories.name}`}
                    className="categories_button"
                    key={id}
                  >
                    View all
                  </Link>
                </div>
                <p className="categories_info">{categories.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
