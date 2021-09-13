import React, { Component } from "react";

const Tooltip = ({
  tooltipStyle,
  tooltipTextStyle,
  tooltipText,
  children,
  textCols,
}) => {
  const scale = 13.3;
  const width = textCols * scale + "rem";

  return (
    <div className={tooltipStyle}>
      {children}
      <span className={tooltipTextStyle} style={{ width }}>
        {tooltipText}
      </span>
    </div>
  );
};

export default Tooltip;
