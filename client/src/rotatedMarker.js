import React from "react";
import { Marker } from "react-leaflet";

import L from "leaflet";

import DynamicPopup from "./dynamicPopup";

import carIcon from "./static/car.svg";

const RotatedMarker = ({ data }) => {
  // transitions marker's head from initial angle to final angle
  // const [currentAngle, changeAngle] = useState(fromAngle);

  // useEffect(() => {
  //   if (currentAngle === toAngle) return;

  //   // determine the shorter path to reach angle a to angle b
  //   let rotateClockwise =
  //     360 - Math.abs(fromAngle - toAngle) > Math.abs(fromAngle - toAngle)
  //       ? true
  //       : false;

  //   let increaseAngle = rotateClockwise
  //     ? fromAngle < toAngle
  //       ? true
  //       : false
  //     : fromAngle < toAngle
  //     ? false
  //     : true;

  //   if (currentAngle === 360 || currentAngle === 0)
  //     changeAngle(increaseAngle ? 0 : 360);

  //   const intervalId = setInterval(() => {
  //     changeAngle(currentAngle + (increaseAngle ? 1 : -1));
  //   }, 0);

  //   return () => clearInterval(intervalId);
  // }, [currentAngle, toAngle, fromAngle]);

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
