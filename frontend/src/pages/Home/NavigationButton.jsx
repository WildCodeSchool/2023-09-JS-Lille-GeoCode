import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function NavigationButton({ text, destination, buttonStilization }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(destination);
  };
  return (
    <button
      className={` ${buttonStilization}`}
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
  buttonStilization: PropTypes.string.isRequired,
};

export default NavigationButton;
