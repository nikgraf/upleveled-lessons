import React, { useRef, useEffect } from "react";
import Leaflet from "leaflet";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/leaflet@latest/dist/leaflet.css";
document.body.appendChild(link);

function Map() {
  const mapWrapperElement = useRef(null);
  console.log("render", mapWrapperElement.current);

  useEffect(() => {
    console.log("useEffect", mapWrapperElement.current);
    const map = Leaflet.map(mapWrapperElement.current).setView(
      [51.505, -0.09],
      13
    );

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, []);

  return (
    <div
      ref={mapWrapperElement}
      style={{ width: 400, height: 300, backgroundColor: "grey" }}
    />
  );
}

export default Map;
