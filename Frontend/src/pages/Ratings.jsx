import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import StarRating from "@pluralsight/ps-design-system-starrating";
import { Header, RatingChart } from "../components";
import { Loader } from "../pages";

const Ratings = () => {
  const { reviewData, loading } = useStateContext();
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Star Rating Analysis" title="Overview" />
        <RatingChart className="" reviewData={reviewData} />
        <div className="flex my-10">
          <div className="grow h-14">
            <p className="">Rating Count</p>
            <p className="text-3xl mt-2">4,387,215</p>
            <p className="text-xs text-gray-500">Total Ratings</p>
          </div>
          <div className="grow h-14">
            <p className="">Avg Stars</p>
            <StarRating className="mt-2" value={4.1} />
            <p className="text-sm">4.1 Stars</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
