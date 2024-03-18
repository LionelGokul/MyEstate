import React from 'react';
import Navbar from './Navbar';

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div>
        <img
          className="header_img"
          alt="my_estate header img"
          src="https://i.ytimg.com/vi/e-Lp7kQWaNg/maxresdefault.jpg"
        />
      </div>
    </div>
  );
};
