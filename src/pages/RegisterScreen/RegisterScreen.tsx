import "./RegisterScreen.scss";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";

const RegisterScreen = () => {
  return (
    <div className="register-screen">
      <div className="register-card">
        <div className="register-logo">
          <Logo />
        </div>

        <h1 className="register-title">Регистрация</h1>

        <form className="register-form">
          <Input placeholder="Имя пользователя" icon="user" />
          <Input type="email" placeholder="Почта" icon="email" />
          <Input placeholder="Пароль" icon="" toggleablePassword />

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
