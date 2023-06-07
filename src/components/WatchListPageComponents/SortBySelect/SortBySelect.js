import { Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./style.css";

const SortBySelect = ({ handleSortChange, setAscending }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    handleSortChange(value);
  };
  return (
    <Stack flexDirection="row">
      <Typography
        marginRight={0.5}
        fontSize="13px"
        fontWeight="400"
        color="#5A5A5A"
      >
        Sort by:
      </Typography>
      <select
        id="sort-select"
        value={selectedValue}
        onChange={handleSelectChange}
        className="sortSelector"
      >
        <option value="">List Order</option>
        <option value="release-date">Release Date</option>
        <option value="rating">IMDB Rating</option>
      </select>
    </Stack>
  );
};

export default SortBySelect;
