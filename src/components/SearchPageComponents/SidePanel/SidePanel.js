import { Chip, Stack, Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const SidePanel = ({ searchText }) => {
  const [list, setList] = useState([]);
  const [listAdv, setListAdv] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/41870d6a-bc1f-41f3-a851-67ec27058c03"
        );
        setList(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/b5ff322d-dabb-409e-9318-0e44742f18fb"
        );
        setListAdv(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <Stack paddingX={2}>
      <Typography
        borderLeft="5px solid "
        borderColor="secondary.main"
        paddingLeft={1}
        fontSize="32px"
        color="#000"
      >
        More results
      </Typography>
      <Typography color="#757575" variant="body1" paddingTop={1}>
        Search "{searchText}" within...
      </Typography>
      <Box display="flex" flexWrap="wrap" marginTop={3}>
        {list.map((item) => (
          <Stack marginRight={1} marginTop={1}>
            <Chip
              label={
                <Typography fontWeight="400" fontSize="0.875rem" color="#000">
                  {item.name}
                </Typography>
              }
              variant="outlined"
            />
          </Stack>
        ))}
      </Box>
      <Typography
        borderLeft="5px solid "
        borderColor="secondary.main"
        paddingLeft={1}
        width="100%"
        marginTop={6}
        fontSize="32px"
        color="#000"
      >
        Advanced search
      </Typography>
      <Typography color="#757575" variant="body1" paddingTop={1}>
        Create a more specific search using a variety of options and filterss
      </Typography>
      <Box display="flex" flexWrap="wrap" marginTop={3}>
        {listAdv.map((item) => (
          <Stack marginRight={1} marginTop={1}>
            <Chip
              label={
                <Typography fontWeight="400" fontSize="0.875rem" color="#000">
                  {item.name}
                </Typography>
              }
              variant="outlined"
            />
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default SidePanel;
