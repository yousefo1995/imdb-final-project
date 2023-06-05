import React from "react";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import NewsCard from "../../NewsCard/NewsCard";
import { Stack, Box, Typography, Chip } from "@mui/material";
import Subtitle from "../../Core/Subtitle/Subtitle";
import axios from "axios";
import { useState, useEffect } from "react";

const TopNewsSection = () => {
  const [list, setList] = useState([]);
  const [newsList, setNewsList] = useState([]);

  const fetchData = async (url, setList) => {
    try {
      const res = await axios.get(url);
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const url = "https://mocki.io/v1/780394a9-d743-4441-9849-6c08596f7905";
    fetchData(url, setNewsList);
  }, []);

  useEffect(() => {
    const url = "https://mocki.io/v1/9114dcd7-2c8c-4897-851b-2b8d907de11a";

    fetchData(url, setList);
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
          infinite={true}
          buttonHeight="30%"
        >
          {newsList.map((item) => (
            <NewsCard
              title={item.title}
              source={item.source}
              image={item.image}
              date={item.date}
            />
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
