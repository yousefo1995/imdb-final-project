import React from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Box, width } from "@mui/system";

const StyledCardButtom = styled(Button)(({ theme, bg, hoverbg, width }) => ({
  backgroundColor: bg,
  padding: "0 16px",
  width: width,
  height: "36px",

  "&:hover": { backgroundColor: hoverbg },
}));
const StyledCardButton = ({
  children,
  bg = "#2C2C2C",
  hoverbg = "#30353C",
  width = "216px",
  color = "info.main",
}) => {
  return (
    <StyledCardButtom bg={bg} hoverbg={hoverbg} width={width}>
      <Typography
        variant="button"
        color={color}
        textTransform="none"
        display="flex"
        alignItems="center"
      >
        {children}
      </Typography>{" "}
    </StyledCardButtom>
  );
};

export default StyledCardButton;
