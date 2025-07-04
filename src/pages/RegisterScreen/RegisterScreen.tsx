import "./RegisterScreen.scss";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const success = register({ username, email, password });
    if (success) {
      navigate("/home");
    } else {
      alert("Пользователь с таким именем или почтой уже существует");
    }
  };

  return (
    <div className="register-screen">
      <div className="register-card">
        <div className="register-logo">
          <Logo />
        </div>

        <h1 className="register-title">Регистрация</h1>

        <form className="register-form" onSubmit={handleRegister}>
          <Input placeholder="Имя пользователя" icon="user" onChange={(e) => setUsername(e.target.value)}/>
          <Input type="email" placeholder="Почта" icon="email" onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Пароль" icon="" toggleablePassword onChange={(e) => setPassword(e.target.value)}/>

          <div className="register-checkbox">
            <Checkbox
              label="Даю согласие на обработку данных"
              onChange={(val) => console.log("checked", val)}
            />
          </div>

          <Button variant="primary">Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
