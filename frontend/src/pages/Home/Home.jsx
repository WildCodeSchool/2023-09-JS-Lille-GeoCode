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
        buttonStilization="style-button"
      />
      <NavigationButton
        destination="/connection"
        text="Se connecter"
        buttonStilization="style-button"
      />
      <NavigationButton
        destination="/map"
        text="Consulter sans inscription"
        buttonStilization="style-button"
      />
    </section>
  );
}

export default Home;
