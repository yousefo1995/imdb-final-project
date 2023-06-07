import React, { useState, useEffect } from "react";
import { Stack, Box, Typography, Skeleton } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Title from "../../Core/Title/Title";
import Subtitle from "../../Core/Subtitle/Subtitle";
import TodayDate from "./TodayDate";
import AvatarCard from "../../AvatarCard/AvatarCard";
import axios from "axios";
import BornTodaySkeleton from "./BornTodaySkeleton";

const BornTodaySection = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://mocki.io/v1/4129a9c5-ba16-4570-a0e7-84694b62133b"
      );
      setList(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <Stack marginTop={4} width="100%">
      <Title marginBottom={2.5}>More to explore</Title>
      <Subtitle>Born today</Subtitle>
      <Stack color="#B3B3B3" marginTop={1} flexDirection="row">
        <Typography marginRight={1}>People born on</Typography>
        <Typography>{TodayDate()}</Typography>
      </Stack>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        {loading ? (
          <BornTodaySkeleton />
        ) : (
          <SimpleSlider
            slidesOnSm={2.4}
            slidesOnMd={3}
            slidesOnLg={5}
            slidesOnXl={6}
            slidesToShow={6}
            buttonHeight="50%"
          >
            {list.map((item) => (
              <AvatarCard
                loading={loading}
                image={item.image}
                name={item.name}
                age={item.age}
              />
            ))}
          </SimpleSlider>
        )}
      </Box>
    </Stack>
  );
};

export default BornTodaySection;
