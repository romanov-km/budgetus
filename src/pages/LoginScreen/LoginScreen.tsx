import "./LoginScreen.scss";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginScreen = () => {
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/home');
  }
  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-logo">
          <Logo />
        </div>

        <h1 className="login-title">Войдите в аккаунт</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <Input placeholder="Имя пользователя" icon="user" />
          <Input placeholder="Пароль" icon="" toggleablePassword />

          <div className="login-checkbox">
          <Checkbox
            label="Запомнить меня"
            onChange={(val) => console.log("checked", val)}
          />
          </div>
          

          <Button variant="primary">Войти</Button>

          <div className="login-footer">
            <span>Нет аккаунта?</span>
            <a href="/register">Зарегистрироваться</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
