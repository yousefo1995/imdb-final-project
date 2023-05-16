import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { SubtitleLink } from "./style";

// props
// showStartIcon
// showEndIcon

const Subtitle = ({
  showStartIcon = true,
  showEndIcon = true,
  children,
  ...res
}) => {
  return (
    <SubtitleLink variant="h2" href="#" {...res}>
      {showStartIcon && (
        <HorizontalRuleIcon fontSize="large" className="iconB" />
      )}
      {children}
      {showEndIcon && (
        <KeyboardArrowRightIcon fontSize="large" className="icon" />
      )}
    </SubtitleLink>
  );
};

export default Subtitle;
