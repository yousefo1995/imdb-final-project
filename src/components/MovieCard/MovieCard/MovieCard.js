import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import StyledCardButton from "../StyledCardButton/StyledCardButton";
import LaunchIcon from "@mui/icons-material/Launch";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Box, Link } from "@mui/material";
import { StyledCard, StyledWishlistBtn } from "./style";

const MovieCard = ({
  title = "title",
  rate = "0.0",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
}) => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="344"
          image={image}
          alt="green iguana"
        />
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
            <Typography variant="body1">{title}</Typography>
          </Link>
        </CardContent>

        <StyledWishlistBtn />
      </CardActionArea>

      <CardActions>
        <StyledCardButton>
          Watch now
          <LaunchIcon fontSize="small" />{" "}
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
    </StyledCard>
  );
};

export default MovieCard;
