import NavigationButton from "../Home/NavigationButton";
import "./ConnectedProfile.scss";
import profilePict from "../../assets/Louise.png";

function Profile() {
  return (
    <main>
      <section className="headband">
        <img className="profilePict" src={profilePict} alt="vue du profil" />
        <h2 className="titleSize">Photo du profil</h2>
      </section>
      <nav className="profile">
        <NavigationButton
          destination="/"
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
      </nav>
    </main>
  );
}

export default Profile;
