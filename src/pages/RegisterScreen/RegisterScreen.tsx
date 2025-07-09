import "./RegisterScreen.scss";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../utils/auth";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [consent, setConsent] = useState(false);
  const isDisabled =
    !username.trim() || !password.trim() || !email.trim() || !consent;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await registerUser({ username, email, password });
      navigate("/login");
    } catch (err: any) {
      alert("Ошибка регистрации: " + err.message);
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
          <Input
            name="username"
            placeholder="Имя пользователя"
            icon="user"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Почта"
            icon="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            name="password"
            placeholder="Пароль"
            icon=""
            toggleablePassword
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="register-checkbox">
            <Checkbox
              label="Даю согласие на обработку данных"
              onChange={(val) => setConsent(val)}
            />
          </div>

          <Button variant="primary" disabled={isDisabled}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
