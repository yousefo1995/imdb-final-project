import React, { useState } from "react";
import { Drawer, Stack, InputBase } from "@mui/material";
import { useNavigate } from "react-router";
import { Search } from "../StyledComponents/StyledComponents";
const SearchDrawer = ({ drawerOpen, toggleDrawer }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchText && navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };
  return (
    <Stack>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <Search
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
            height: "32px",
          }}
        >
          <InputBase
            value={searchText}
            placeholder="Search IMDB"
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "100%", height: "52px" }}
            onChange={handleTextChange}
            onKeyPress={handleKeyPress}
          />
        </Search>
      </Drawer>
    </Stack>
  );
};

export default SearchDrawer;
