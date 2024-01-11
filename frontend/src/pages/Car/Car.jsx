import { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import CarShow from "../../components/CarShow/CarShow";
import "./Car.scss";
import Teslamodel3 from "../../assets/cars/teslaModel3.png";
import PeugeotE208 from "../../assets/cars/PeugeotE208.png";

function Car() {
  const [counterCar, setcounterCar] = useState(0);
  const user = {
    firstname: "Louise",
    car: [
      { brand: "Tesla", model: "model 3" },
      { brand: "Peugeot", model: "e-208" },
    ],
  };

  const carImages = {
    Tesla: Teslamodel3,
    Peugeot: PeugeotE208,
  };

  return (
    <main className="carTopPage">
      <header className="carTopPageHeader">
        <h1 className="carTopPageTitle">Hello, {user.firstname} !</h1>
        {user.car && (
          <>
            <p className="carTopPageSubtitle">
              {`${user.car[counterCar].brand} ${user.car[counterCar].model}`}
            </p>
            <img
              className="carModel"
              src={carImages[user.car[counterCar].brand]}
              alt=""
            />
          </>
        )}
      </header>
      <CarShow
        user={user}
        counterCar={counterCar}
        setcounterCar={setcounterCar}
      />
      <button type="button" className="addCar">
        Ajouter une autre voiture
      </button>

      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          {user.car && (
            <button type="button" className="addCar">
              Supprimé La voiture
            </button>
          )}
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">
              Êtes vous vraiment sur de vouloir supprimé cette voiture ?
            </AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              Cette action va supprimé votre voiture définitivement.
            </AlertDialog.Description>
            <footer className="chooseButton">
              <AlertDialog.Cancel asChild>
                <button type="button" className="carButtonDelete">
                  Annuler
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button type="button" className="carButtonDelete">
                  Oui
                </button>
              </AlertDialog.Action>
            </footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </main>
  );
}

export default Car;
