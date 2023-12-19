import { useEffect, useState } from "react";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import plugGreen from "../../assets/plug-icon-green.png";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function Map() {
  const markers = [
    { coord: [50.649981, 3.108342], popUp: "Salut" },
    { coord: [50.649981, 3.108342] },
    { coord: [50.649981, 3.108342] },
    { coord: [50.649981, 3.108342] },
    { coord: [50.61685, 3.024687] },
    { coord: [50.61685, 3.024687] },
    { coord: [50.61685, 3.024687] },
    { coord: [50.61685, 3.024687] },
    // [3.024687, 50.61685]
    // [3.024687, 50.61685]
    // [3.024687, 50.61685]
    // [3.024687, 50.61685]
    // [3.024687, 50.61685]
    // [3.024687, 50.61685]
    { coord: [50.620099, 3.083623] },
    // [3.083623, 50.620099]
    // [3.083623, 50.620099]
    // [3.083623, 50.620099]
    { coord: [50.617371, 3.083473] },
    // [3.083473, 50.617371]
    // [3.083473, 50.617371]
    // [3.083473, 50.617371]
    { coord: [50.630735, 3.034746] },
    // [3.034746, 50.630735]
    { coord: [50.629868, 3.032864] },
    // [3.032864, 50.629868]
    // [3.032864, 50.629868]
    // [3.032864, 50.629868]
    { coord: [50.6207475, 3.075673] },
    { coord: [50.625233, 3.123037] },
    // [3.123037, 50.625233]
    { coord: [50.6353937, 3.0385727] },
    // [3.0385727, 50.6353937]
    // [3.0385727, 50.6353937]
    // [3.0385727, 50.6353937]
    { coord: [50.6319701, 3.0798087] },
    // [3.0798087, 50.6319701]
  ];
  const customIcon = new Icon({
    iconUrl: plugGreen,
    iconSize: [38, 38],
  });

  const [myPosition, setMyPosition] = useState({
    lat: 0,
    long: 0,
    accuracy: 0,
  });

  useEffect(() => {
    const getPosition = (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      const currentPosition = { lat, long, accuracy };
      setMyPosition(currentPosition);
    };

    navigator.geolocation.getCurrentPosition(getPosition);
  }, []);
  console.log(myPosition);

  const hasValidPosition = myPosition.lat !== 0 && myPosition.long !== 0;
  return (
    hasValidPosition && (
      <MapContainer center={[myPosition.lat, myPosition.long]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {markers.map((marker) => (
            <Marker position={marker.coord} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          <Marker
            position={[myPosition.lat, myPosition.long]}
            icon={customIcon}
          >
            <Popup>
              <h1>Ma position</h1>
            </Popup>
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    )
  );
}

export default Map;
