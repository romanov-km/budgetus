import { useNavigate } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import Icon from '../../components/ui/Icon';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import ProfileAction from '../../components/ProfileAction/ProfileAction';
import './ProfileScreen.scss';

const ProfileScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-screen">
      <header className="profile-screen__header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <Icon name="chevron-left" />
        </button>
        <h1 className="profile-screen__title">Профиль</h1>
      </header>

      <div className="profile-screen__user">
        <Avatar src="/icons/avatar.svg" size={96} />
        <div className="profile-screen__name">Фиджи</div>
        <div className="profile-screen__email">lupapupa@gmail.com</div>
      </div>

      <div className="profile-screen__actions">
        <ProfileAction icon="user" label="Мой аккаунт" />
        <ProfileAction icon="settings" label="Настройки" />
        <ProfileAction icon="headset-help" label="Поддержка" />
        <ProfileAction icon="cloud-upload" label="Поделиться" />
        <ProfileAction icon="log-out" label="Выход" />
      </div>

      <BottomNavBar />
    </div>
  );
};

export default ProfileScreen;
