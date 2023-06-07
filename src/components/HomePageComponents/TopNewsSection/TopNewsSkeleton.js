import React from "react";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import NewsCardSkeleton from "../../NewsCard/NewsCardSkeleton";
const arr = [1, 2, 3, 4, 5];
const TopNewsSkeleton = () => {
  return (
    <SimpleSlider
      slidesToShow={2.9}
      slidesScroll={3}
      slidesOnSm={1.15}
      slidesScrollOnSm={1}
      slidesOnMd={1.25}
      slidesScrollOnMd={2}
      slidesOnLg={2.15}
      slidesScrollOnLg={2}
      slidesOnXl={2.7}
      slidesScrollOnXl={3}
      infinite={true}
      buttonHeight="30%"
    >
      {arr.map((item) => (
        <NewsCardSkeleton />
      ))}
    </SimpleSlider>
  );
};

export default TopNewsSkeleton;
