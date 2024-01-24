import PropTypes from "prop-types";
import type2 from "../../assets/plug-type/ev-plug-type2.svg";
import electricalPower from "../../assets/electric-power.png";
import button from "../../assets/button.svg";

function CarShow({ user, counterCar, setcounterCar }) {
  return user.car ? (
    <section className="carMainContent">
      {user.car[counterCar - 1] && (
        <button
          className="nextCar"
          type="button"
          onClick={() => setcounterCar(counterCar - 1)}
        >
          <img className="nextCarButton nextCarMirror" src={button} alt="" />
          <p className="nextCarText">Voiture</p>
          <p className="nextCarText">précédente</p>
        </button>
      )}
      <figure className="carCardPlug">
        <img className="carPlugType" src={type2} alt="" />
        <figcaption className="carCardText">Type 2</figcaption>
      </figure>
      <figure className="carCardPlug">
        <img className="carElectricalPower" src={electricalPower} alt="" />
        <figcaption className="carCardText">Puissance</figcaption>
        <figcaption className="carCardText2">22 kW</figcaption>
      </figure>
      {user.car[counterCar + 1] && (
        <button
          className="nextCar"
          type="button"
          onClick={() => setcounterCar(counterCar + 1)}
        >
          <img className="nextCarButton" src={button} alt="" />
          <p className="nextCarText">Voiture</p>
          <p className="nextCarText">suivante</p>
        </button>
      )}
    </section>
  ) : (
    <p className="textInformationCar">Pas de voiture enregistré</p>
  );
}
CarShow.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    car: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  counterCar: PropTypes.number.isRequired,
  setcounterCar: PropTypes.func.isRequired,
};

export default CarShow;
