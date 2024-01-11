import "./Home.scss";
import GeoCode from "../../assets/logoGC.png";
import NavigationButton from "./NavigationButton";

function Home() {
  return (
    <section className="buttons-home">
      <img className="logo" src={GeoCode} alt="logo de l'application" />
      <NavigationButton
        destination="/subscribe"
        text="S'enregistrer"
        buttonStylization="style-button"
      />
      <NavigationButton
        destination="/connection"
        text="Se connecter"
        buttonStylization="style-button"
      />
      <NavigationButton
        destination="/map"
        text="Consulter sans inscription"
        buttonStylization="style-button"
      />
    </section>
  );
}

export default Home;
