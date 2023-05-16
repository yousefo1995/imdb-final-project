import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { SubtitleLink } from "./style";

// props
// showIcon

const Subtitle = ({ showIcon = true, children, ...res }) => {
  return (
    <SubtitleLink variant="h2" href="#" {...res}>
      <HorizontalRuleIcon fontSize="large" className="iconB" />
      {children}
      {showIcon && <KeyboardArrowRightIcon fontSize="large" className="icon" />}
    </SubtitleLink>
  );
};

export default Subtitle;
