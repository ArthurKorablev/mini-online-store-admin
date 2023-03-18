import { useEffect } from 'react';
import { API_URL } from '../../constants';
import './style.css';
const AddAndEditModal = ({productId, setProductId, setIsLoaded, oneProduct, setOneProduct, isActiveAddEdit, setIsActiveAddEdit}) => {

    const getProduct = async () => {
        const response = await fetch(`${API_URL}/products/${productId}`);
        const data = response.json();
        console.log(data);
        setOneProduct(data);
    }

    useEffect(() => {
        if(isActiveAddEdit && productId && !oneProduct) {
          getProduct();
        }
      }, [isActiveAddEdit, productId, oneProduct]);


  return (
      <div className={isActiveAddEdit ? "modal-container active" : "modal-container"}>
        <div className="modal-content">
            <div className="modal-title">
                <span>Edit Product</span>
            </div>
            <form className='modal-form'>
                <div>
                    <label className='modal-lable' htmlFor="category">Category</label><br />
                    <input className='modal-input' id="category" type="text" />
                </div>
                <div>
                    <label className='modal-lable' htmlFor="name">Name</label><br />
                    <input className='modal-input' id="name" type="text" />
                </div>
                <div>
                    <label className='modal-lable' htmlFor="quantity">Quantyty</label><br />
                    <input className='modal-input' id="quantity" type="number" />
                </div>
                <div>
                    <label className='modal-lable' htmlFor="price">Price</label><br />
                    <input className='modal-input' id="price" type="number" />
                </div>
                <div>
                    <label className='modal-lable' htmlFor="description">Description</label><br />
                    <textarea className='modal-area' id="description" cols="30" rows="30"></textarea>
                </div>
                <div className='btn-div'>
                    <button className='modal-cancel'>Cancel</button>
                    <button className='modal-submit'>Submit</button>
                </div>
            </form>
        </div>
      </div>
  );
};

export default AddAndEditModal;