import React from "react";
import AvatarCardSkeleton from "../../AvatarCard/AvatarCardSkeleton";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
const arr = [1, 2, 3, 4, 5, 6, 7];
const BornTodaySkeleton = () => {
  return (
    <SimpleSlider
      slidesOnSm={2.4}
      slidesOnMd={3}
      slidesOnLg={5}
      slidesOnXl={6}
      slidesToShow={6}
      buttonHeight="50%"
    >
      {arr.map((item) => (
        <AvatarCardSkeleton />
      ))}
    </SimpleSlider>
  );
};

export default BornTodaySkeleton;
