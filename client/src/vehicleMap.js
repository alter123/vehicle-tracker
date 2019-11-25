import React, { useState, useEffect } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import { useParams } from "react-router";

import RotatedMarker from "./rotatedMarker";
import { fetchVehicle } from "./api";

const VehicleMap = () => {
  const { vehicleId } = useParams();

  const [ind, updateInd] = useState(0);
  const [fetchedData, updateFetchedData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      var fetchedAll = false;
      const fetchData = async () => {
        // fetch buffer with 5 points
        var data = await fetchVehicle(vehicleId, fetchedData.length / 5);
        fetchedAll = !(data.length < 5);

        data.forEach(val => {
          val.lat = val.loc.coordinates[0];
          val.lng = val.loc.coordinates[1];
        });
        updateFetchedData(fetchedData.concat(...data));
      };

      if (ind === 0 || (ind + 2) % 5 === 0) fetchData();

      updateInd(ind + (!fetchedAll ? 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [vehicleId, ind, fetchedData]);

  return (
    <Map className={"Map-style"} zoom={13} center={fetchedData[ind]}>
      <TileLayer
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {fetchedData.map((_, idx) => {
        if (idx < 1 || idx > ind) return false;
        return (
          <Polyline
            key={idx}
            rotation={20}
            positions={[
              fetchedData[idx - 1].loc.coordinates,
              fetchedData[idx].loc.coordinates
            ]}
            color={"blue"}
          />
        );
      })}
      {ind > 1 ? <RotatedMarker data={fetchedData[ind]} /> : false}
    </Map>
  );
};

export default VehicleMap;
