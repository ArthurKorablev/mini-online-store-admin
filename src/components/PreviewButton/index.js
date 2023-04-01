import "./style.css";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const PreviewButton = () => {
  return (
    <button className="previewButton-main">
      <BsPerson className="previewButton-icon" />
      <Link className="link" to="/preview">
        Preview
      </Link>
    </button>
  );
};

export default PreviewButton;
