import "./style.css";
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ setIsActiveAddEdit }) => {

    const setAddEdit = (event) => {
        event.preventDefault();
        setIsActiveAddEdit(true);
    }

  return (
    <button className="addButton-main" onClick={setAddEdit}>
      <BsPlusCircle className="addButton-icon" />
      <span>Add Product</span>
    </button>
  );
};

export default AddButton;
