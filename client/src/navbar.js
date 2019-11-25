import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div style={{ height: "15px" }} />
      <Link to="/">
        <Avatar size="large" icon="car" />
      </Link>
    </div>
  );
};

export default Navbar;
