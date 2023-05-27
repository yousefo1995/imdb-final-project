import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar/NavBar";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoutes isLogged={true} to="/" />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route path="movie" element={<MoviePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route element={<PrivateRoutes isLogged={false} to="/login" />}>
          <Route path="wlist" element={<WatchlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
