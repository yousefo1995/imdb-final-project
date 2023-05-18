import { styled } from "@mui/system";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)(
  ({
    theme,
    iconSize,
    borderR,
    showBorder,
    iconColor,
    width,
    height,
    bg,
    hoverBg,
    iconHover,
  }) => ({
    padding: "0",
    borderRadius: borderR || "12px",
    width: width,
    height: height,
    border: showBorder ? "1px solid #ffffffb3" : "none",

    backgroundColor: bg,
    "&:hover": {
      backgroundColor: hoverBg,
      "& .MuiSvgIcon-root": {
        color: iconHover,
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: iconSize || "62px",
      border: "none",
      color: iconColor || "#2F2F2F",
    },
  })
);
