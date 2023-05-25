import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Typography } from "@mui/material";
const ErrorMessage = ({ children }) => {
  return (
    <Typography
      display="flex"
      alignItems="center"
      paddingBottom={2}
      color="error"
    >
      <WarningIcon fontSize="small" sx={{ marginRight: "4px" }} />
      {children}
    </Typography>
  );
};

export default ErrorMessage;
