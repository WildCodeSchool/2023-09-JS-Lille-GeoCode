import "./Home.scss";
import GeoCode from "../../assets/logoGC.png";
import NavigationButton from "./NavigationButton";
import "./NavigationButton.scss";

function Home() {
  return (
    <>
      <img className="logo" src={GeoCode} alt="logo de l'application" />
      <section className="buttons-home">
        <NavigationButton destination="/subscribe" text="S'enregistrer" />
        <NavigationButton destination="/connection" text="Se connecter" />
        <NavigationButton
          destination="/map"
          text="Consulter sans inscription"
        />
      </section>
    </>
  );
}

export default Home;
