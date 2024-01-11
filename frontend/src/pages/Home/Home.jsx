import "./Home.scss";
import GeoCode from "../../assets/logoGC.png";
import NavigationButton from "./NavigationButton";
import "./NavigationButton.scss";

function Home() {
  return (
    <section className="buttons-home">
      <img className="logo" src={GeoCode} alt="logo de l'application" />
      <NavigationButton destination="/subscribe" text="s'enregistrer" />
      <NavigationButton destination="/connection" text="Se connecter" />
      <p className="consul-s-inscription">
        <NavigationButton
          destination="/map"
          text="Consulter sans inscription"
        />
      </p>
    </section>
  );
}

export default Home;
