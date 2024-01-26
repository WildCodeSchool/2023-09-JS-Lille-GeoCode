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
  const { setopenBooking } = useStore();
  return (
    <>
      <h2 className="stationName">{station.name}</h2>
      <section className="stationInfos">
        <p className="date">Date : {station.date}</p>
        <p className="time">Horaire : {station.time}</p>
        <p className="adressStation">Adresse : {station.address}</p>
        <p>Types de prises :</p>
        <ul className="plugList">
          <li>
            <p className="typePlugItem">{station.typePlug[0].typeName}</p>
            <img
              className="imgPlug typePlugItem"
              src={station.typePlug[0].typeSRC}
              alt="logo d'une prise électrique de type 2"
            />
            <p className="typePlugItem">
              {station.typePlug[0].available} disponible(s)
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
              {station.typePlug[1].available} disponible(s)
            </p>
          </li>
        </ul>
        <p>Puissance de la borne : {station.powerPlug} kW</p>
        <p>Accessibilité : {station.accessibility}</p>
        <button
          type="button"
          className="book"
          onClick={() => {
            setopenBooking({
              page1: false,
              page2: false,
              page3: true,
            });
          }}
        >
          Réserver
        </button>
      </section>
    </>
  );
}

export default ChargepointBook;
