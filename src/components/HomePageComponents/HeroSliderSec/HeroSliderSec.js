import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import HeaderCard from "../../HeaderCard/HeaderCard";
import axios from "axios";

const HeroSliderSec = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdiN2RmZTA2NGQ2MzZhOWRlNWIxYmUzYWVjZjc0OCIsInN1YiI6IjY0NjBiNWY4YTY3MjU0MDBlM2QxYzhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FEW-f0nD7r9Pt2Y0z5zNp6haKVhqashRIv0aL6aU6LM",
      },
    };

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
    <Stack maxWidth={{ lg: "65%" }} width="100%">
      <Stack maxWidth={{ md: "100%", lg: "678px", xl: "848px" }}>
        <SimpleSlider
          autoplay={true}
          infinite={true}
          slidesToShow={1}
          slidesScroll={1}
          slidesOnSm={1}
          slidesOnMd={1}
          slidesOnLg={1}
          slidesOnXl={1}
          slidesScrollOnSm={1}
          slidesScrollOnMd={1}
          slidesScrollOnLg={1}
          slidesScrollOnXl={1}
          ButtonsDisplay={{ xs: "none", md: "block" }}
          buttonHeight={{ sm: "45%", md: "50%", lg: "55%", xl: "65%" }}
        >
          {list.map((item) => {
            const posterPath = item.poster_path;
            const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
            const backdropPath = item.poster_path;
            const backdropUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;
            return (
              <Stack key={item.id}>
                <HeaderCard
                  title={item.title}
                  backdropImage={backdropUrl}
                  posterImage={posterUrl}
                  key={item.id}
                />
              </Stack>
            );
          })}
        </SimpleSlider>
      </Stack>
    </Stack>
  );
};

export default HeroSliderSec;
