import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import StarRating from "@pluralsight/ps-design-system-starrating";
import { Header, RatingChart } from "../components";
import { Loader } from "../pages";

const Ratings = () => {
  const [avgRating, setAvgRating] = useState(0);
  const [noOfRating, setNoOfRating] = useState(0);
  const { reviewData, loading } = useStateContext();

  const getAvgRating = (num) => {
    setAvgRating(num);
  };
  const getNoOfRating = (num) => {
    setNoOfRating(num);
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Star Rating Analysis" title="Overview" />
        <RatingChart
          className=""
          reviewData={reviewData}
          setAvgRating={getAvgRating}
          setNoOfRating={getNoOfRating}
        />
        <div className="flex my-10">
          <div className="grow h-14">
            <p className="">Rating Count</p>
            <p className="text-3xl mt-2">{noOfRating}</p>
            <p className="text-xs text-gray-500">Total Ratings</p>
          </div>
          <div className="grow h-14">
            <p className="">Avg Stars</p>
            <StarRating className="mt-2" value={avgRating} />
            <p className="text-sm">{avgRating} Stars</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
