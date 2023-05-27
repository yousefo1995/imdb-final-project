import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
const ErrorMessage = ({ children }) => {
  return (
    <Stack flexDirection="row" paddingBottom={2} maxWidth="80%">
      <WarningIcon color="error" fontSize="12px" sx={{ marginRight: "4px" }} />

      <Typography color="error">{children}</Typography>
    </Stack>
  );
};

export default ErrorMessage;
