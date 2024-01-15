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
      <Dialog.Portal className="chargepointBookAll">
        <Dialog.Content className="stationInfos">
          <Dialog.Title className="stationName">{station.name}</Dialog.Title>
          <Dialog.Description className="date">
            Date : {station.date}
          </Dialog.Description>
          <Dialog.Description className="time">
            Horaire : {station.time}
          </Dialog.Description>
          <Dialog.Description className="adressStation">
            Adresse : {station.address}
          </Dialog.Description>
          <Dialog.Description>Types de prises :</Dialog.Description>
          <ul className="plugList">
            <li>
              <Dialog.Description className="typePlugItem">
                {station.typePlug[0].typeName}
              </Dialog.Description>
              <img
                className="imgPlug typePlugItem"
                src={station.typePlug[0].typeSRC}
                alt="logo d'une prise electrique de type 2"
              />
              <Dialog.Description className="typePlugItem">
                {station.typePlug[0].available} disponible(s)
              </Dialog.Description>
            </li>
            <li>
              <Dialog.Description className="typePlugItem">
                {station.typePlug[1].typeName}
              </Dialog.Description>
              <img
                className="imgPlug typePlugItem"
                src={station.typePlug[1].typeSRC}
                alt="logo d'une prise electrique de type Combo CCS"
              />
              <Dialog.Description className="typePlugItem">
                {station.typePlug[1].available} disponible(s)
              </Dialog.Description>
            </li>
          </ul>
          <Dialog.Description>
            Puisssance de la borne : {station.powerPlug} kW
          </Dialog.Description>
          <Dialog.Description>
            Accessibilité : {station.accessibility}
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
