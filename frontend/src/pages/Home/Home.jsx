import "./Home.scss";
import GeoCode from "../../assets/logoGC.png";
import NavigationButton from "./NavigationButton";

function Home() {
  return (
    <>
      <img className="logo" src={GeoCode} alt="logo de l'application" />
      <section className="buttons-home">
        <NavigationButton
          destination="/subscribe"
          text="S'enregistrer"
          className="style-button"
        />
        <NavigationButton
          destination="/connection"
          text="Se connecter"
          className="style-button"
        />
        <NavigationButton
          destination="/map"
          text="Consulter sans inscription"
          className="style-button"
        />
      </section>
    </>
  );
}

export default Home;
