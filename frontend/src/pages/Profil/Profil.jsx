import NavigationButton from "../Home/NavigationButton";
import "./Profil.scss";

function Profil() {
  return (
    <main className="fullViewport">
      <section className="profil">
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
          destination="/advice"
          text="Conseils"
          className="style-button2"
        />
        <NavigationButton
          destination="/news"
          text="Actualités"
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

export default Profil;
