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
  Stack,
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
import StyledCardButton from "../MovieCard/StyledCardButton/StyledCardButton";

import { logoUrl, proLogo } from "./NavConstants";
// import { makeStyles } from "@mui/styles";

const categories = ["All", "Title", "TV Episodes"];

// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: "#121212",
//   },
// });
const NavBar = () => {
  // const classes = useStyles();
  const [category, setCategory] = useState("All");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <AppBar sx={{ backgroundColor: "#121212", position: "static" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "56px",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ alignContent: "stretch", width: "80%", height: "36px" }}>
          <Stack flexDirection="row" height="32px">
            <img src={logoUrl} alt="logoUrl" width={64}></img>
            <NavButton>
              <MenuIcon sx={{ marginRight: "4px" }} color="#fff" />
              Menu
            </NavButton>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            width="100%"

            // justifyContent="center"
            // margin={0}
            // padding={0}
          >
            <Select
              IconComponent="none"
              sx={{
                height: "32px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                //   height: 40,
                //   background: "#ffffff",
                backgroundColor: "#fff",
                marginLeft: "4px", //  ???????????????????/
                ":active": { border: "none" },
              }}
              value={category}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
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
                //   height: 40,
                //   background: "#ffffff",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#3A3A3A" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search IMDB"
                inputProps={{ "aria-label": "search" }}
                sx={{ width: "100%" }}
              />
            </Search>
          </Stack>
          <Stack flexDirection="row" height="32px">
            <img src={proLogo} alt="logoUrl" width={64}></img>
            <Divider
              orientation="vertical"
              sx={{
                marginLeft: "24px",
                marginRight: "8px",
                borderColor: "#383838",
              }}
            />

            <NavButton>
              <BookmarksOutlinedIcon sx={{ marginRight: "4px" }} color="#fff" />
              Watchlist
            </NavButton>

            <NavButton>Sign In</NavButton>

            <NavButton endIcon={<ArrowDropDownIcon />}>EN</NavButton>
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
