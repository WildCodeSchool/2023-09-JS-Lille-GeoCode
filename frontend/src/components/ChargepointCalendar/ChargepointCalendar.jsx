/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
    <Dialog.Root>
      <Dialog.Trigger>
        <button type="button">cliquer</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="allElements">
          <Dialog.Title className="titleCard">Choisir un créneau</Dialog.Title>
          <form onSubmit={handleSubmit}>
            <fieldset className="allElementsCalendar">
              <legend className="selectDate">Choisir une date :</legend>
              <Calendar
                className="calendar"
                onChange={handleDateChange}
                value={selectedDate}
              />
              {selectedDate && (
                <p className="confirmDate">
                  Votre date sélectionnée : {selectedDate.toLocaleDateString()}
                </p>
              )}
            </fieldset>

            {generateTimeSlots()[0] ? (
              <>
                <label htmlFor="selectTime" className="selectTime">
                  Choisir un créneau horaire :
                </label>
                <select
                  className="slot"
                  id="selectTime"
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

                <label htmlFor="selectVehicle" className="selectVehicle">
                  Choisir un véhicule :
                </label>
                <select
                  className="vehicle"
                  id="selectVehicle"
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ChargepointCalendar;
