import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const WatchListContext = createContext();
const WatchListContextProvider = ({ children }) => {
  const storedWatchList = localStorage.getItem("watchList");

  const [watchList, setWatchList] = useState(
    storedWatchList ? JSON.parse(storedWatchList) : []
  );

  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchList");
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);
  const addToWatchList = (movieData) => {
    setWatchList((prev) => [...prev, movieData]);
  };

  const deleteFromWatchList = (movieId) => {
    setWatchList((prev) => prev.filter((movie) => movie.id != movieId));
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, setWatchList, addToWatchList, deleteFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
