import React from "react";

const TodayDate = () => {
  const currentDate = new Date();
  const options = { day: "numeric", month: "long" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return <div>{formattedDate}</div>;
};

export default TodayDate;
