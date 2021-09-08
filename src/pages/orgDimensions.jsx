import React, { Component } from "react";
import Header from "../atrometer/header";
import Main from "../atrometer/main";
import NavBar from "../commons/navbar";

const OrgDimensions = () => {
  return (
    <React.Fragment>
      <NavBar color="orange" />
      <Header imageUrl = "/organization.svg" label = "organization" />
      <Main />
    </React.Fragment>
  );
};

export default OrgDimensions;
