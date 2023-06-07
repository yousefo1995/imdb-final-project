import React, { useState } from "react";
import ListPage from "../components/ExtraPagesComponents/ListPage";
import { useParams } from "react-router";
const MovieList = () => {
  // urlPath = "top_rated" || popular
  const { urlPath } = useParams();
  let pageTitle = "";
  if (urlPath === "top_rated") {
    pageTitle = "Top Rated movies";
  } else if (urlPath === "popular") {
    pageTitle = "Fan Favourite movies";
  }
  return (
    <div>
      <ListPage urlPath={urlPath} pageTitle={pageTitle} />
    </div>
  );
};

export default MovieList;
