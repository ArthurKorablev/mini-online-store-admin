import "./style.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const [isShown, setIsShown] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const showPass = (e) => {
    e.preventDefault();
    setIsShown((isShown) => !isShown);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
  };

  return (
    <div className="login">
      <form onSubmit={(e) => onSubmit(e)} action="">
        <div>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="userName"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="userPass"
            type={isShown ? "text" : "password"}
            placeholder="Password"
          />
        </div>
        <div>
          <button className="userSubmit" type="submit">
            Login
          </button>
        </div>
        <button onClick={showPass} className="eye">
          {isShown ? (
            <BsFillEyeFill className="eye-icon" />
          ) : (
            <BsFillEyeSlashFill className="eye-icon" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
