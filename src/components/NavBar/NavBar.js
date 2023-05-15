import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NavButton from "./NavButton/NavButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  SearchIconWrapper,
  StyledInputBase,
  Search,
} from "./StyledComponents/StyledComponents";
import { logoUrl, proLogo } from "./NavConstants";
// import { makeStyles } from "@mui/styles";
import navStyle from "./NavBar.module.css";

const categories = ["All", "Title", "TV Episodes"];

// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: "#212121",
//   },
// });
const NavBar = () => {
  // const classes = useStyles();
  const [category, setCategory] = useState("All");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <AppBar sx={{ backgroundColor: "#212121" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "56px",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ alignContent: "stretch", width: "80%" }}>
          <img src={logoUrl} alt="logoUrl" width={64}></img>
          <NavButton startIcon={<MenuIcon />}>Menu</NavButton>
          <Search
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              height: "36px",
              //   height: 40,
              //   background: "#ffffff",
            }}
          >
            <Select value={category} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#3A3A3A" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search IMDB"
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "100%" }}
            />
          </Search>
          <img src={proLogo} alt="logoUrl" width={64}></img>
          {/* <Divider
          orientation="vertical"
          sx={{ background: "#ffffff", width: "2px" }}
        /> */}
          <NavButton startIcon={<BookmarksOutlinedIcon />}>Watchlist</NavButton>
          <NavButton>signIn</NavButton>
          <NavButton startIcon={<ArrowDropDownIcon />}>EN</NavButton>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
