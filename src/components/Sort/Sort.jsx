/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Sort = ({
  className,
  sort = "https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/sort-3.svg",
}) => {
  return <img className={`sort ${className}`} alt="Sort" src={sort} />;
};

Sort.propTypes = {
  sort: PropTypes.string,
};
