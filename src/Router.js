import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="movie" element={<MoviePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="wlist" element={<WatchlistPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
