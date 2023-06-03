import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "@mui/material";
const FooterLinks = ({ children }) => {
  return (
    <Link
      href="#"
      color="#fff"
      fontSize="1.2em"
      display="flex"
      alignItems="center"
      padding={1}
    >
      {children}
      <LaunchIcon fontSize="inherit" />
    </Link>
  );
};

export default FooterLinks;
