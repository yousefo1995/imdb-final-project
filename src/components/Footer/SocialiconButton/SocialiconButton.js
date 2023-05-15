import { IconButton, Box } from "@mui/material";
import styles from "./SocialiconButton.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { margin } from "@mui/system";

const SocialiconButton = () => {
  return (
    <Box>
      {/* when refresh doesnt work the class  (**********************************/}
      <IconButton sx={{ backgroundColor: "#3A3A3A", margin: "12px" }}>
        <InstagramIcon className={styles.icon} />
      </IconButton>
      <IconButton className={styles.iconBtn}>
        <TwitterIcon className={styles.icon} />
      </IconButton>{" "}
      <IconButton className={styles.iconBtn}>
        <YouTubeIcon className={styles.icon} />
      </IconButton>{" "}
      <IconButton className={styles.iconBtn}>
        <FacebookIcon className={styles.icon} />
      </IconButton>
    </Box>
  );
};

export default SocialiconButton;
