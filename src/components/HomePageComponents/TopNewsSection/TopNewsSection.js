import React from "react";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import NewsCard from "../../NewsCard/NewsCard";
import { Stack, Box, Typography, Chip } from "@mui/material";
import Subtitle from "../../Core/Subtitle/Subtitle";
import axios from "axios";
import { useState, useEffect } from "react";
import { arr } from "../Draft";

const TopNewsSection = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/e8eb5182-f591-4d42-8b9b-f265ec8aa907"
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Stack marginTop={4} marginBottom={6} maxWidth="100%">
      <Subtitle>Top News</Subtitle>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        <SimpleSlider
          slidesToShow={2.9}
          slidesScroll={3}
          slidesOnSm={1.15}
          slidesScrollOnSm={1}
          slidesOnMd={1.25}
          slidesScrollOnMd={2}
          slidesOnLg={2.15}
          slidesScrollOnLg={2}
          slidesOnXl={2.7}
          slidesScrollOnXl={3}
          buttonHeight="30%"
        >
          {arr.map((item) => (
            <NewsCard />
          ))}
        </SimpleSlider>
      </Box>
      <Stack flexDirection="row" marginTop={2}>
        {list.map((item) => (
          <Stack marginRight={1}>
            <Chip
              label={
                <Typography fontSize="0.75rem" color="#fff">
                  {item.name}
                </Typography>
              }
              variant="outlined"
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default TopNewsSection;
