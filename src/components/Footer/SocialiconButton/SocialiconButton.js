import { IconButton, Box } from "@mui/material";
import styles from "./SocialiconButton.module.css";
const SocialiconButton = ({ children, ...res }) => {
  return (
    <IconButton className={styles.iconBtn} {...res}>
      {children}
    </IconButton>
  );
};

export default SocialiconButton;
