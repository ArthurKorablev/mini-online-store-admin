import './style.css';
import Login from '../../components/Login';
import Logo from '../../components/Logo';

const MainLogin = () => {
  return (
    <div className="main">
        <Logo className = {'conteiner'}/>
        <Login/>
    </div>
  );
}

export default MainLogin;