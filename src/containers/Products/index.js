import "./style.css";
import Logo from "../../components/Logo";
import Table from "../../components/Table";
import AddButton from "../../components/AddButton";
import PreviewButton from "../../components/PreviewButton";
import AddAndEditModal from "../../components/AddAndEditModal";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productId, setProductId] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isActiveAddEdit, setIsActiveAddEdit] = useState(false);
  const [oneProduct, setOneProduct] = useState({
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

  console.log(isActiveAddEdit);
  return (
    <div className="main">
      <p className="title">Products</p>
      <Logo className="logo" />
      <PreviewButton />
      <AddButton
        isActiveAddEdit={isActiveAddEdit}
        setIsActiveAddEdit={setIsActiveAddEdit}
      />
      <AddAndEditModal
        productId={productId}
        setProductId={setProductId}
        setIsActive={setIsActive}
        setIsLoaded={setIsLoaded}
        oneProduct={oneProduct}
        setOneProduct={setOneProduct}
        isActiveAddEdit={isActiveAddEdit}
        setIsActiveAddEdit={setIsActiveAddEdit}
      />
      <Table
        products={products}
        setIsLoaded={setIsLoaded}
        productId={productId}
        setProductId={setProductId}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsActiveAddEdit={setIsActiveAddEdit}
      />
    </div>
  );
};

export default Products;
