import { Stack } from "@mui/material";
import React from "react";
import TopNewsSection from "../components/HomePageComponents/TopNewsSection/TopNewsSection";
import BornTodaySection from "../components/HomePageComponents/BornTodaySection/BornTodaySection";
import FanFavorites from "../components/HomePageComponents/FanFavorites/FanFavorites";
import FromYourWishlistSec from "../components/HomePageComponents/FromYourWishlistSec/FromYourWishlistSec";
import TopPicksSec from "../components/HomePageComponents/TopPicksSec/TopPicksSec";
import HeroSliderSec from "../components/HomePageComponents/HeroSliderSec/HeroSliderSec";
import TrailersSec from "../components/HomePageComponents/TrailersSec/TrailersSec";
import FromYourWishlistEmptyList from "../components/HomePageComponents/FromYourWishlistSec/FromYourWishlistEmptyList";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { WatchListContext } from "../WatchListContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  const { watchList } = useContext(WatchListContext);

  return (
    <Stack bgcolor="#000" alignItems="center">
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignItems="center"
        paddingTop={2}
      >
        {/* max width effect the trailer section between 1025 and 1150 */}
        <Stack flexDirection="row" width="100%">
          <HeroSliderSec />
          <TrailersSec />
        </Stack>
        <TopPicksSec />
        {currentUser ? (
          watchList.length === 0 ? (
            <FromYourWishlistEmptyList isLogged={true} />
          ) : (
            <FromYourWishlistSec />
          )
        ) : (
          <FromYourWishlistEmptyList />
        )}

        <FanFavorites />
        <BornTodaySection />
        <TopNewsSection />
      </Stack>
    </Stack>
  );
};

export default HomePage;
