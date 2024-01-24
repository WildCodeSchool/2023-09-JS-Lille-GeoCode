import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BackButton.scss";

function BackButton({ colorArrow, backButtonStyle }) {
  const navigate = useNavigate();

  return (
    <button
      className={backButtonStyle}
      type="button"
      onClick={() => navigate(-1)}
    >
      <img
        src={colorArrow}
        alt="flèche de retour à la page précédente"
        className="backButtonImg"
      />
    </button>
  );
}

BackButton.propTypes = {
  colorArrow: PropTypes.string.isRequired,
  backButtonStyle: PropTypes.string.isRequired,
};
export default BackButton;
