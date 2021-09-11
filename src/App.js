import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Solutions from "./pages/solutions";
import OrgDimensions from "./pages/orgDimensions";
import License from "./pages/license";
import { Redirect, Route,Switch } from "react-router-dom";


function App() {
  return (
    <Switch>
    <Route component={Solutions} path="/solutions" />
    <Route component={OrgDimensions} path="/orgDimensions" />
    <Route component={License} path="/license" />
    <Redirect to="/solutions"/>
  </Switch>
   
    
  );
}

export default App;
