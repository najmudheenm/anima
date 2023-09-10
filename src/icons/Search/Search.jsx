/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Search = ({ color = "white", className }) => {
  return (
    <svg
      className={`search ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20 16.9714L13.4665 10.4286C14.9388 7.58259 14.3377 4.10292 11.9962 1.91762C9.6548 -0.267687 6.14643 -0.62347 3.41506 1.0474C0.683686 2.71827 -0.601807 6.00662 0.270848 9.09042C1.1435 12.1742 3.9606 14.2983 7.16124 14.2857C8.30545 14.2771 9.43079 13.9929 10.4423 13.4572L16.9758 20L20 16.9714ZM1.45513 7.14289C1.45513 3.98698 4.00984 1.42861 7.16124 1.42861C10.3126 1.42861 12.8674 3.98698 12.8674 7.14289C12.8674 10.2988 10.3126 12.8572 7.16124 12.8572C5.64789 12.8572 4.19651 12.2551 3.12641 11.1835C2.05631 10.1119 1.45513 8.65841 1.45513 7.14289ZM18.0314 17.0143L17.0186 18.0286L11.6548 12.6572C12.0201 12.348 12.3589 12.0087 12.6676 11.6429L18.0314 17.0143Z"
        fill={color}
      />
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
};
