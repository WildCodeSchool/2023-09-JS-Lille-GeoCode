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
      <section className="profile">
        <NavigationButton
          destination="/"
          text="Mes informations"
          className="style-button2"
        />
        <NavigationButton
          destination="/"
          text="Véhicules"
          className="style-button2"
        />
        <NavigationButton
          destination="/"
          text="Mes réservations"
          className="style-button2"
        />
        <NavigationButton
          destination="/contact"
          text="Nous contacter"
          className="style-button2"
        />
      </section>
    </main>
  );
}

export default Profile;
