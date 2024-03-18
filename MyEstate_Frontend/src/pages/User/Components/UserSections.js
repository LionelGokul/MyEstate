import React from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { MdCloudUpload } from 'react-icons/md';
import FavoriteIcon from '../../../shared/Images/favorite-white-18dp.svg';
import UserSection from './UserSection';

const sections = [
  {
    title: 'My Properties',
    icon: <BiBuildingHouse className="cmn_block_icn" />,
    link: '/my-properties',
  },
  {
    title: 'My WishList',
    icon: <img alt="heart icon" src={FavoriteIcon} className="cmn_block_icn" />,
    link: '/my-wishlists',
  },
  {
    title: 'Upload Property',
    icon: <MdCloudUpload className="cmn_block_icn" />,
    link: '/upload-property',
  },
];
const UserSections = (props) => {
  return (
    <>
      <div className="cmn_section_block_md">
        {sections.map((val) => {
          return (
            <UserSection
              title={val.title}
              icon={val.icon}
              link={val.link}
              key={val.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default React.memo(UserSections);
