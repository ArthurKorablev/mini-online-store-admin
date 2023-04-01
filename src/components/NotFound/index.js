import style from "./style.module.css";
import Logo from "../Logo";

const NotFound = () => (
  <>
    <Logo className={style.logo} />
    <p className={style.num}>404</p>
    <p className={style.text}>Not Found</p>
  </>
);

export default NotFound;
