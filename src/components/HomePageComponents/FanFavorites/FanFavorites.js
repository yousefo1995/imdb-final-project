import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Subtitle from "../../Core/Subtitle/Subtitle";
import MovieCard from "../../MovieCard/MovieCard/MovieCard";
import axios from "axios";
import { useNavigate } from "react-router";
import SectionsSkeleton from "../SectionsSkeleton/SectionsSkeleton";
import MovieCardSkeleton from "../../MovieCard/MovieCardSkeleton/MovieCardSkeleton";

const FanFavorites = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdiN2RmZTA2NGQ2MzZhOWRlNWIxYmUzYWVjZjc0OCIsInN1YiI6IjY0NjBiNWY4YTY3MjU0MDBlM2QxYzhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FEW-f0nD7r9Pt2Y0z5zNp6haKVhqashRIv0aL6aU6LM",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setList(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Stack paddingTop={2.5} marginTop={3} maxWidth="100%">
      <Subtitle minWidth="100%" onClick={() => navigate("movie-list/popular")}>
        Fan favorites
      </Subtitle>
      <Typography marginTop={1} color="#B3B3B3">
        This week's top TV and movies{" "}
      </Typography>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        {loading ? (
          <SectionsSkeleton>
            <MovieCardSkeleton />
          </SectionsSkeleton>
        ) : (
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
        )}
      </Box>
    </Stack>
  );
};

export default FanFavorites;
