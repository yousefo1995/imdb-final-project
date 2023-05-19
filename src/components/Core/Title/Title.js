import React from "react";
import { Typography } from "@mui/material";

const Title = ({ children, ...res }) => {
  return (
    <Typography color="secondary" variant="h1" {...res}>
      {children}
    </Typography>
  );
};

export default Title;
