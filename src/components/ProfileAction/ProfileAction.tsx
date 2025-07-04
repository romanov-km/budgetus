import React from 'react';
import './ProfileAction.scss';
import Icon from '../ui/Icon';

interface ProfileActionProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const ProfileAction: React.FC<ProfileActionProps> = ({ icon, label, onClick }) => {
  return (
    <button className="profile-action" onClick={onClick}>
      <div className="profile-action__icon">
        <Icon name={icon} size={30} />
      </div>
      <span className="profile-action__label">{label}</span>
      <Icon name="chevron-right" size={20} className="profile-action-right" />
    </button>
  );
};

export default ProfileAction;
