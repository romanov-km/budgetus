import "./LoginScreen.scss";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const LoginScreen = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '123' && password === '123') {
      login();               
      navigate('/home');    
    } else {
      alert('Неверный логин или пароль');
    }
  }
  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-logo">
          <Logo />
        </div>

        <h1 className="login-title">Войдите в аккаунт</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <Input placeholder="Имя пользователя" icon="user" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="Пароль" icon="" toggleablePassword onChange={(e) => setPassword(e.target.value)}/>

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
