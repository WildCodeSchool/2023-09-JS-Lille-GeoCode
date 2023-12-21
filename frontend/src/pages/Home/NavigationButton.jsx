import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavigationButton.scss";

function NavigationButton({ text, destination }) {
  return (
    <div className="styleButton">
      <Link to={destination}> {text} </Link>
    </div>
  );
}

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default NavigationButton;
