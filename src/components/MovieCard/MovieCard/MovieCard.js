import React, { useContext, useState } from "react";
import {
  CardActionArea,
  CardActions,
  Box,
  Link,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import StyledCardButton from "../StyledCardButton/StyledCardButton";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { StyledCard } from "./style";
import WishBtnCards from "../WishlistBtn/wishBtnCards";
import { useNavigate } from "react-router";
import { WatchListContext } from "../../../WatchListContext";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Stack } from "@mui/system";
import RatingModal from "../../MovieDetailsPageComponents/MovieRating/RatingModal";

const MovieCard = ({
  title = "title",
  rate = "0.0",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  showFullCard = true,
  movieId,
  movieData,
  inWatchList = false,
}) => {
  const navigate = useNavigate();
  const { addToWatchList } = useContext(WatchListContext);
  const [openModal, setOpenModal] = useState(false);
  const [yourRates, setYourRates] = useState(null);
  const handleOpenModal = (e) => {
    e.stopPropagation();
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const updateYourRates = (data) => {
    setYourRates(data);
  };

  const watchListHandler = (e) => {
    e.stopPropagation();
    addToWatchList(movieData);
  };
  const cardHandler = () => {
    navigate(`/movie/${movieId}`);
  };

  const stringMovieId = movieId?.toString();

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
                onClick={handleOpenModal}
              >
                {yourRates ? (
                  <Typography
                    display="flex"
                    alignItems="center"
                    color="info"
                    gap={0.3}
                  >
                    <StarRateRoundedIcon fontSize="small" />
                    <Typography variant="body1" color="info.main">
                      {yourRates.rateValue}{" "}
                    </Typography>
                  </Typography>
                ) : (
                  <StarBorderRoundedIcon fontSize="small" />
                )}
              </StyledCardButton>
              <RatingModal
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                updateYourRates={updateYourRates}
                movieId={stringMovieId}
              />
              {/* use context and pass the movieId */}
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
        {!inWatchList ? (
          <WishBtnCards onClick={watchListHandler} />
        ) : (
          <Stack position="absolute" top="0" left="0" color="secondary.main">
            <BookmarkAddedIcon fontSize="large" />
          </Stack>
        )}
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
