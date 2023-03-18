import './style.css';
import Product from '../Product';
import ConfirmDelete from '../ConfirmDelete';
import { useState } from 'react';
import AddAndEditModal from '../AddAndEditModal';

const Table = ({products, setIsLoaded, productId, isActive, setProductId, oneProduct, setIsActive, setOneProduct, isActiveAddEdit, setIsActiveAddEdit}) => {    
console.log(isActiveAddEdit);
  return (
    <div>
        <table className='table'>
            <thead>
                <tr className='thead'>
                    <th className='frameHead arrow'>ID</th>
                    <th className='frameHead arrow'>Category</th>
                    <th className='frameHead arrow'>Name</th>
                    <th className='frameHead arrow'>Quantity</th>
                    <th className='frameHead arrow'>Price</th>
                    <th className='frameHead'></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <Product key={index} product= {product} index={index} setProductId= {setProductId} setIsActive={setIsActive} setIsActiveAddEdit={setIsActiveAddEdit}/>
                ))}
            </tbody>
        </table>
        <ConfirmDelete productId={productId} isActive={isActive} setProductId={setProductId} setIsActive= {setIsActive} setIsLoaded= {setIsLoaded}/>
        <AddAndEditModal productId={productId} setProductId={setProductId} setIsActive= {setIsActive} setIsLoaded= {setIsLoaded} oneProduct={oneProduct} setOneProduct={setOneProduct} isActiveAddEdit={isActiveAddEdit} setIsActiveAddEdit= {setIsActiveAddEdit}/>
    </div>
  );
}

export default Table;