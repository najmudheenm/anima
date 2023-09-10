/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryBranded = ({ property1, className, text = "CTA" }) => {
  return (
    <div className={`primary-branded ${property1} ${className}`}>
      {(property1 === "branded-base" ||
        property1 === "branded-disabled" ||
        property1 === "branded-hover" ||
        property1 === "branded-selected" ||
        property1 === "branded-short-base" ||
        property1 === "branded-short-disabled" ||
        property1 === "branded-short-hover" ||
        property1 === "branded-short-selected") && <div className="CTA">{text}</div>}

      {["branded-loading", "branded-short-loading"].includes(property1) && (
        <img
          className="subtract"
          alt="Subtract"
          src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/subtract.svg"
        />
      )}
    </div>
  );
};

PrimaryBranded.propTypes = {
  property1: PropTypes.oneOf([
    "branded-loading",
    "branded-disabled",
    "branded-short-hover",
    "branded-short-base",
    "branded-hover",
    "branded-short-loading",
    "branded-short-disabled",
    "branded-short-selected",
    "branded-base",
    "branded-selected",
  ]),
  text: PropTypes.string,
};
