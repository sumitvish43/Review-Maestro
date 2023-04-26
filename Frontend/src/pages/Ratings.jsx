import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { AvgStar, Header, RatingChart, PageLoader } from "../components";

const Ratings = () => {
  const { loading, reviewCount, avgRating } = useStateContext();

  return loading ? (
    <PageLoader />
  ) : (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Star Rating Analysis" title="Overview" />
        <RatingChart />
        <div className="flex my-10">
          <div className="grow h-14">
            <p className="">Rating Count</p>
            <p className="text-3xl mt-2">{reviewCount}</p>
            <p className="text-xs text-gray-500">Total Ratings</p>
          </div>
          <div className="grow h-14">
            <p className="my-4">Avg Stars</p>
            <AvgStar />
            <p className="text-sm">{avgRating} Stars</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
