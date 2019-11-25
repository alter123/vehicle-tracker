import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

import FetchVehicles from "./api";

const VehicleList = () => {
  let data = FetchVehicles();

  return !data.response ? (
    <h3>Loading...</h3>
  ) : (
    <div className="Vehicle-list">
      <h3> Vehicle List </h3>
      <List
        size="large"
        bordered
        dataSource={data.response}
        renderItem={item => (
          <List.Item>
            <Link to={`/track/${item}`}> {item} </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default VehicleList;
