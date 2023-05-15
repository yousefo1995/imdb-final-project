import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import FooterLinks from "./FooterLinks/FooterLinks";
import SocialiconButton from "./SocialiconButton/SocialiconButton";

import axios from "axios";
import { Container } from "@mui/system";
const Footer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/213253b8-9d95-4f9c-9f6a-5616ca2229d8"
        );
        setList(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <Box
      bgcolor="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="80%"
      >
        <Box>
          <Button size="large" variant="contained" color="secondary">
            Sign in for more access
          </Button>
        </Box>
        <Box>
          <SocialiconButton />
        </Box>

        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {list.map((item, i) => {
            return <FooterLinks key={i}>{item.title}</FooterLinks>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
