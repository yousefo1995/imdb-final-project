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
  Container,
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
import { display } from "@mui/system";

const categories = ["All", "Title", "TV Episodes"];

const NavBar = () => {
  // const classes = useStyles();
  const [category, setCategory] = useState("All");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <AppBar>
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="56px"
        paddingLeft={{ md: "0", lg: "4.5rem", xl: "0" }}
        paddingRight={{ md: "0", lg: "4.5rem", xl: "0" }}
      >
        <Toolbar
          sx={{
            maxWidth: "xl",
            alignContent: "stretch",
            width: "100%",
            height: "36px",
          }}
        >
          <Stack flexDirection="row" height="32px">
            <Stack display={{ xs: "none", lg: "block" }}>
              <img src={logoUrl} alt="logoUrl" width={64}></img>
            </Stack>
            <NavButton>
              <MenuIcon color="#fff" />
              <Typography
                marginLeft={0.5}
                display={{ xs: "none", lg: "block" }}
                variant="button"
                textTransform="none"
              >
                Menu
              </Typography>
            </NavButton>
            <Stack marginRight={1} display={{ xs: "block", lg: "none" }}>
              <img src={logoUrl} alt="logoUrl" width={64}></img>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" width="100%">
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
            <Stack
              display={{ xs: "none", lg: "block" }}
              flexDirection="row"
              alignItems="center"
            >
              <img src={proLogo} alt="logoUrl" width={64}></img>
              {/* <Divider
                orientation="vertical"
                sx={{
                  // marginLeft: "24px",
                  // marginRight: "8px",
                  borderColor: "#383838",
                  height: "100%",
                }}
              /> */}
            </Stack>
            <Stack
              display={{ xs: "none", lg: "contents" }}
              flexDirection="row"
              alignItems="center"
            >
              <NavButton>
                <BookmarksOutlinedIcon
                  sx={{ marginRight: "4px" }}
                  color="#fff"
                />
                Watchlist
              </NavButton>
            </Stack>

            <NavButton>Sign In</NavButton>

            <NavButton endIcon={<ArrowDropDownIcon />}>EN</NavButton>
          </Stack>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
