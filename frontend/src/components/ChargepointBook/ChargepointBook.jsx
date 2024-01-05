import "./ChargepointBook.scss";
import ComboCCSplug from "../../assets/ComboCCSplug.svg";
import Type2plug from "../../assets/Type2plug.svg";

const station = {
  name: "Station République",
  date: "27/05/2023",
  time: "12:30",
  adress: "10 rue république 59000 Lille",
  chargePointAvailable: "7",
  typePlug: [
    { typeName: "Type 2", typeSRC: Type2plug, available: "3" },
    { typeName: "Combo CCS", typeSRC: ComboCCSplug, available: "6" },
  ],
  powerPlug: "22",
  accessibility: "PMR",
};
function ChargepointBook() {
  return (
    <section className="chargepointBookAll">
      <p className="stationName">{station.name}</p>
      <section className="stationInfos">
        <section className="timeData">
          <p className="date">Date : {station.date}</p>
          <p className="time">Horaire : {station.time}</p>
        </section>
        <p className="adressStation">Adresse : {station.adress}</p>
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
                <p>{station.typePlug[0].available} x disponible(s)</p>
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
                <p>{station.typePlug[1].available} x disponible(s)</p>
              </section>
            </li>
          </ul>
        </section>
        <p className="powerPlug">
          Puisssance de la borne : {station.powerPlug} kW
        </p>
        <p>Accessibilité : {station.accessibility}</p>
        <section>
          <button type="button" className="book">
            Réserver
          </button>
        </section>
      </section>
    </section>
  );
}

export default ChargepointBook;
