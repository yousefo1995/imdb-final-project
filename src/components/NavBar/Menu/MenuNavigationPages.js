import React from "react";
import { ListItem, Typography, Stack, Divider } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import { useNavigate } from "react-router";
const MenuNavigationPages = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent="space-between" spacing={1}>
      <ListItem button onClick={() => navigate("/")}>
        <HomeRoundedIcon color="info" />
        <Typography
          color="info.main"
          marginLeft={1}
          variant={{ xs: "body1", lg: "h2" }}
          fontWeight={{ xs: "500", lg: "700" }}
        >
          Home
        </Typography>{" "}
      </ListItem>
      <Divider />

      <ListItem button onClick={() => navigate("/movie-list/top_rated")}>
        <LocalMoviesRoundedIcon color="info" />
        <Typography
          color="info.main"
          marginLeft={1}
          variant={{ xs: "body1", lg: "h2" }}
          fontWeight={{ xs: "500", lg: "700" }}
        >
          Top Picks
        </Typography>{" "}
      </ListItem>
      <Divider />

      <ListItem button>
        <StarsRoundedIcon color="info" />
        <Typography
          color="info.main"
          marginLeft={1}
          variant={{ xs: "body1", lg: "h2" }}
          fontWeight={{ xs: "500", lg: "700" }}
          onClick={() => navigate("/movie-list/popular")}
        >
          Fan Favourite
        </Typography>
      </ListItem>
      <Divider />

      <ListItem button>
        <BookmarksRoundedIcon color="info" />
        <Typography
          color="info.main"
          marginLeft={1}
          variant={{ xs: "body1", lg: "h2" }}
          fontWeight={{ xs: "500", lg: "700" }}
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
