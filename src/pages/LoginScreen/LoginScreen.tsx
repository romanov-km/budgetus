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
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !email.trim() || !password.trim();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
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
          <Input name="email" placeholder="Имя пользователя" icon="user" onChange={(e) => setEmail(e.target.value)} required/>
          <Input name="password" placeholder="Пароль" icon="" toggleablePassword onChange={(e) => setPassword(e.target.value)} required/>

          <div className="login-checkbox">
          <Checkbox
            label="Запомнить меня"
            onChange={(val) => console.log("checked", val)}
          />
          </div>

          <Button variant="primary" disabled={isDisabled} type="submit">Войти</Button>

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
