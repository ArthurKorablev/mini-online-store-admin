const Logo = ({className}) => {
  console.log(className);
  return (
    <div className={className}>
        <img src="/Pics/RozetkaCircle.svg" alt="" />
    </div>
  );
}

export default Logo;