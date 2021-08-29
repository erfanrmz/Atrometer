import React from "react";

const Footer = () => {
  return (
    <footer>
      <img
        src={process.env.PUBLIC_URL + "/modem.png"}
        alt="مودم"
        className="float-left ml-32 mt-20"
      />
    </footer>
  );
};

export default Footer;
