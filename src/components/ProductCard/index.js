import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function ProductCard({ product }) {

  const { avatar, productName, price, quantity, id } = product;
  const navigate = useNavigate();

  const nav = (e) =>{
    e.preventDefault();
    navigate(`/product/${id}`);
  }

  return (
    <div onClick={(e) => nav(e)} className="card">
      <div className="card-img">
        <img src={avatar} alt="Product Img" />
      </div>

      <div className="card-title">{productName}</div>

      <div className="card-price">{price}$</div>

      <div className="card-quantity">Quantity: {quantity}</div>

      <div className="btn-keeper">
        <Link className="card-btn" to={`/product/${id}`}>
          Ready to get sent
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
