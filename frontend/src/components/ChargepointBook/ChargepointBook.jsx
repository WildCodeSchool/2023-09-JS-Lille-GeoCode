import "./ChargepointBook.scss";
import * as Dialog from "@radix-ui/react-dialog";
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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bookingButton" type="button">
          Réservez
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="chargepointBookAll">
          <Dialog.Title className="stationName">{station.name}</Dialog.Title>
          <Dialog.Description className="stationInfos">
            <p className="date">Date : {station.date}</p>
            <p className="time">Horaire : {station.time}</p>
            <adress className="adressStation">
              Adresse : {station.adress}
            </adress>
            <p>Types de prises :</p>
            <ul className="plugList">
              <li>
                <p className="typePlugItem">{station.typePlug[0].typeName}</p>
                <img
                  className="imgPlug typePlugItem"
                  src={station.typePlug[0].typeSRC}
                  alt="logo d'une prise electrique de type 2"
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
                  alt="logo d'une prise electrique de type Combo CCS"
                />
                <p className="typePlugItem">
                  {station.typePlug[1].available} disponible(s)
                </p>
              </li>
            </ul>
            <p>Puisssance de la borne : {station.powerPlug} kW</p>
            <p>Accessibilité : {station.accessibility}</p>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button type="button" className="book">
              Réserver
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ChargepointBook;
