import './style.css';

function Login() {
  return (
    <div className="login">
        <form action="">
            <div><input className='userName' type="text" placeholder='User Name'/></div>
            <div><input className='userPass' type="password" placeholder='Password'/></div>
            <div><button className='userSubmit' type='submit'>Login</button></div>  
        </form>
    </div>
  );
}

export default Login;