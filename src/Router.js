import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import WatchListPage from "./pages/WatchlistPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoutes from "./PrivateRoutes";
import NotFoundPage from "./pages/NotFoundPage";

import NavAndFooterLayout from "./NavAndFooterLayout";
import MovieList from "./pages/MovieList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NavAndFooterLayout>
              <HomePage />
            </NavAndFooterLayout>
          }
        />
        <Route element={<PrivateRoutes isLogged={true} to="/" />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route
          path="movie/:movieId"
          element={
            <NavAndFooterLayout>
              <MoviePage />
            </NavAndFooterLayout>
          }
        />
        <Route
          path="search/:searchText"
          element={
            <NavAndFooterLayout>
              <SearchPage />
            </NavAndFooterLayout>
          }
        />
        <Route element={<PrivateRoutes isLogged={false} to="/login" />}>
          <Route
            path="wlist"
            element={
              <NavAndFooterLayout>
                <WatchListPage />
              </NavAndFooterLayout>
            }
          />
        </Route>
        <Route
          path="movie-list/:urlPath"
          element={
            <NavAndFooterLayout>
              <MovieList />
            </NavAndFooterLayout>
          }
        />

        <Route
          path="*"
          element={
            <NavAndFooterLayout>
              <NotFoundPage />
            </NavAndFooterLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
