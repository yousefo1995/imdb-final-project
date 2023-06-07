import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import Subtitle from "../../Core/Subtitle/Subtitle";
import ImdbButton from "../../Core/ImdbButton/ImdbButton";
import { useNavigate } from "react-router";
import WishBtnCards from "../../MovieCard/WishlistBtn/wishBtnCards";
const FromYourWishlistEmptyList = ({ isLogged = false }) => {
  const navigate = useNavigate();
  return (
    <Stack paddingTop={2.5} marginTop={3} width="100%">
      <Subtitle minWidth="100%">From your Watchlist</Subtitle>
      <Stack alignItems="center" width="100%" marginTop={4} marginBottom={4}>
        <Button variant="text" disabled>
          <WishBtnCards position="relative" bgColor="rgb(90, 90, 90, 1)" />
        </Button>
        <Typography variant="body1" color="#fff">
          {isLogged
            ? "Your watchlist is empty"
            : "Sign in to access your Watchlist"}
        </Typography>
        <Typography variant="body1" color="#fff">
          {isLogged
            ? "Save shows and movies to keep track of what you want to watch."
            : "Save shows and movies to keep track of what you want to watch."}
        </Typography>

        <Stack marginTop={4}>
          {isLogged ? (
            <ImdbButton
              is
              width="194px"
              color="info"
              bg="#1F1F1F"
              bghover="#2F2F2F"
              onClick={() => navigate("/movie-list/top_rated")}
            >
              Browse popular movies
            </ImdbButton>
          ) : (
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
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FromYourWishlistEmptyList;
