import React, { Component } from "react";

const Tooltip = ({ tooltipStyle, tooltipTextStyle, tooltipText, children }) => {
  return (
    <div className={tooltipStyle}>
      {children}
      <span className={tooltipTextStyle}>{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
