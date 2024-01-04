import "./StationCard.scss";
import ComboCCSplug from "../../assets/ComboCCSplug.svg";
import Type2plug from "../../assets/Type2plug.svg";

const station = {
  name: "Station République",
  adress: "10 rue république 59000 Lille",
  chargePointAvailable: "7",
  typePlug: [
    { typeName: "Type 2", typeSRC: Type2plug },
    { typeName: "Combo CCS", typeSRC: ComboCCSplug },
  ],
  powerPlug: "22",
  pricesStation: "2",
};
function StationCard() {
  return (
    <section className="stationCardAll">
      <p className="stationName">{station.name}</p>
      <section className="stationInfos">
        <p className="adressStation">Adresse : {station.adress}</p>
        <p className="available">
          Disponibilité : {station.chargePointAvailable} / 8 bornes
        </p>
        <section className="plugType">
          <p>Types de prises :</p>
          <ul>
            <li>
              <section className="typeAndImg">
                <p>{station.typePlug[0].typeName}</p>
                <img
                  className="imgPlug"
                  src={station.typePlug[0].typeSRC}
                  alt="logo d'une prise electrique de type 2"
                />
              </section>
            </li>
            <li>
              <section className="typeAndImg">
                <p>{station.typePlug[1].typeName}</p>
                <img
                  className="imgPlug"
                  src={station.typePlug[1].typeSRC}
                  alt="logo d'une prise electrique de type Combo CCS"
                />
              </section>
            </li>
          </ul>
        </section>
        <p className="powerPlug">
          Puisssance de la borne : {station.powerPlug} kW
        </p>
        <p className="pricesStation">
          Tarif réservation : {station.pricesStation} Euros
        </p>
      </section>
      <section>
        <button type="button" className="chooseSlotBtn">
          Choisir un créneau
        </button>
      </section>
    </section>
  );
}

export default StationCard;
