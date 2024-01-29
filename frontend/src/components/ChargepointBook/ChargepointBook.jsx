import "./ChargepointBook.scss";
import ComboCCSplug from "../../assets/ComboCCSplug.svg";
import Type2plug from "../../assets/Type2plug.svg";
import useStore from "../../store/AuthProvider";

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
  const { SetopenBooking } = useStore();
  return (
    <>
      <h2 className="stationName">{station.name}</h2>
      <section className="stationInfos">
        <p className="date">
          Date : <time className="dateChoose">{station.date}</time>
        </p>
        <p className="time">
          Horaire : <time className="timeChoose">{station.time}</time>
        </p>
        <p className="adressStation">
          Adresse :{" "}
          <span className="adressStationChoose">{station.adress}</span>
        </p>
        <p>Types de prises :</p>
        <ul className="plugList">
          <li>
            <p className="typePlugItem">{station.typePlug[0].typeName}</p>
            <img
              className="imgPlug"
              src={station.typePlug[0].typeSRC}
              alt="logo d'une prise électrique de type 2"
            />
            <p className="typePlugItem">
              <span className="available">{station.typePlug[0].available}</span>{" "}
              x disponible(s)
            </p>
          </li>
          <li>
            <p className="typePlugItem">{station.typePlug[1].typeName}</p>
            <img
              className="imgPlug typePlugItem"
              src={station.typePlug[1].typeSRC}
              alt="logo d'une prise électrique de type Combo CCS"
            />
            <p className="typePlugItem">
              <span className="available">{station.typePlug[1].available}</span>{" "}
              x disponible(s)
            </p>
          </li>
        </ul>
        <p className="chargepointPower">
          Puissance de la borne :{" "}
          <span className="fullPower">{station.powerPlug}</span> kW
        </p>
        <p className="accessibility">
          Accessibilité :{" "}
          <span className="access">{station.accessibility}</span>
        </p>
      </section>
      <button
        type="button"
        className="book"
        onClick={() => {
          SetopenBooking({
            page1: false,
            page2: false,
            page3: true,
          });
        }}
      >
        Réserver
      </button>
    </>
  );
}

export default ChargepointBook;
