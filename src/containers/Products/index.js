import './style.css';
import Logo from '../../components/Logo';
import Table from '../../components/Table';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () =>{
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        setProducts(data);
    }

  return (
    <div className="main">
        <p className='title'>Products</p>
        <Logo className='logo'/>
        <Table products = {products}/>
    </div>
  );
}

export default Products;