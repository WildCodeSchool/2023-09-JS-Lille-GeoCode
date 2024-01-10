import NavigationButton from "../Home/NavigationButton";
import "./VisitorProfile.scss";

function VisitorProfile() {
  return (
    <section className="profile">
      <NavigationButton
        destination="/subscribe"
        text="S'enregistrer"
        className="style-button2"
      />
      <NavigationButton
        destination="/connection"
        text="Se connecter"
        className="style-button2"
      />
      <NavigationButton
        destination="/contact"
        text="Nous contacter"
        className="style-button2"
      />
    </section>
  );
}

export default VisitorProfile;
