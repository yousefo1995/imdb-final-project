import React, { useState, useContext } from "react";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import WatchListCard from "../components/WatchListPageComponents/WatchListCard/WatchListCard";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { clearBtn, dividerStyles } from "./style/WatchListstyles";
import SortBySelect from "../components/WatchListPageComponents/SortBySelect/SortBySelect";
import { WatchListContext } from "../WatchListContext";

const WatchListPage = () => {
  const [showGrid, setShowGrid] = useState(false);
  const { watchList, setWatchList, deleteFromWatchList } =
    useContext(WatchListContext);
  const [sortBy, setSortBy] = useState("");
  const [ascendingToggle, setAscendingToggle] = useState(true);
  const [editToggle, setEditToggle] = useState(false);
  const sortedWatchList = [...watchList];

  const handelGridCards = () => {
    setShowGrid(!showGrid);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };
  const handleAscendingToggle = () => setAscendingToggle(!ascendingToggle);
  const handleEditToggle = () => setEditToggle(!editToggle);
  if (sortBy === "release-date") {
    sortedWatchList.sort((a, b) => {
      return ascendingToggle
        ? new Date(a.release_date) - new Date(b.release_date)
        : new Date(b.release_date) - new Date(a.release_date);
    });
  } else if (sortBy === "rating") {
    sortedWatchList.sort((a, b) => {
      return ascendingToggle
        ? a.vote_average - b.vote_average
        : b.vote_average - a.vote_average;
    });
  } else {
    ascendingToggle && sortedWatchList.reverse();
  }

  const handleClear = () => {
    setWatchList([]);
    localStorage.setItem("watchList", JSON.stringify([]));
  };
  const handleDeleteItem = (movieId) => {
    deleteFromWatchList(movieId);
  };

  return (
    <Stack bgcolor="#B3B3B3" alignItems="center">
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignItems="center"
      >
        <Stack
          flexDirection={{ xs: "column", lg: "row" }}
          width="100%"
          minHeight="100vh"
        >
          <Stack
            width={{ xs: "100%", lg: "625px", xl: "800px" }}
            paddingTop={3}
            boxSizing="border-box"
            borderRight="3px solid #999"
            bgcolor="#F0F0F0"
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              paddingX={2.5}
              paddingBottom={2.5}
            >
              <Stack>
                <Typography fontSize="28px" fontWeight="400" color="#424242">
                  Your Watchlist
                </Typography>
                <Typography
                  letterSpacing={0.5}
                  fontSize="12px"
                  fontWeight="700"
                  color="#AAAAAA"
                >
                  <LockRoundedIcon fontSize="12px" />
                  PRIVATE
                </Typography>
              </Stack>
              <Stack
                width="16%"
                flexDirection="row"
                justifyContent="space-between"
                color="#5A5A5A"
              >
                <Stack alignItems="center">
                  <IconButton onClick={handleEditToggle}>
                    <EditRoundedIcon />
                  </IconButton>
                  <Typography fontWeight="400" fontSize="13px">
                    EDIT
                  </Typography>
                </Stack>
                <Stack alignItems="center">
                  <IconButton disabled>
                    <ShareRoundedIcon />{" "}
                  </IconButton>
                  <Typography fontWeight="400" fontSize="13px">
                    SHARE
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider orientation="horizontal" flexItem sx={dividerStyles} />
            <Stack
              flexDirection={{ xs: "column", sm: "row" }}
              color="#5A5A5A"
              justifyContent="space-between"
              alignItems="center"
              paddingX={2.5}
              paddingY={1}
            >
              <Stack>
                <Typography fontSize="13px" fontWeight="400">
                  {watchList.length} Titles
                </Typography>
              </Stack>
              <Stack flexDirection="row" alignItems="center">
                <SortBySelect
                  handleSortChange={handleSortChange}
                  setAscendingToggle={setAscendingToggle}
                />
                <IconButton onClick={handleAscendingToggle}>
                  <ImportExportIcon />
                </IconButton>
                <IconButton onClick={handelGridCards}>
                  <AppsRoundedIcon />
                </IconButton>
                <Button variant="outlined" sx={clearBtn} onClick={handleClear}>
                  Clear
                </Button>
              </Stack>
            </Stack>
            <Divider orientation="horizontal" flexItem sx={dividerStyles} />
            <Stack
              flexDirection={showGrid && "row"} // grid
              flexWrap="wrap" // grid
              justifyContent={showGrid && "center"}
              paddingX={2.5}
              bgcolor="#fff"
            >
              {sortedWatchList.map((movie) => (
                <Stack
                  flexDirection={
                    showGrid ? "column" : { xs: "column", sm: "row" }
                  }
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <WatchListCard
                    movieId={movie.id}
                    movieTitle={movie.title}
                    showGrid={showGrid}
                    year={movie.release_date}
                    language={movie.original_language}
                    popularty={movie.popularity}
                    rate={movie.vote_average}
                    description={movie.overview}
                    image={movie.poster_path}
                  />
                  <Stack display={editToggle || "none"}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleDeleteItem(movie.id)}
                    >
                      delete
                    </Button>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack
            bgcolor="#F0F0F0"
            width={{ xs: "100%", lg: "338px", xl: "388px" }}
            color="#333333"
            alignItems="flex-start"
            paddingX={2.5}
            paddingTop={3}
          >
            <Typography fontSize="18px" fontWeight="400">
              Create a new list
            </Typography>
            <Typography fontSize="13px" fontWeight="700">
              List your movie, TV & celebrity picks.{" "}
            </Typography>{" "}
            <Stack flexDirection="row" alignItems="center">
              <Button color="info" variant="text">
                <Typography
                  textTransform="none"
                  fontSize="13px"
                  fontWeight="500"
                >
                  Create a new list
                </Typography>
              </Button>
              <Typography fontSize="13px" fontWeight="400">
                {">>"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WatchListPage;
