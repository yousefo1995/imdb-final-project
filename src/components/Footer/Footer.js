import React from "react";
import { IconButton, Box } from "@mui/material";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Container } from "@mui/system";

import SocialiconButton from "./SocialiconButton/SocialiconButton";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Button size="large" variant="contained">
          Sign in for more access
        </Button>
      </Box>

      <Box>
        <SocialiconButton>
          <InstagramIcon />
        </SocialiconButton>
        <SocialiconButton>
          <TwitterIcon />
        </SocialiconButton>
        <SocialiconButton>
          <YouTubeIcon />
        </SocialiconButton>
        <SocialiconButton>
          <FacebookIcon />
        </SocialiconButton>
      </Box>
    </Box>
  );
};

export default Footer;
