import React from "react";
import { Select, MenuItem, Stack } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  StyledInputBase,
  Search,
} from "../StyledComponents/StyledComponents";
import "../style.css";
import { categories } from "../NavConstants";
import { useNavigate } from "react-router";

const SearchOnBigScreen = () => {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
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
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      display={{ xs: "none", md: "contents" }}
    >
      <Select
        IconComponent="none"
        sx={{
          height: "32px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
          backgroundColor: "#fff",
          marginLeft: "4px",
          ":active": { border: "none" },
        }}
        value={category}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <MenuItem disabled key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <Search
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flex: 1,
          height: "32px",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#3A3A3A" }} />
        </SearchIconWrapper>
        <StyledInputBase
          value={searchText}
          placeholder="Search IMDB"
          inputProps={{ "aria-label": "search" }}
          sx={{ width: "100%" }}
          onChange={handleTextChange}
          onKeyPress={handleKeyPress}
        />
      </Search>
    </Stack>
  );
};

export default SearchOnBigScreen;
