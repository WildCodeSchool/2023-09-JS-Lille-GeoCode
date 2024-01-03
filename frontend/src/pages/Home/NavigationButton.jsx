import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavigationButton.scss";

function NavigationButton({ text, destination }) {
  return (
    <section className="style-button">
      <Link to={destination}>
        <button type="button">{text}</button>
      </Link>
    </section>
  );
}

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default NavigationButton;
