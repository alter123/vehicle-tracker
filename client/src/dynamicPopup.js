import React from "react";
import { Popup } from "react-leaflet";
import { Card } from "antd";

export default function DynamicPopup({ data }) {
  return (
    <Popup>
      <Card
        title={data.vehicle_id}
        bordered={true}
        style={{ width: 300, height: 200 }}
      >
        <tr>
          <td style={{ width: 150 }}>
            <a href="/">SPEED</a>
          </td>
          <td>
            <a href="/">DISTANCE_SP</a>
          </td>
        </tr>
        <tr>
          <td style={{ width: 150 }}>{data.sp}</td>
          <td>{data.dist_sp}</td>
        </tr>
        <tr>
          <td style={{ width: 150 }}>
            <a href="/">BATTERY</a>
          </td>
          <td>
            <a href="/">TIME</a>
          </td>
        </tr>
        <tr>
          <td style={{ width: 150 }}>{data.battery}</td>
          <td>{data.timestamp}</td>
        </tr>
      </Card>
    </Popup>
  );
}
