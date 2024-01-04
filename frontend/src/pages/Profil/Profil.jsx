import NavigationButton from "../Home/NavigationButton";
import "./Profil.scss";

function Profil() {
  return (
    <section>
      <NavigationButton destination="/subscribe" text="S'enregistrer" />
      <NavigationButton destination="/connection" text="Se connecter" />
      <NavigationButton destination="/advice" text="Conseils" />
      <NavigationButton destination="/news" text="Actualités" />
      <NavigationButton destination="/contact" text="Nous contacter" />
    </section>
  );
}

export default Profil;
