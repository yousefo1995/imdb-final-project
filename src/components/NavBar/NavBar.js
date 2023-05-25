import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  Select,
  MenuItem,
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
import { logoUrl, proLogo } from "./NavConstants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import UserMenu from "./UserMenu/UserMenu";
import "./style.css";

const categories = ["All", "Title", "TV Episodes"];

const NavBar = () => {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <AppBar sx={{ position: "static" }}>
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
            <Stack display={{ xs: "none", lg: "contents" }}>
              <img
                src={logoUrl}
                alt="logoUrl"
                width={64}
                onClick={() => navigate("/")}
                className="Nav-logo"
              ></img>
            </Stack>
            <NavButton disabled>
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
              <img
                onClick={() => navigate("/")}
                src={logoUrl}
                alt="logoUrl"
                width={64}
                className="Nav-logo"
              ></img>
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
              display={{ xs: "none", lg: "contents" }}
              flexDirection="row"
              alignItems="center"
            >
              <img src={proLogo} alt="logoUrl" width={64}></img>
            </Stack>
            <Stack
              display={{ xs: "none", lg: "contents" }}
              flexDirection="row"
              alignItems="center"
            >
              <NavButton onClick={() => navigate("/wlist")}>
                <BookmarksOutlinedIcon
                  sx={{ marginRight: "4px" }}
                  color="#fff"
                />
                Watchlist
              </NavButton>
            </Stack>
            <Stack flexDirection="row" alignItems="center">
              {currentUser ? (
                <UserMenu />
              ) : (
                <NavButton onClick={() => navigate("/login")}>
                  Sign In
                </NavButton>
              )}
            </Stack>

            <NavButton
              disabled
              endIcon={<ArrowDropDownIcon color="secondary" />}
            >
              EN
            </NavButton>
          </Stack>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
