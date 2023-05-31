import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import WatchListPage from "./pages/WatchListPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar/NavBar";
import PrivateRoutes from "./PrivateRoutes";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route path="search/:searchText" element={<SearchPage />} />
        {/* <Route path="search/*" element={<h1>no search text</h1>} /> */}
        <Route element={<PrivateRoutes isLogged={false} to="/login" />}>
          <Route path="wlist" element={<WatchListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
