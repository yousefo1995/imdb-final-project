import React from "react";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const SectionsSkeleton = ({ children }) => {
  return (
    <SimpleSlider buttonHeight="60%">
      {arr.map((item) => children)}
    </SimpleSlider>
  );
};

export default SectionsSkeleton;
