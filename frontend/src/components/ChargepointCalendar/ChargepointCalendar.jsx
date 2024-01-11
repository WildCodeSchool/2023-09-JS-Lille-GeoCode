/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ChargepointCalendar.scss";

function ChargepointCalendar() {
  const booking = { date: "2024-01-10 12:00" };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const user = {
    id: 1,
    name: "Naomi Watts",
    vehicle: ["Renault Megane ETECH"],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const generateTimeSlots = () => {
    const startTime = new Date(selectedDate);
    startTime.setHours(1, 0, 0);

    const endTime = new Date(selectedDate);
    endTime.setHours(23, 30, 0);

    const timeSlots = [];
    const currentTime = new Date(startTime);

    while (currentTime <= endTime) {
      if (
        currentTime.toISOString().slice(0, 16).replace("T", " ") !==
        booking.date
      ) {
        timeSlots.push(new Date(currentTime));
      }
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return timeSlots;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const isFormValid = selectedDate && selectedTime && selectedVehicle;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.info("Réservation validée :", {
        selectedDate,
        selectedTime,
        selectedVehicle,
      });
    }
  };

  return (
    <section className="componentElements">
      <section className="allElements">
        <form onSubmit={handleSubmit}>
          <p className="titleCard">Choisir un créneau</p>
          <section>
            <p className="selectDate">Choisir une date :</p>
            <Calendar
              className="calendar"
              onChange={handleDateChange}
              value={selectedDate}
            />
            {selectedDate && (
              <p className="confirmDate">
                Votre date sélectionnée : {selectedDate.toDateString()}
              </p>
            )}
          </section>

          {generateTimeSlots()[0] ? (
            <>
              <p className="selectTime">Choisir un créneau horaire :</p>
              <select
                className="slot"
                onChange={(e) => handleTimeSelect(new Date(e.target.value))}
              >
                <option value="">Sélectionnez un créneau</option>
                {generateTimeSlots().map((time, index) => (
                  <option key={index} value={time.toISOString()}>
                    {time.toLocaleTimeString([], {
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

              <p className="selectVehicle">Choisir un véhicule :</p>
              <select
                className="vehicle"
                onChange={(e) => handleVehicleSelect(e.target.value)}
              >
                <option value="">Sélectionnez votre véhicule</option>
                {user.vehicle.map((vehicle, index) => (
                  <option key={index} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <p>Pas de créneaux disponibles</p>
          )}

          {isFormValid && (
            <button type="submit" className="submitButton">
              Valider la réservation
            </button>
          )}
        </form>
      </section>
    </section>
  );
}

export default ChargepointCalendar;
