import "./style.css";
import Login from "../../components/Login";
import Logo from "../../components/Logo";

const MainLogin = () => {
  return (
    <div className="main">
      <Logo className="main-logo" />
      <Login />
    </div>
  );
};

export default MainLogin;
