import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavButton from "../NavButton/NavButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ userName = "yousefo123" }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLogOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const splitUserName = (email) => email.split("@")[0];

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };
  return (
    <Stack>
      <NavButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon color="secondary" />}
      >
        {currentUser && splitUserName(currentUser.email)}
      </NavButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/wlist")}>your Watchlist</MenuItem>
        <MenuItem onClick={handelLogOut}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export default UserMenu;
