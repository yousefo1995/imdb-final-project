import { Stack } from "@mui/material";
import React from "react";
import TopNewsSection from "../components/HomePageComponents/TopNewsSection/TopNewsSection";
import BornTodaySection from "../components/HomePageComponents/BornTodaySection/BornTodaySection";
import FanFavorites from "../components/HomePageComponents/FanFavorites/FanFavorites";
import FromYourWishlistSec from "../components/HomePageComponents/FromYourWishlistSec/FromYourWishlistSec";
import TopPicksSec from "../components/HomePageComponents/TopPicksSec/TopPicksSec";
import HeroSliderSec from "../components/HomePageComponents/HeroSliderSec/HeroSliderSec";
import TrailersSec from "../components/HomePageComponents/TrailersSec/TrailersSec";
import FromYourWishlistForNotLogin from "../components/HomePageComponents/FromYourWishlistSec/FromYourWishlistForNotLogin";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Stack
      paddingLeft={{ xxl: "5.5%", xl: "3.5%", lg: "10%", md: "1%" }}
      paddingRight={{ xxl: "5.5%", xl: "3.5%", lg: "10%", md: "1%" }}
      bgcolor="#000"
      alignItems="center"
      paddingTop={2}
    >
      {/* max width effect the trailer section between 1025 and 1150 */}
      <Stack flexDirection="row" maxWidth="100%">
        <HeroSliderSec />
        <TrailersSec />
      </Stack>
      <TopPicksSec />
      {currentUser ? <FromYourWishlistSec /> : <FromYourWishlistForNotLogin />}

      <FanFavorites />
      <BornTodaySection />
      <TopNewsSection />
    </Stack>
  );
};

export default HomePage;
