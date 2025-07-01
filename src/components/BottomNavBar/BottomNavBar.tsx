import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavBar.scss';
import Icon from '../ui/Icon';

const navItems = [
  { to: '/uikit', icon: 'home-alt', label: 'Главная' },
  { to: '/grid', icon: 'view-grid', label: 'Операции' },
  { to: '/stats', icon: 'reports', label: 'Статистика' },
  { to: '/profile', icon: 'user', label: 'Профиль' },
];

const BottomNavBar: React.FC = () => {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `nav-button ${isActive ? 'active' : ''}`
          }
        >
          <div className="icon-wrapper">
            <Icon name={item.icon} size={24} />
          </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavBar;
