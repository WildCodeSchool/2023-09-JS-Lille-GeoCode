import PropTypes from "prop-types";
import NavbarStations from "../../assets/navbar_stations.svg";
import "./StationMiniCard.scss";

function StationMiniCard({ stations }) {
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
