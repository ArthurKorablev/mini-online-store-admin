import './style.css';
import Logo from '../../components/Logo';
import Table from '../../components/Table';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const[productId, setProductId] = useState(null);
    const[isActive, setIsActive] =useState(false);

    useEffect(() => {
      if(!isLoaded){
        getProducts();
      }    
    }, [isLoaded]);

    const getProducts = async () =>{
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        setProducts(data);
        setIsLoaded(true);
    }

  return (
    <div className="main">
        <p className='title'>Products</p>
        <Logo className='logo'/>
        <Table products = {products} setIsLoaded={setIsLoaded} productId= {productId} setProductId= {setProductId} isActive= {isActive} setIsActive={setIsActive}/>
    </div>
  );
}

export default Products;