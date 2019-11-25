import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import VehicleMap from "./vehicleMap";
import VehicleList from "./vehicleList";
import Navbar from "./navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" render={() => <VehicleList />} />
      <Route exact path="/track/:vehicleId" render={() => <VehicleMap />} />
    </Router>
  );
};

export default App;
