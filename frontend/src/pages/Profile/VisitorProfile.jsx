import NavigationButton from "../Home/NavigationButton";
import "./VisitorProfile.scss";

function VisitorProfile() {
  return (
    <nav className="profile">
      <NavigationButton
        destination="/subscribe"
        text="S'enregistrer"
        buttonStylization="style-button2"
      />
      <NavigationButton
        destination="/connection"
        text="Se connecter"
        buttonStylization="style-button2"
      />
      <NavigationButton
        destination="/contact"
        text="Nous contacter"
        buttonStylization="style-button2"
      />
    </nav>
  );
}

export default VisitorProfile;
