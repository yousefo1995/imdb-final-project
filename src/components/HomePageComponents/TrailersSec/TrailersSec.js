import React, { useState, useEffect } from "react";
import { Stack, Skeleton } from "@mui/material";
import Subtitle from "../../Core/Subtitle/Subtitle";
import Title from "../../Core/Title/Title";
import TrailerCard from "../../TrailerCard/TrailerCard";
import TrailerCardSkeleton from "../../TrailerCard/TrailerCardSkeleton";
import axios from "axios";
const TrailersSec = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
    params: { language: "en-US", page: "2" },
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
        const NewList = response.data.results.slice(5, 8);
        setList(NewList);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <Stack marginTop={1} paddingLeft={2} display={{ xs: "none", lg: "block" }}>
      <Title marginBottom={3} fontSize="20px">
        Up next
      </Title>

      {loading ? (
        <Stack spacing={0.5}>
          <TrailerCardSkeleton />
          <TrailerCardSkeleton />
          <TrailerCardSkeleton />
        </Stack>
      ) : (
        list.map((item) => {
          const imagePath = item.poster_path;
          const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
          return (
            <Stack key={item.id}>
              <TrailerCard
                title={item.title}
                image={imageUrl}
                description={item.overview}
                key={item.id}
              />
            </Stack>
          );
        })
      )}
      <Subtitle showStartIcon={false} marginTop={2} minWidth="100%">
        Browse trailers
      </Subtitle>
    </Stack>
  );
};

export default TrailersSec;
