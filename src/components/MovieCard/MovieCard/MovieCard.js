import React, { useContext } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import StyledCardButton from "../StyledCardButton/StyledCardButton";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Box, Link } from "@mui/material";
import { StyledCard } from "./style";
import WishBtnCards from "../WishlistBtn/wishBtnCards";
import { useNavigate } from "react-router";
import { WatchListContext } from "../../../WatchListContext";

const MovieCard = ({
  title = "title",
  rate = "0.0",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  showFullCard = true,
  movieId,
  movieData,
}) => {
  const navigate = useNavigate();
  const { addToWatchList } = useContext(WatchListContext);

  const watchListHandler = (e) => {
    e.stopPropagation();
    addToWatchList(movieData);
  };
  const cardHandler = () => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <StyledCard showFullCard={showFullCard}>
      <CardActionArea disableRipple onClick={cardHandler}>
        <CardMedia
          component="img"
          // height="274px"
          image={image}
          alt="green iguana"
        />

        {showFullCard && (
          <CardContent>
            <Box display="flex" alignItems="center">
              <Typography
                display="flex"
                alignItems="center"
                color="secondary.main"
                marginRight={1.2}
              >
                <StarRateRoundedIcon fontSize="small" />
                <Typography variant="body1" color="info.main">
                  {rate}{" "}
                </Typography>
              </Typography>
              <StyledCardButton
                bg="#1A1A1A"
                hoverbg="#2C2C2C"
                width="48px"
                color="info.main"
              >
                <StarBorderRoundedIcon fontSize="small" />
              </StyledCardButton>
            </Box>

            <Link href="#" underline="hover" color="#fff">
              <Typography
                variant="body1"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {title}
              </Typography>
            </Link>
          </CardContent>
        )}
        <WishBtnCards onClick={watchListHandler} />
      </CardActionArea>

      {showFullCard && (
        <Box>
          {" "}
          <CardActions>
            <StyledCardButton onClick={watchListHandler}>
              <AddIcon fontSize="small" />
              WatchList
            </StyledCardButton>
          </CardActions>
          <Box display="flex" justifyContent="center">
            <CardActions>
              <StyledCardButton
                bg="#1A1A1A"
                hoverbg="#2C2C2C"
                width="96px"
                color="#fff"
              >
                <PlayArrowRoundedIcon fontSize="small" />
                Trailer
              </StyledCardButton>
            </CardActions>
          </Box>
        </Box>
      )}
    </StyledCard>
  );
};

export default MovieCard;
