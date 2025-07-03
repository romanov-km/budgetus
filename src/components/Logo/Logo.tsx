import React from 'react';
import './Logo.scss';

import LogoImage from '/icons/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Бюджетус логотип" />
    </div>
  );
};

export default Logo;