import { Button, Typography } from "@mui/material";
const NavButton = ({ children, ...restProps }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      {...restProps}
      sx={{
        backgroundColor: "inherit",
        "&:hover": { backgroundColor: "#3A3A3A" },
        marginLeft: "8px",
      }}
    >
      <Typography>{children}</Typography>
    </Button>
  );
};

export default NavButton;
