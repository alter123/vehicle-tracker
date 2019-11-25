import { useEffect, useState } from "react";

const FetchVehicles = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch("http://13.127.218.35:5000/vehicles");
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, []);

  return { response, error };
};

export const fetchVehicle = async (vehicleId, page) => {
  try {
    const res = await fetch(
      `http://13.127.218.35:5000/vehicle/${vehicleId}/${page}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};

export default FetchVehicles;
