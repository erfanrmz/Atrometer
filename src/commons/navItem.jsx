import React, { Component } from "react";

const NavItem = ({ label, endpoint, classes }) => {
  return (
    <li>
      <a className={classes} href={endpoint}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
