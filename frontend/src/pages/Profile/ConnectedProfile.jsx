import { useNavigate } from "react-router-dom";
import NavigationButton from "../Home/NavigationButton";
import BackButton from "../../components/BackButton/BackButton";
import "./ConnectedProfile.scss";
import profilePict from "../../assets/Louise.png";
import arrowDark from "../../assets/arrowBackDark.svg";
import { logout } from "../../services/auth";
import useStore from "../../store/AuthProvider";

function Profile() {
  const navigate = useNavigate();
  const { setAuth } = useStore();
  return (
    <main>
      <section className="headband">
        <img className="profilePict" src={profilePict} alt="vue du profil" />
        <h2 className="titleSize">Photo du profil</h2>
      </section>
      <nav className="profile">
        <NavigationButton
          destination="/userinformations"
          text="Mes informations"
          buttonStylization="style-button2"
        />
        <NavigationButton
          destination="/car"
          text="Véhicules"
          buttonStylization="style-button2"
        />
        <NavigationButton
          destination="/"
          text="Mes réservations"
          buttonStylization="style-button2"
        />
        <NavigationButton
          destination="/contact"
          text="Nous contacter"
          buttonStylization="style-button2"
        />
        <button
          type="button"
          className="style-button2"
          onClick={() => {
            logout();
            navigate("/map");
            setAuth({
              user: { status: "visitor" },
            });
          }}
        >
          Se déconnecter
        </button>
        <BackButton
          colorArrow={arrowDark}
          backButtonStyle="backButtonProfile"
        />
      </nav>
    </main>
  );
}

export default Profile;
