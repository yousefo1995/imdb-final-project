import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Title from "../../Core/Title/Title";
import Subtitle from "../../Core/Subtitle/Subtitle";
import MovieCard from "../../MovieCard/MovieCard/MovieCard";
import axios from "axios";

const TopPicksSec = () => {
  const [list, setList] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdiN2RmZTA2NGQ2MzZhOWRlNWIxYmUzYWVjZjc0OCIsInN1YiI6IjY0NjBiNWY4YTY3MjU0MDBlM2QxYzhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FEW-f0nD7r9Pt2Y0z5zNp6haKVhqashRIv0aL6aU6LM",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Stack marginTop={6} maxWidth="100%">
      <Title marginBottom={2.5}>What to watch</Title>
      <Subtitle>Top picks</Subtitle>
      <Typography marginTop={1} color="#B3B3B3">
        TV shows and movies just for you
      </Typography>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        <SimpleSlider buttonHeight="60%">
          {list.map((item) => {
            const imagePath = item.poster_path;
            const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
            return (
              <Stack key={item.id}>
                <MovieCard
                  title={item.title}
                  rate={item.vote_average}
                  image={imageUrl}
                  movieId={item.id}
                  movieData={item}
                />
              </Stack>
            );
          })}
        </SimpleSlider>
      </Box>
    </Stack>
  );
};

export default TopPicksSec;
