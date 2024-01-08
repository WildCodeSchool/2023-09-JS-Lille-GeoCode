import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function NavigationButton({ text, destination, className }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(destination);
  };
  return (
    <button
      className={`style-button, style-button2, style-button3 ${className}`}
      type="button"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default NavigationButton;
