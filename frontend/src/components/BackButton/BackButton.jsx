import { useNavigate, Link } from "react-router-dom";
import arrow from "../../assets/arrowBackLight.svg";
import "./BackButton.scss";

function Redirection() {
  const navigate = useNavigate();

  return (
    <Link to={navigate(-1)}>
      <img
        src={arrow}
        alt="fleche de retour à la page précedente"
        className="backButton"
      />
    </Link>
  );
}
export default Redirection;
