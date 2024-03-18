import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { RiFeedbackLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { BsHeart } from 'react-icons/bs';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-text',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Services',
    path: '#',
    icon: <HiUserGroup />,
    cName: 'nav-text',
    onClick: () => {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
  {
    title: 'Feedback',
    path: '#',
    icon: <RiFeedbackLine />,
    cName: 'nav-text',
    onClick: () => {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
];

export const loggedInSideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    title: 'Services',
    path: '#',
    icon: <HiUserGroup />,
    cName: 'nav-text',
    onClick: () => {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
  {
    title: 'Feedback',
    path: '#',
    icon: <RiFeedbackLine />,
    cName: 'nav-text',
    onClick: () => {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgProfile />,
    cName: 'nav-text',
  },
  {
    title: 'My Wishlists',
    path: '/my-wishlists',
    icon: <BsHeart fill="#fff" />,
    cName: 'nav-text',
  },
];
