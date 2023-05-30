import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { StyledFooterIconButton } from "./style";
const SocialiconButton = () => {
  return (
    <Box>
      <StyledFooterIconButton>
        <InstagramIcon />
      </StyledFooterIconButton>
      <StyledFooterIconButton>
        <TwitterIcon />
      </StyledFooterIconButton>{" "}
      <StyledFooterIconButton>
        <YouTubeIcon />
      </StyledFooterIconButton>{" "}
      <StyledFooterIconButton>
        <FacebookIcon />
      </StyledFooterIconButton>
    </Box>
  );
};

export default SocialiconButton;
