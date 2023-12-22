import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import NavbarMap from "../../assets/navbar_map.svg";
import NavbarStations from "../../assets/navbar_stations.svg";
import NavbarUserPage from "../../assets/navbar_user_page.svg";

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
              alt="logo carte de navigation"
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
                alt="logo prise electrique"
              />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialogOverlay" />
              <Dialog.Content className="dialogContent">
                <Dialog.Title className="dialogTitle">Stations</Dialog.Title>
                <Dialog.Description>
                  Mapper ici les mini-cartes des stations de recharge
                </Dialog.Description>
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
              alt="logo avatar avec roue dentée"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
