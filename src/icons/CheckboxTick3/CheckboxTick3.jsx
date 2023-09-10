/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckboxTick3 = ({ color = "#2A2A2A", opacity = "unset", className }) => {
  return (
    <svg
      className={`checkbox-tick-3 ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.1421 4.94975L5.02519 14.0667L4.95752 13.9986L4.88207 14.0745L-1.37091e-06 9.19239L1.41421 7.77817L4.94975 11.3137L12.7279 3.53553L14.1421 4.94975Z"
        fill={color}
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

CheckboxTick3.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
