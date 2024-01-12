import NavigationButton from "../Home/NavigationButton";
import BackButton from "../../components/BackButton/BackButton";
import "./ConnectedProfile.scss";
import profilePict from "../../assets/Louise.png";
import arrowDark from "../../assets/arrowBackDark.svg";

function Profile() {
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
          destination="/"
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
        <BackButton
          colorArrow={arrowDark}
          backButtonStyle="backButtonProfile"
        />
      </nav>
    </main>
  );
}

export default Profile;
