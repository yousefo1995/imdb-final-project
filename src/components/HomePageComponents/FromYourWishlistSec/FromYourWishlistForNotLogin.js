import React from "react";
import { Stack, Typography } from "@mui/material";
import Subtitle from "../../Core/Subtitle/Subtitle";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import IconButtonIMDB from "../../Core/IconButtonIMDB/IconButtonIMDB";
import ImdbButton from "../../Core/ImdbButton/ImdbButton";
import { useNavigate } from "react-router";

const FromYourWishlistForNotLogin = () => {
  const navigate = useNavigate();
  return (
    <Stack paddingTop={2.5} marginTop={3} width="100%">
      <Subtitle minWidth="100%">From your Watchlist</Subtitle>
      <Stack alignItems="center" width="100%" marginTop={4} marginBottom={4}>
        <IconButtonIMDB disabled>
          <BookmarkAddIcon />
        </IconButtonIMDB>
        <Typography variant="body1" color="#fff">
          Sign in to access your Watchlist
        </Typography>
        <Typography variant="body1" color="#fff">
          Save shows and movies to keep track of what you want to watch.
        </Typography>

        <Stack marginTop={4}>
          <ImdbButton
            is
            width="164px"
            color="info"
            bg="#1F1F1F"
            bghover="#2F2F2F"
            onClick={() => navigate("/login")}
          >
            Sign in to IMDb
          </ImdbButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FromYourWishlistForNotLogin;