import React, { useEffect, useState, useContext } from "react";
import IconCard from "../components/MovieDetailsPageComponents/IconCard/IconCard";
import { Grid, Typography, Box, Stack } from "@mui/material";
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
import axios from "axios";
import { useParams } from "react-router";
import { WatchListContext } from "../WatchListContext";
const MoviePage = ({ creator = "creator name", stars = "stars names" }) => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [isplayed, setIsplayed] = useState(false);
  const { addToWatchList } = useContext(WatchListContext);

  const watchListHandler = (movieData) => {
    addToWatchList(movieData);
  };
  const getData = (url, state) => {
    const options = {
      method: "GET",
      url: url,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdiN2RmZTA2NGQ2MzZhOWRlNWIxYmUzYWVjZjc0OCIsInN1YiI6IjY0NjBiNWY4YTY3MjU0MDBlM2QxYzhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FEW-f0nD7r9Pt2Y0z5zNp6haKVhqashRIv0aL6aU6LM",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        state(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const dataUrlApi = `https://api.themoviedb.org/3/movie/${movieId}`;
  const videoUrlApi = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  useEffect(() => {
    getData(dataUrlApi, setData);
    getData(videoUrlApi, setVideoData);
  }, []);

  const trailersVideoData = videoData.results?.find(
    (video) => video.type === "Trailer"
  );

  const imageUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;

  const videoKey = videoData.length !== 0 ? trailersVideoData?.key : null;
  const videoNum = videoData.length !== 0 ? videoData.results.length : null;
  const videoUrl = `https://www.youtube.com/embed/${videoKey}`;
  return (
    <Stack className="gradiant" alignItems="center">
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignItems="center"
        paddingTop={2}
      >
        <MoviePageHeadInfo
          duration={data.runtime}
          MovieName={data.title}
          releaseDate={data.release_date}
          language={data.original_language}
          rate={data.vote_average}
          numberOfRates={data.vote_count}
          popularity={data.popularity}
        />
        <Grid container spacing={1}>
          <Grid item display={{ xs: "none", md: "block" }} lg={2.7} md={3.3}>
            <GridMoviePoster
              showPlayTrailerBtn={false}
              watchListHandler={watchListHandler}
              data={data}
              image={imageUrl}
              alt={data.title}
              component="img"
              responsiveHeight={{ md: "320px", lg: "334px", xl: "416px" }}
            />
          </Grid>
          <Grid item height="" xs={12} md={8.55} lg={7}>
            <Box height="inherit" bgcolor="green">
              {!isplayed ? (
                <GridMoviePoster
                  showWishlistBtn={false}
                  watchListHandler={watchListHandler}
                  data={data}
                  image={posterUrl}
                  alt={data.title}
                  component="img"
                  responsiveHeight={{ md: "320px", lg: "334px", xl: "416px" }}
                  onClick={() => setIsplayed(true)}
                />
              ) : (
                <GridMoviePoster
                  imagePath={data.backdrop_path}
                  showPlayTrailerBtn={false}
                  showWishlistBtn={false}
                  component="iframe"
                  src={videoUrl}
                  // allow="autoPlay" // not working well also added ?autoplay=1 to url ******************************
                  responsiveHeight={{
                    xs: "320px",
                    md: "320px",
                    lg: "334px",
                    xl: "416px",
                  }}
                />
              )}
            </Box>
          </Grid>
          <Grid item container md={12} lg={2.25} spacing={0.5}>
            <Grid item xs={6} lg={12}>
              <IconCard icon="videos">{videoNum} videos</IconCard>
            </Grid>
            <Grid item xs={6} lg={12}>
              <IconCard icon="photos">photos</IconCard>
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
              <GridMoviePoster
                image={imageUrl}
                alt={data.title}
                component="img"
                data={data}
                showPlayTrailerBtn={false}
                watchListHandler={watchListHandler}
              />
            </Grid>
            <Grid item xs={8.5} md={12} lg={8}>
              <Box flexWrap="wrap">
                {data.genres &&
                  data.genres.map((item) => <ImdbChip>{item.name}</ImdbChip>)}
              </Box>
              <Typography
                color="#fff"
                fontSize="16px"
                fontWeight="500"
                maxHeight="120px"
                marginTop={1}
                overflow="hidden"
              >
                {data.overview}
              </Typography>
            </Grid>
            <Grid
              item
              display={{ xs: "block", lg: "none" }}
              xs={12}
              marginTop={2}
            >
              <MovieRating
                rate={data.vote_average}
                numberOfRates={data.vote_count}
                popularity={data.popularity}
              />
            </Grid>
            <Grid item container justifyContent={{ lg: "space-between" }}>
              <Grid item xs={8.5} md={12} lg={8}>
                <ImdbAccordion
                  stars={data.production_countries}
                  creator={data.production_companies}
                />
              </Grid>
              <Grid item md={8} display={{ xs: "none", md: "block" }}>
                <Box marginTop={2} display={{ xs: "none", lg: "block" }}>
                  <AccordionData
                    stars={data.production_countries}
                    creator={data.production_companies}
                  />
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
                      onClick={() => watchListHandler(data)}
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
                    {data.vote_count}
                  </Typography>
                  <Typography marginLeft={1} fontSize="14px" color="info.main">
                    User reviews
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default MoviePage;
