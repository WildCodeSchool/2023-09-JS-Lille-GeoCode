import { useState } from "react";
import CarShow from "../../components/CarShow/CarShow";
import DeleteCarConfirmationModal from "../../components/CarShow/DeleteCarConfirmationModal/DeleteCarConfirmationModal";
import "./Car.scss";
import Teslamodel3 from "../../assets/cars/teslaModel3.png";
import PeugeotE208 from "../../assets/cars/PeugeotE208.png";
import AddCarModal from "../../components/CarShow/AddCarModal/AddCarModal";

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
      <AddCarModal />
      <DeleteCarConfirmationModal user={user} />
    </main>
  );
}

export default Car;
