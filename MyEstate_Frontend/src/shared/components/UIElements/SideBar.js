import React, { useRef } from 'react';
import { SideBarData, loggedInSideBarData } from '../../DummyData/SideBarData';
import { NavLink, Link } from 'react-router-dom';
import { useStateValue } from '../../DataLayer/Context';
import { default as UserIcon } from '../../Images/user.svg';
import { ACTIONS } from '../../DataLayer/reducer';

const SideBar = (props) => {
  const wrapperRef = useRef(null);
  const [{ user }, dispatch] = useStateValue();

  const openLoginModal = () => {
    dispatch({
      type: ACTIONS.LOGIN_MODAL,
      payload: true,
    });
  };
  // detect outside click
  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      props.setSideBar(false);
    }
  }
  document.addEventListener('mousedown', handleClickOutside);
  return (
    <nav
      className={props.sideBar ? 'nav-menu active' : 'nav-menu'}
      ref={wrapperRef}
    >
      <ul className="nav-menu-items">
        <li className="nav-text user">
          <div className="sidebar_user">
            {user.name === undefined ? (
              <div onClick={openLoginModal}>
                <img
                  alt="default user icon"
                  className="sidebar_user_img"
                  src={UserIcon}
                />
                Hello, Login
              </div>
            ) : (
              <Link to="/profile">
                <img
                  alt="default user icon"
                  className="sidebar_user_img"
                  src={user.imageUrl || UserIcon}
                />
                Hello,{user.name}
              </Link>
            )}
          </div>
        </li>
        {user.id === undefined
          ? SideBarData.map((item, index) => {
              if (item.onClick === undefined)
                return (
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              return (
                <li key={index} className={item.cName} onClick={item.onClick}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })
          : loggedInSideBarData.map((item, index) => {
              if (item.onClick === undefined)
                return (
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              return (
                <li key={index} className={item.cName} onClick={item.onClick}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
      </ul>
    </nav>
  );
};

export default SideBar;
