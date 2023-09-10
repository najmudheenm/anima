/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckboxTick3 } from "../../icons/CheckboxTick3";
import "./style.css";

export const Checkbox = ({ checkbox, className }) => {
  return (
    <div className={`checkbox ${checkbox} ${className}`}>
      {["base-checked", "disabled-checked", "focused-checked"].includes(checkbox) && (
        <CheckboxTick3
          className="checkbox-tick"
          color="#2A2A2A"
          opacity={checkbox === "disabled-checked" ? "0.5" : undefined}
        />
      )}

      {checkbox === "loading" && <div className="div" />}
    </div>
  );
};

Checkbox.propTypes = {
  checkbox: PropTypes.oneOf([
    "disabled-unchecked",
    "base-unchecked",
    "base-checked",
    "focused-checked",
    "disabled-checked",
    "focused-unchecked",
    "loading",
    "hover",
  ]),
};
