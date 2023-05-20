import { Button, Typography } from "@mui/material";
const NavButton = ({ children, padding = "16px", ...restProps }) => {
  return (
    <Button
      disableElevation
      {...restProps}
      sx={{
        backgroundColor: "inherit",
        marginLeft: "8px",
        paddingLeft: padding,
        paddingRight: padding,

        "&:hover": { backgroundColor: "#3A3A3A" },
      }}
    >
      <Typography
        noWrap
        variant="button"
        display="flex"
        flexDirection="row"
        color="#fff"
        textTransform="none"
      >
        {children}
      </Typography>
    </Button>
  );
};

export default NavButton;
