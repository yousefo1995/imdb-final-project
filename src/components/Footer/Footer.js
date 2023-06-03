import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import FooterLinks from "./FooterLinks/FooterLinks";
import SocialiconButton from "./SocialiconButton/SocialiconButton";
import ImdbButton from "../Core/ImdbButton/ImdbButton";
import axios from "axios";
import { useNavigate } from "react-router";
const Footer = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate("/login");
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://run.mocky.io/v3/213253b8-9d95-4f9c-9f6a-5616ca2229d8"
      );
      setList(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      bgcolor="#000"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBottom={6}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="80%"
      >
        <Box marginTop={2}>
          <ImdbButton width="220px" onClick={navToLogin}>
            Sign in for more access
          </ImdbButton>
        </Box>
        <Box marginY={2}>
          <SocialiconButton />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          width={{ xs: "360px", md: "600px", lg: "1024px" }}
        >
          {list.map((item, i) => {
            return <FooterLinks key={i}>{item.title}</FooterLinks>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
