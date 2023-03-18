import { BsArchiveFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

const Product = ({product, index, setProductId, setIsActive}) => {
    const {productName, category, price, quantity, description, id} = product;

    const setIdAndModalActiv = (event) => {
        event.preventDefault();
        setProductId(id);
        setIsActive(true);
    }

  return (
      <tr className={index % 2 == 0 || index == 0 ? 'product-tr product-tr-odd' : 'product-tr product-tr-even'}>
                        <td className='product-td'>{id}</td>
                        <td className='product-td'>{category}</td>
                        <td className='product-td'>{productName}</td>
                        <td className='product-td'>{quantity}</td>
                        <td className='product-td'>{price}$</td>
                        <td className='product-td'>
                            <BsFillPencilFill className='icon-td' />
                            <BsArchiveFill className='icon-td' onClick={setIdAndModalActiv}/>
                        </td>
                    </tr>
  );
};

export default Product;
