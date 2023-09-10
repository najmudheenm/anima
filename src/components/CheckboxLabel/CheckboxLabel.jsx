/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../Checkbox";
import "./style.css";

export const CheckboxLabel = ({ checkboxLabel, className, divClassName, text = "Label" }) => {
  return (
    <div className={`checkbox-label ${className}`}>
      <Checkbox
        checkbox={
          checkboxLabel === "base-unchecked"
            ? "base-unchecked"
            : checkboxLabel === "disabled-checked"
            ? "disabled-checked"
            : checkboxLabel === "focused-checked"
            ? "focused-checked"
            : checkboxLabel === "focused-unchecked"
            ? "focused-unchecked"
            : checkboxLabel === "loading"
            ? "loading"
            : checkboxLabel === "disabled-unchecked"
            ? "disabled-unchecked"
            : "base-checked"
        }
        className="checkbox-instance"
      />
      <div className={`label checkbox-label-${checkboxLabel} ${divClassName}`}>{text}</div>
    </div>
  );
};

CheckboxLabel.propTypes = {
  checkboxLabel: PropTypes.oneOf([
    "disabled-unchecked",
    "base-unchecked",
    "base-checked",
    "focused-checked",
    "disabled-checked",
    "focused-unchecked",
    "loading",
  ]),
  text: PropTypes.string,
};
