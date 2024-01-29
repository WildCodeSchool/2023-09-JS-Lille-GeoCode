import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarShow from "../../components/CarShow/CarShow";
import DeleteCarConfirmationModal from "../../components/CarShow/DeleteCarConfirmationModal/DeleteCarConfirmationModal";
import "./Car.scss";
import Teslamodel3 from "../../assets/cars/teslaModel3.png";
import PeugeotE208 from "../../assets/cars/PeugeotE208.png";
import DaciaSpring from "../../assets/cars/daciaSpring.png";
import mg4 from "../../assets/cars/mg4.png";
import zoe from "../../assets/cars/renaultZOE.png";
import AddCarModal from "../../components/CarShow/AddCarModal/AddCarModal";
import BackButton from "../../components/BackButton/BackButton";
import arrowDark from "../../assets/arrowBackDark.svg";
import useStore from "../../store/AuthProvider";

function Car() {
  const { auth } = useStore();

  const [counterCar, setcounterCar] = useState(0);

  const carData = useLoaderData();
  const carImages = {
    "Modele 3": Teslamodel3,
    "E-208": PeugeotE208,
    Spring: DaciaSpring,
    MG4: mg4,
    ZOE: zoe,
  };

  return (
    <main className="carTopPage">
      <header className="carTopPageHeader">
        <h1 className="carTopPageTitle">Hello, {auth.user.firstname} !</h1>
        {carData[counterCar] && (
          <>
            <p className="carTopPageSubtitle">
              {`${carData[counterCar].brand} ${carData[counterCar].model}`}
            </p>
            <img
              className="carModel"
              src={carImages[carData[counterCar].model]}
              alt=""
            />
          </>
        )}
      </header>
      <CarShow
        carData={carData}
        counterCar={counterCar}
        setcounterCar={setcounterCar}
      />
      <footer className="ButtonShowCarContainer">
        <AddCarModal />
        <DeleteCarConfirmationModal carData={carData} counterCar={counterCar} />
      </footer>
      <BackButton colorArrow={arrowDark} backButtonStyle="backButtonCar" />
    </main>
  );
}

export default Car;
