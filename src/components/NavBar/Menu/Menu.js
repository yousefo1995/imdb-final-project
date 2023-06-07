import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  List,
  ListItem,
  Typography,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";
import MenuNavigationPages from "./MenuNavigationPages";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handelLogOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const splitUserName = (email) => email.split("@")[0];
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Stack>
      <NavButton onClick={toggleDrawer}>
        <MenuIcon color="#fff" />
        <Typography
          marginLeft={0.5}
          display={{ xs: "none", lg: "block" }}
          variant="button"
          textTransform="none"
        >
          Menu
        </Typography>
      </NavButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ bgcolor: "primary.light", height: "100%", width: "200px" }}>
          <Stack display={{ xs: "none", lg: "block" }}>
            <MenuNavigationPages />
          </Stack>
          <Stack display={{ md: "block", lg: "none" }}>
            {currentUser ? (
              <ListItem>
                <Avatar sx={{ width: 24, height: 24 }} />
                <Typography marginLeft={1} variant="body1" color="secondary">
                  {currentUser && splitUserName(currentUser.email)}
                </Typography>
              </ListItem>
            ) : (
              <ListItem button onClick={() => navigate("/login")}>
                <LoginRoundedIcon color="secondary" />
                <Typography marginLeft={1} variant="body1" color="secondary">
                  Sign In
                </Typography>
              </ListItem>
            )}
            <Divider />
            <Divider />

            <Divider light={true} />
            <MenuNavigationPages />
          </Stack>
          {currentUser && (
            <ListItem button onClick={handelLogOut}>
              <LogoutRoundedIcon sx={{ color: "#fff" }} />
              <Typography color="#fff" variant="body1">
                LogOut
              </Typography>
            </ListItem>
          )}
        </List>
      </Drawer>
    </Stack>
  );
};

export default Menu;
