import './style.css';
import Logo from "../../components/Logo";
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";

function MainPreview() {

  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productId, setProductId] = useState(null);
  const [oneProduct, setOneProduct] = useState({
    avatar: null,
    category: "",
    description: "",
    price: "",
    productName: "",
    quantity: "",
    id: null,
  });

  useEffect(() => {
    if (!isLoaded) {
      getProducts();
    }
  }, [isLoaded]);

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    setProducts(data);
    setIsLoaded(true);
  };

  return (
    <div className="main">
        <Logo className="logo"/>
        {products.map((product, index) => (<ProductCard key ={index} product={product}/>))}
    </div>
  );
}

export default MainPreview;