import React from "react";
import IconCard from "../components/MovieDetailsPageComponents/IconCard/IconCard";
import { Container, Grid, Typography, Box, Stack } from "@mui/material";
import GridMoviePoster from "../components/MovieDetailsPageComponents/GridMoviePoster/GridMoviePoster";
import ImdbChip from "../components/Core/ImdbChip/ImdbChip";
import MovieRating from "../components/MovieDetailsPageComponents/MovieRating/MovieRating";
import ImdbAccordion from "../components/MovieDetailsPageComponents/ImdbAccordion/ImdbAccordion";
import AccordionData from "../components/MovieDetailsPageComponents/ImdbAccordion/AccordionData";
import MoviePageHeadInfo from "../components/MovieDetailsPageComponents/MoviePageHeadInfo/MoviePageHeadInfo";
import StyledCardButton from "../components/MovieCard/StyledCardButton/StyledCardButton";
import "./style/style.css";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const MoviePage = ({ creator = "creator name", stars = "stars names" }) => {
  return (
    <Box className="gradiant">
      {/*  // xl ? md ? none */}
      <Container>
        <MoviePageHeadInfo />
        <Grid container spacing={0.5}>
          <Grid item display={{ xs: "none", md: "block" }} lg={3} md={3}>
            <GridMoviePoster showPlayTrailerBtn={false} />
          </Grid>
          <Grid item xs={12} md={9} lg={7}>
            <Box bgcolor="blue">
              <GridMoviePoster
                image="https://picsum.photos/200"
                showWishlistBtn={false}
              />
            </Box>
          </Grid>
          <Grid item container md={12} lg={2} spacing={0.5}>
            <Grid item xs={6} lg={12}>
              <IconCard icon="videos">13 videos</IconCard>
            </Grid>
            <Grid item xs={6} lg={12}>
              <IconCard icon="photos">13 photos</IconCard>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid
              item
              marginRight={2}
              marginTop={1}
              display={{ xs: "block", md: "none" }}
              xs={3}
            >
              <GridMoviePoster showPlayTrailerBtn={false} />
            </Grid>
            <Grid item xs={8.5} md={12} lg={8}>
              <Box flexWrap="wrap">
                {/* category component */}
                <ImdbChip>Drama</ImdbChip>
                <ImdbChip>Drama</ImdbChip>
                <ImdbChip>Drama</ImdbChip>
                <ImdbChip>Drama</ImdbChip>
              </Box>
              <Typography
                color="#fff"
                fontSize="16px"
                fontWeight="500"
                maxHeight="120px"
                marginTop={1}
              >
                After her husband leaves her, young mother of two Miriam "Midge"
                Maisel discovers that she has a talent for stand-up comedy.
                Could this be her calling?
              </Typography>
            </Grid>
            <Grid
              item
              display={{ xs: "block", lg: "none" }}
              xs={12}
              marginTop={2}
            >
              <MovieRating />
            </Grid>
            <Grid item container justifyContent={{ lg: "space-between" }}>
              <Grid item xs={8.5} md={12} lg={8}>
                <ImdbAccordion stars={stars} creator={creator} />
              </Grid>
              <Grid item md={8} display={{ xs: "none", md: "block" }}>
                <Box marginTop={2} display={{ xs: "none", lg: "block" }}>
                  <AccordionData stars={stars} creator={creator} />
                </Box>
              </Grid>
              <Grid item xs={12} lg={3.75}>
                <Stack flexDirection="row" marginTop={2}>
                  <Box marginRight="2px">
                    <StyledCardButton
                      rightBorderRadious={false}
                      bg="#3A3A3A"
                      width="244px"
                      color="#fff"
                    >
                      <AddIcon fontSize="small" />
                      Add to WatchList
                    </StyledCardButton>
                  </Box>

                  <StyledCardButton
                    leftBorderRadious={false}
                    bg="#3A3A3A"
                    width="48px"
                    color="#fff"
                  >
                    <KeyboardArrowDownIcon fontSize="small" />
                  </StyledCardButton>
                </Stack>
                <Stack marginTop={2} flexDirection="row" alignItems="center">
                  <Typography
                    fontSize="16px"
                    fontWeight="700"
                    color="info.main"
                  >
                    0.0k
                  </Typography>
                  <Typography marginLeft={1} fontSize="14px" color="info.main">
                    User reviews
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MoviePage;
