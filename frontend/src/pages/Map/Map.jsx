import { useEffect, useState, useCallback, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { PlaceKit } from "@placekit/autocomplete-react";
import plugGreen from "../../assets/plug-icon-green.png";
import "@placekit/autocomplete-js/dist/placekit-autocomplete.css";
import Navbar from "../../components/Navbar/Navbar";

function Map() {
  const chargepoint = useLoaderData();

  const groupedData = {};

  chargepoint.forEach((e) => {
    if (!groupedData[e.charge_point_id_fr]) {
      groupedData[e.charge_point_id_fr] = { ...e };
    } else if (
      !groupedData[e.charge_point_id_fr].plug_type.includes(e.plug_type)
    ) {
      groupedData[e.charge_point_id_fr].plug_type += `,${e.plug_type}`;
    }
  });

  const chargepointCleaned = Object.values(groupedData);

  const groupedChargedpoints = {};

  chargepointCleaned.forEach((e) => {
    if (!groupedChargedpoints[e.station_id]) {
      groupedChargedpoints[e.station_id] = { ...e };
    }
  });

  const stations = Object.values(groupedChargedpoints);

  const markers = stations.map((e) => ({
    coord: [e.y_latitude, e.x_longitude],
    popUp: `${e.station_name}`,
    id: `${e.station_id}`,
  }));

  const customIcon = new Icon({
    iconUrl: plugGreen,
    iconSize: [38, 38],
  });
  const map = useRef(null);
  const [coords, setCoords] = useState({
    lat: 50.633333,
    long: 3.066667,
  });

  useEffect(() => {
    if (coords && map.current) {
      map.current.setView([coords.lat, coords.long], 13);
    }
  }, [coords, map]);

  const handlePick = useCallback((_, item) => {
    setCoords({
      lat: item.lat,
      long: item.lng,
    });
  });

  const handleGeolocation = useCallback((_, pos) => {
    setCoords({
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    });
  }, []);

  useEffect(() => {
    const getPosition = (position) => {
      setCoords({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        accuracy: position.coords.accuracy,
      });
    };
    navigator.geolocation.getCurrentPosition(getPosition);
  }, []);

  const hasValidPosition = coords.lat !== 0 && coords.long !== 0;

  return (
    <>
      <form role="search" className="searchBar">
        <label htmlFor="searchLabel" className="searchLabel">
          Adresse
        </label>
        <PlaceKit
          apiKey={import.meta.env.VITE_API_KEY}
          onPick={handlePick}
          onGeolocation={handleGeolocation}
          placeholder="Rechercher une adresse..."
          id="searchLabel"
        />
      </form>
      {hasValidPosition && (
        <MapContainer ref={map} center={[coords.lat, coords.long]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
          />
          <MarkerClusterGroup>
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.coord} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          {coords && (
            <Marker position={[coords.lat, coords.long]}>
              <Popup>Vous êtes ici</Popup>
            </Marker>
          )}
          <Navbar stations={stations} position={[coords.lat, coords.long]} />
        </MapContainer>
      )}
    </>
  );
}

export default Map;
