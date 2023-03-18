import './style.css';
import {API_URL} from '../../constants';

const ConfirmDelete = ({productId, isActive, setProductId, setIsActive, setIsLoaded}) => {

  const deleteProduct = async (event, id) => {
    event.preventDefault();

    await fetch(`${API_URL}/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    setProductId(null);
    setIsActive(false);
    setIsLoaded(false);
  }

  const cancelDeleteProduct = () => {
    setProductId(null);
    setIsActive(false);
    setIsLoaded(true);
  }

  return (
    <div className={isActive ? "containerDelete active" : "containerDelete"}>
        <div className="mainDelete">
            <p>Are you sure you want to delete this product</p>
            <button className="btn-cancel" onClick={cancelDeleteProduct}>Cancel</button>
            <button className="btn-delete" onClick={(event) => {deleteProduct(event, productId)}}>Delete</button>
        </div>
    </div>
  );
}

export default ConfirmDelete;