import "./MyBooking.scss";
import PropTypes from "prop-types";
import type2 from "../../assets/plug-type/ev-plug-type2.svg";
import comboCCS from "../../assets/plug-type/ComboCCSplug.svg";
import chademo from "../../assets/plug-type/ev-plug-chademo.svg";
import useStore from "../../store/AuthProvider";

const plugImages = {
  type2,
  comboCCS,
  chademo,
};

function MyBooking({ userBook, setDeleted, deleted }) {
  const { setOpenBooking } = useStore();

  const deleteBooking = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/booking/${
          userBook.bookId
        }`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      setDeleted(!deleted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <section className="allBook">
      <section className="bookHead">
        <h2 className="stationName">{userBook.station_name}</h2>
      </section>
      <section className="stationInfos">
        <p className="date">
          Date :{" "}
          <time className="dateChoose">
            {new Date(userBook.date).toLocaleDateString()}
          </time>
        </p>
        <p className="time">
          Horaire :{" "}
          <time className="timeChoose">
            {new Date(userBook.date).toLocaleTimeString()}
          </time>
        </p>
        <p className="adressStation">
          Adresse :
          <span className="adressStationChoose">{userBook.adress}</span>
        </p>
        <p>Types de prises :</p>
        <ul className="plugList">
          <li>
            <p className="typePlugItem">- {userBook.name}</p>
            <img className="imgPlug" src={plugImages[userBook.name]} alt="" />
          </li>
        </ul>
        <p className="chargepointPower">
          Puissance de la borne :
          <span className="fullPower">{userBook.max_power}</span> kW
        </p>
      </section>
      <button
        type="button"
        className="book"
        onClick={() => {
          setOpenBooking({
            page1: false,
            page2: false,
            page3: true,
          });
          deleteBooking();
        }}
      >
        Annuler la réservation
      </button>
    </section>
  );
}

MyBooking.propTypes = {
  userBook: PropTypes.shape({
    station_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    max_power: PropTypes.number.isRequired,
    bookId: PropTypes.number.isRequired,
  }).isRequired,
  deleted: PropTypes.bool.isRequired,
  setDeleted: PropTypes.func.isRequired,
};

export default MyBooking;
