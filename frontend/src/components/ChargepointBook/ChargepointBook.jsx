import { useState } from "react";
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
  const [, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <h2 className="stationName">{station.name}</h2>
      <div className="stationInfos">
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
        <button type="button" className="book" onClick={handleClose}>
          Réserver
        </button>
      </div>
    </>
  );
}

export default ChargepointBook;
