import React from 'react';

const Title = ({ title, sub }) => {
  return (
    <div className={sub ? 'section-sub-title' : 'section-title'}>
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default Title;
