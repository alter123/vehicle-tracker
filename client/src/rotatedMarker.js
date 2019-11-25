import React from "react";
import { Marker } from "react-leaflet";

import L from "leaflet";

import DynamicPopup from "./dynamicPopup";

import carIcon from "./static/car.svg";

const RotatedMarker = ({ data }) => {
  const modifiedMarker = ref => {
    // https://stackoverflow.com/a/38971299
    // open popup while loading
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  const vehicleIcon = L.divIcon({
    iconSize: [0, 0],
    iconAnchor: [10, 10],
    html: `<img
      style="
        transform: rotate(${data.hd - 180}deg);
        transform-origin: center center;"
        width="15"
        height="30"
      src='${carIcon}'>`
  });

  return (
    <Marker
      ref={modifiedMarker}
      position={data}
      icon={vehicleIcon}
      rotationAngle={0}
      rotationOrigin={"center"}
    >
      <DynamicPopup data={data} />
    </Marker>
  );
};

export default RotatedMarker;
