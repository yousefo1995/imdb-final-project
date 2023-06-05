import React from "react";
import { ListItem, Typography, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router";
const MenuNavigationPages = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent="space-between" spacing={1}>
      <ListItem button onClick={() => navigate("/")}>
        <Typography color="info.main" variant="body2">
          Home
        </Typography>{" "}
      </ListItem>
      <Divider />

      <ListItem button onClick={() => navigate("/tops")}>
        <Typography color="info.main" variant="body2">
          Top Picks
        </Typography>{" "}
      </ListItem>
      <Divider />

      <ListItem button>
        <Typography
          color="info.main"
          variant="body2"
          onClick={() => navigate("/fan-favorite")}
        >
          Fan Favourite{" "}
        </Typography>
      </ListItem>
      <Divider />

      <ListItem button>
        <Typography
          color="info.main"
          variant="body2"
          onClick={() => navigate("/wlist")}
        >
          Watch List
        </Typography>
      </ListItem>
      <Divider />
    </Stack>
  );
};

export default MenuNavigationPages;
