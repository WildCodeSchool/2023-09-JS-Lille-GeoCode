import PropTypes from "prop-types";
// import { useState } from "react";
import NavbarStations from "../../assets/navbar_stations.svg";
import "./StationMiniCard.scss";
import useStore from "../../store/AuthProvider";

function StationMiniCard({ stations }) {
  const { sethandleModal, setopenBooking } = useStore();
  return (
    <li className="station_mc">
      <img
        className="station_mc_logo"
        src={NavbarStations}
        draggable="false"
        alt="logo prise de recharge"
      />
      <h2>{stations.name}</h2>
      <p className="station_mc_distance">à {stations.distance} km</p>
      <p className="station_mc_plugtype">{stations.plugType}</p>
      <img
        className="plug-type_logo"
        src={stations.plugPicture}
        draggable="false"
        alt="logo type de prise"
      />
      <button
        type="button"
        className="chooseStation"
        onClick={() => {
          sethandleModal(false);
          setopenBooking({
            page1: true,
            page2: false,
            page3: false,
          });
        }}
      >
        Choisir
      </button>
    </li>
  );
}

StationMiniCard.propTypes = {
  stations: PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    plugPicture: PropTypes.string.isRequired,
    plugType: PropTypes.string.isRequired,
  }).isRequired,
};

export default StationMiniCard;
