import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import SearchBar from './SearchBar';
import LoginSection from './LoginSection';
import SideBar from './SideBar';
import HeartContainer from './HeartContainer';

const Navbar = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const navbar = useRef(null);

  // setting navbar bg color
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (navbar.current !== null) {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
      ) {
        navbar.current.style.backgroundColor = '#e93558';
      } else {
        navbar.current.style.backgroundColor = 'transparent';
      }
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar" ref={navbar}>
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSideBar} />
          </Link>
          <Link to="/" className="menu-bars no_decor_links">
            My Estate
          </Link>
          <SearchBar />
          <HeartContainer />
          <LoginSection />
          <Link
            to="/#services"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
            className="menu-bars no_decor_links mobile_none"
          >
            Services
          </Link>
          <Link
            to="/#feedback"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
            className="menu-bars no_decor_links mobile_none"
          >
            Feedback
          </Link>
        </div>
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
