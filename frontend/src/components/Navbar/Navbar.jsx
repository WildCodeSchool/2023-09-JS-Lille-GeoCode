import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import StationMiniCard from "../StationMiniCard/StationMiniCard";
import NavbarMap from "../../assets/navbar_map.svg";
import NavbarStations from "../../assets/navbar_stations.svg";
import NavbarUserPage from "../../assets/navbar_user_page.svg";
import StationPlugType2 from "../../assets/plug-type/ev-plug-type2.svg";
import StationPlugType3 from "../../assets/plug-type/ev-plug-type3.svg";
import StationPlugCHAdeMO from "../../assets/plug-type/ev-plug-chademo.svg";

const stations = [
  {
    id: 1,
    name: "Total",
    distance: 5,
    plugType: "Type 2",
    plugPicture: StationPlugType2,
  },
  {
    id: 2,
    name: "Leclerc",
    distance: 10,
    plugType: "Type 3",
    plugPicture: StationPlugType3,
  },
  {
    id: 3,
    name: "Auchan",
    distance: 15,
    plugType: "CHAdeMO",
    plugPicture: StationPlugCHAdeMO,
  },
  {
    id: 4,
    name: "Total",
    distance: 20,
    plugType: "Type 2",
    plugPicture: StationPlugType2,
  },
  {
    id: 5,
    name: "Carrefour",
    distance: 25,
    plugType: "Type 3",
    plugPicture: StationPlugType3,
  },
  {
    id: 6,
    name: "Total",
    distance: 30,
    plugType: "Type 2",
    plugPicture: StationPlugType2,
  },
];

function Navbar() {
  return (
    <nav className="navbar_container">
      <ul className="navbar_list">
        <li className="navbar_element">
          <Link to="/map" draggable="false">
            <img
              className="navbar_img"
              src={NavbarMap}
              draggable="false"
              alt="logo de carte"
            />
          </Link>
        </li>
        <li className="navbar_element navbar_element_middle">
          <Dialog.Root>
            <Dialog.Trigger>
              <img
                className="navbar_img"
                src={NavbarStations}
                draggable="false"
                alt="logo de station"
              />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialogOverlay" />
              <Dialog.Content className="dialogContent">
                <ul>
                  {stations.map((station) => (
                    <StationMiniCard key={station.id} stations={station} />
                  ))}
                </ul>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </li>
        <li className="navbar_element">
          <Link to="/" draggable="false">
            <img
              className="navbar_img"
              src={NavbarUserPage}
              draggable="false"
              alt="logo de profil"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
