import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./ChargepointCalendar.scss";
import useStore from "../../store/AuthProvider";

function ChargepointCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  // const [selectedVehicle, setSelectedVehicle] = useState("");
  const [dateAvailable, setDateAvailable] = useState([]);
  const { setOpenBooking, selectedStation } = useStore();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/book/${selectedStation}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ selectedDate }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setDateAvailable(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTimeSlots();
  }, [selectedDate]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // const handleVehicleSelect = (vehicle) => {
  //   setSelectedVehicle(vehicle);
  // };

  const isFormValid = selectedDate && selectedTime;
  // && selectedVehicle;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.info("Réservation validée :", {
        selectedDate,
        selectedTime,
        // selectedVehicle,
      });
    }
  };

  return (
    <div className="allElements">
      <h2 className="titleCard">Choisir un créneau</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="allElementsCalendar">
          <legend className="selectDate">Choisir une date :</legend>
          <Calendar
            className="calendar"
            onChange={handleDateChange}
            value={selectedDate}
          />
          {selectedDate && (
            <>
              <time className="confirmDate">Votre date sélectionnée :</time>
              <time className="selectedDateDisplay">
                {selectedDate.toLocaleDateString()}
              </time>
            </>
          )}
        </fieldset>

        {dateAvailable[0] ? (
          <time className="timeVehicule">
            <label htmlFor="selectTime" className="selectTime">
              Choisir un créneau horaire :
            </label>
            <select
              className="slot"
              id="selectTime"
              onChange={(e) => handleTimeSelect(new Date(e.target.value))}
            >
              <option value="">Sélectionnez un créneau</option>
              {dateAvailable.map((time) => (
                <option key={time} value={time}>
                  {new Date(time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </option>
              ))}
            </select>

            {selectedTime && (
              <p className="confirmSlot">
                Votre créneau horaire sélectionné :{" "}
                {selectedTime.toLocaleTimeString()}
              </p>
            )}

            <label htmlFor="selectVehicle" className="selectVehicle">
              Choisir un véhicule :
            </label>
            {/* <select
              className="vehicle"
              id="selectVehicle"
              onChange={(e) => handleVehicleSelect(e.target.value)}
            >
              <option value="">Sélectionnez votre véhicule</option>
              {user.vehicle.map((vehicle) => (
                <option key={user.id} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select> */}
          </time>
        ) : (
          <p>Pas de créneau disponible</p>
        )}
        {isFormValid && (
          <button
            type="submit"
            className="submitButton"
            onClick={() => {
              setOpenBooking({
                page1: false,
                page2: true,
                page3: false,
              });
            }}
          >
            Valider la réservation
          </button>
        )}
      </form>
    </div>
  );
}

export default ChargepointCalendar;
