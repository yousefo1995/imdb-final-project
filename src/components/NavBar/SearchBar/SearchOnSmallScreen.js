import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchDrawer from "./SearchDrawer";
const SearchOnSmallScreen = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Stack
      alignItems="center"
      display={{ xs: "content", md: "none" }}
      width="100%"
      flexDirection="row"
      justifyContent="flex-end"
      marginRight={2}
    >
      <IconButton onClick={toggleDrawer}>
        <SearchIcon color="secondary" />
      </IconButton>
      <SearchDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </Stack>
  );
};

export default SearchOnSmallScreen;
