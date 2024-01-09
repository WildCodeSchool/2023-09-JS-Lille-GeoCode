import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrowBackLight.svg";
import "./BackButton.scss";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="backButton" type="button" onClick={() => navigate(-1)}>
      <img
        src={arrow}
        alt="flèche de retour à la page précédente"
        className="backButtonImg"
      />
    </button>
  );
}
export default BackButton;
