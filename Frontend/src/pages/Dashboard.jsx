import React from "react";
import { Header, ReviewListing } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { Loader } from "../pages";

const Dashboard = () => {
  const { loading, reviewData } = useStateContext();
  return loading ? (
    <Loader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Microsoft Teams" title="Review Listings" />
      {/* <div className="flex my-10">
        <div className="grow h-14">
          <p className="">Rating Count</p>
          <p className="text-3xl mt-2">{noOfRating}</p>
          <p className="text-xs text-gray-500">Total Ratings</p>
        </div>
        <div className="grow h-14">
          <p className="">Avg Stars</p>
          <StarRating className="mt-2" value={4.1} />
          <p className="text-sm">{avgRating} Stars</p>
        </div>
      </div> */}
      <ReviewListing reviewData={reviewData} />
    </div>
  );
};

export default Dashboard;
