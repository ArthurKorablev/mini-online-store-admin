import { useEffect } from 'react';
import { API_URL } from '../../constants';
import './style.css';

const AddAndEditModal = ({productId, setProductId, setIsLoaded, oneProduct, setOneProduct, isActiveAddEdit, setIsActiveAddEdit}) => {


    const getProduct = async () => {
        const response = await fetch(`${API_URL}/products/${productId}`);
        const data = await response.json();
        setOneProduct(data);
    }

    useEffect(() => {
        if(isActiveAddEdit && productId && !oneProduct?.id) {
          getProduct();
        }

      }, [isActiveAddEdit, productId, oneProduct]);

    const submitEdit = async (e) => {
        e.preventDefault();

        await fetch(`${API_URL}/products/${productId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(oneProduct),
          });
          setProductId(null);
          setOneProduct({
            category: '',
            description: '',
            price: '',
            productName: '',
            quantity: ''
          });
          setIsLoaded(false);
          setIsActiveAddEdit(false);
    }

    const submitAdd = async (e) => {
        e.preventDefault();

        await fetch(`${API_URL}/products`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(oneProduct),
          });
          setProductId(null);
          setOneProduct({
            category: '',
            description: '',
            price: '',
            productName: '',
            quantity: ''
          });
          setIsLoaded(false);
          setIsActiveAddEdit(false);
    }

    const cancel = (e) => {
        e.preventDefault();

        setProductId(null);
        setOneProduct({
            category: '',
            description: '',
            price: '',
            productName: '',
            quantity: ''
          });
        setIsLoaded(true);
        setIsActiveAddEdit(false);
    }

  return (
      <div className={isActiveAddEdit ? "modal-container active" : "modal-container"}>
        <div className="modal-content">
            <div className="modal-title">
                <span>{productId ? 'EDIT PRODUCT' : 'ADD PRODUCT'}</span>
            </div>
            <form className='modal-form' onSubmit={productId ? submitEdit : submitAdd}>
                <div>
                    <label className='modal-lable' htmlFor="category">Category</label><br />
                    <input className='modal-input' id="category" type="text" value={oneProduct?.category} onChange= {(e)=>setOneProduct({...oneProduct, category: e.target.value})}/>
                </div>
                <div>
                    <label className='modal-lable' htmlFor="name">Name</label><br />
                    <input className='modal-input' id="name" type="text" value={oneProduct?.productName} onChange= {(e)=>setOneProduct({...oneProduct, productName: e.target.value})}/>
                </div>
                <div>
                    <label className='modal-lable' htmlFor="quantity">Quantyty</label><br />
                    <input className='modal-input' id="quantity" type="number" value={oneProduct?.quantity} onChange= {(e)=>setOneProduct({...oneProduct, quantity: e.target.value})}/>
                </div>
                <div>
                    <label className='modal-lable' htmlFor="price">Price</label><br />
                    <input className='modal-input' id="price" type="number" value={oneProduct?.price} onChange= {(e)=>setOneProduct({...oneProduct, price: e.target.value})}/>
                </div>
                <div>
                    <label className='modal-lable' htmlFor="description">Description</label><br />
                    <textarea className='modal-area' id="description" cols="30" rows="30" value={oneProduct?.description} onChange= {(e)=>setOneProduct({...oneProduct, description: e.target.value})}></textarea>
                </div>
                <div className='btn-div'>
                    <button className='modal-cancel' onClick={(e)=>{cancel(e)}}>Cancel</button>
                    <button className='modal-submit'>Submit</button>
                </div>
            </form>
        </div>
      </div>
  );
};

export default AddAndEditModal;