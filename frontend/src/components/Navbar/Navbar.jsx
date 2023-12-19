import React from "react";
import "./Navbar.scss";
import NavbarMap from "../../assets/navbar_map.svg";
import NavbarStations from "../../assets/navbar_stations.svg";
import NavbarUserPage from "../../assets/navbar_user_page.svg";

function Navbar() {
  return (
    <nav className="navbar_container">
      <ul className="navbar_list">
        <li className="navbar_element">
          <a href="/map" draggable="false">
            <img
              className="navbar_img"
              src={NavbarMap}
              draggable="false"
              alt="map logo"
            />
          </a>
        </li>
        <li className="navbar_element navbar_element_middle">
          <a href="/map" draggable="false">
            <img
              className="navbar_img"
              src={NavbarStations}
              draggable="false"
              alt="map logo"
            />
          </a>
        </li>
        <li className="navbar_element">
          <a href="/map" draggable="false">
            <img
              className="navbar_img"
              src={NavbarUserPage}
              draggable="false"
              alt="map logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
