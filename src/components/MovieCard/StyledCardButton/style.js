import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButton = styled(Button)(
  ({ theme, bg, hoverbg, width, rightBorderRadious, leftBorderRadious }) => ({
    backgroundColor: bg,
    padding: "0 16px",
    width: width,
    height: "36px",
    borderTopLeftRadius: !leftBorderRadious && "0",
    borderBottomLeftRadius: !leftBorderRadious && "0",
    borderTopRightRadius: !rightBorderRadious && "0",
    borderBottomRightRadius: !rightBorderRadious && "0",
    "&:hover": { backgroundColor: hoverbg },
  })
);
