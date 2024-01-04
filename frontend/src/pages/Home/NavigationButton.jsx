import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./NavigationButton.scss";

function NavigationButton({ text, destination }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(destination);
  };
  return (
    <button className="style-button" type="button" onClick={handleButtonClick}>
      {text}
    </button>
  );
}

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default NavigationButton;
