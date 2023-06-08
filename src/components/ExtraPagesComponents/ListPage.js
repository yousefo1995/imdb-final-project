import React, { useEffect, useState } from "react";
import { Stack, Typography, Pagination } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard/MovieCard";
import { paginationStyles } from "./styles";
import axios from "axios";

const ListPage = ({ urlPath, pageTitle }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${urlPath}`,
    params: { language: "en-US", page: page },
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
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page, urlPath]);

  const movieList = data.results;
  // wrong total pages in data xxxxxxxxxxxxx
  //   const totalPagesNumber = data.total_pages;
  //   const numberOfPages = Math.floor(totalPagesNumber / 2);
  const numberOfPages = urlPath === "upcoming" ? 11 : 500;
  return (
    <Stack
      bgcolor="#000"
      alignItems="center"
      minHeight="100vh"
      borderBottom="1px solid #212121"
    >
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignContent="center"
        alignItems="center"
        marginTop={2}
        marginBottom={2}
        borderRadius="4px"
        bgcolor="#212121"
      >
        <Typography
          marginTop={5}
          variant="h3"
          color="#fff"
          borderBottom="4px solid"
          borderColor="secondary.main"
        >
          What to Watch - IMDb
        </Typography>
        <Typography
          marginY={2}
          variant="h1"
          borderBottom="1px solid"
          color="secondary.main"
        >
          {pageTitle}
        </Typography>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          marginBottom={6}
        >
          {movieList &&
            movieList.map((item) => {
              const imagePath = item.poster_path;
              const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
              return (
                <Stack key={item.id} marginY={2} marginX={1.25}>
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
        </Stack>

        <Stack marginY={2}>
          <Pagination
            count={numberOfPages}
            // variant="text"
            // shape="rounded"
            page={page}
            onChange={handleChange}
            sx={paginationStyles}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ListPage;
