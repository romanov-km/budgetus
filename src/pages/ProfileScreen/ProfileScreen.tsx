import { useNavigate } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import Icon from '../../components/ui/Icon';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import ProfileAction from '../../components/ProfileAction/ProfileAction';
import './ProfileScreen.scss';
import { useAuth } from '../../context/AuthContext';
import ExitModal from '../../components/ExitModal/ExitModal';
import { useState } from 'react';
import ShareModal from '../../components/ShareModal/ShareModal';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [showExitModal, setShowExitModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const handleLogout = () => {
    logout();                 // 1. сброс авторизации
    navigate('/login');      // 2. переход на страницу логина
  };


  return (
     

    <div className="profile-screen">
      <ExitModal isOpen={showExitModal} onClose={() => setShowExitModal(false)} onCancel={() => setShowExitModal(false)} onLogout={() => handleLogout()}/>
      <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} onShare={() => {
    navigator.clipboard.writeText("https://budgetus.vercel.app")
      .then(() => alert("Ссылка скопирована!"))
      .catch(() => alert("Ошибка копирования"));
  }} />
      <header className="profile-screen__header">
        <button className="back-button" onClick={() => navigate("/home")}>
          <Icon name="chevron-left" />
        </button>
        <h1 className="profile-screen__title">Профиль</h1>
      </header>

      <div className="profile-screen__user">
        <Avatar src="/icons/avatar.svg" size={96} />
        <div className="profile-screen__name">{user?.username}</div>
        <div className="profile-screen__email">{user?.email}</div>
      </div>

      <div className="profile-screen__actions">
        <ProfileAction icon="user" label="Мой аккаунт" />
        <ProfileAction icon="settings" label="Настройки" />
        <ProfileAction icon="headset-help" label="Поддержка" />
        <ProfileAction icon="cloud-upload" label="Поделиться" onClick={() => {setShowShareModal(true)}}/>
        <ProfileAction icon="log-out" label="Выход" onClick={() => {setShowExitModal(true)}}/>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default ProfileScreen;
