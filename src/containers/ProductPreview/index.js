import style from "./style.module.css";

import Logo from "../../components/Logo";
import { API_URL } from "../../constants";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

function ProductPreview() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState({
    avatar: "",
    category: "",
    description: "",
    price: "",
    productName: "",
    quantity: "",
  });

  const getProduct = async () => {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const { avatar, productName, category, description, price, quantity } =
    product;

  const nav = (e) => {
    e.preventDefault();
    navigate("/preview");
  };

  return (
    <div className={style.wraper}>
      <Logo className={style.logo} />

      <div className={style.wraper_content}>
        <div className={style.wraper_forArrow}>
          <BsArrowLeft onClick={(e) => nav(e)} className={style.wraper_arrov} />
        </div>

        <div className={style.wraper_title}>{productName}</div>

        <div className={style.wraper_img}>
          <img src={avatar} alt="product_img" />
        </div>

        <div className={style.wraper_info}>
          <div className={style.product_check}>
            <BsCheckCircle className={style.check} />
            Are available
          </div>
          <div className={style.product_price}>{price}$</div>
          <div className={style.product_quantity}>Quantity: {quantity}</div>
        </div>

        <div className={style.wraper_discription_title}>Discription of</div>
        <div className={style.wraper_discription_title_name}>{productName}</div>

        <div className={style.wraper_discription}>{description}</div>
      </div>
    </div>
  );
}

export default ProductPreview;
