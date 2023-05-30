import React from "react";
import StyledChip from "./style";

const ImdbChip = ({ children }) => {
  return (
    <StyledChip
      label={children}
      component="a"
      href="#basic-chip"
      variant="outlined"
      clickable
    />
  );
};

export default ImdbChip;
