import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrowBackLight.svg";
import "./BackButton.scss";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="backButton" type="button" onClick={() => navigate(-1)}>
      <img
        src={arrow}
        alt="fleche de retour à la page précedente"
        className="backButtonImg"
      />
    </button>
  );
}
export default BackButton;
