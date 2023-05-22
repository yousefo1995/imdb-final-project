import { Typography } from "@mui/material";

import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import StyledIconCard from "./style";

const IconCard = ({ children, icon }) => {
  return (
    <StyledIconCard>
      {icon === "videos" && <VideoLibraryRoundedIcon className="icon" />}{" "}
      {icon === "photos" && <PhotoLibraryRoundedIcon className="icon" />}
      <Typography>{children}</Typography>
    </StyledIconCard>
  );
};

export default IconCard;
