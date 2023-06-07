import React from "react";
import { AppBar, Stack, Typography } from "@mui/material";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import NavButton from "./NavButton/NavButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { StyledToolBar } from "./StyledComponents/StyledComponents";
import { logoUrl, proLogo } from "./NavConstants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import UserMenu from "./UserMenu/UserMenu";
import "./style.css";
import Menu from "./Menu/Menu";
import SearchOnBigScreen from "./SearchBar/SearchOnBigScreen";
import { WatchListContext } from "../../WatchListContext";
import SearchOnSmallScreen from "./SearchBar/SearchOnSmallScreen";

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { watchList } = useContext(WatchListContext);

  return (
    <AppBar sx={{ position: "static", alignItems: "center" }}>
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignItems="center"
        paddingX={0}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          height="56px"
          width="100%"
        >
          <StyledToolBar>
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
              <Menu />
              <Stack
                marginLeft={1}
                marginRight={1}
                display={{ xs: "block", lg: "none" }}
              >
                <img
                  onClick={() => navigate("/")}
                  src={logoUrl}
                  alt="logoUrl"
                  width={64}
                  className="Nav-logo"
                ></img>
              </Stack>
            </Stack>

            <SearchOnBigScreen />
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
                  Watchlist{" "}
                  {currentUser && watchList.length !== 0 && (
                    <Typography
                      border="solid"
                      borderRadius="40px"
                      borderColor="secondary.main"
                      bgcolor="secondary.main"
                      fontSize="11px"
                      color="#000"
                      marginLeft={0.5}
                      paddingX={0.5}
                    >
                      {watchList.length}
                    </Typography>
                  )}
                </NavButton>
              </Stack>
              <Stack
                flexDirection="row"
                alignItems="center"
                display={{ xs: "none", lg: "contents" }}
              >
                {currentUser ? (
                  <Stack
                    display={{ xs: "none", lg: "contents" }}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <UserMenu />
                  </Stack>
                ) : (
                  <NavButton onClick={() => navigate("/login")}>
                    Sign In
                  </NavButton>
                )}
              </Stack>

              <Stack
                display={{ xs: "none", lg: "contents" }}
                flexDirection="row"
                alignItems="center"
              >
                <NavButton
                  disabled
                  endIcon={<ArrowDropDownIcon color="secondary" />}
                >
                  EN
                </NavButton>
              </Stack>
            </Stack>
            <SearchOnSmallScreen />
          </StyledToolBar>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
