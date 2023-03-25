import React from "react";
import {
  Header,
  ReviewListing,
  SentimentBreakdown,
  StarBreakdown,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { Loader } from "../pages";

const Dashboard = () => {
  const { loading, reviewData, reviewCount, appName } = useStateContext();
  return loading ? (
    <Loader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category={appName} title="Summary" />
      <div className="flex justify-center rounded-md border-2 py-5">
        <div className="w-1/4 mx-5">
          <p className="font-bold text-slate-700 mb-10">Reviews</p>
          <p className="text-3xl font-medium mt-3">{reviewCount}</p>
          <p className="text-sm underline text-slate-600 cursor-pointer">
            Load More
          </p>
        </div>
        <div className="w-1/4 mx-5">
          <p className="font-bold text-slate-700 mb-10">Avg Stars</p>
        </div>
        <div className="w-1/4 mx-5">
          <p className="font-bold text-slate-700 mb-10">Star Breakdown</p>
          <StarBreakdown />
        </div>
        <div className="w-1/4 mx-5">
          <p className="font-bold text-slate-700 mb-10">Sentiment Breakdown</p>
          <SentimentBreakdown from="dashboard" />
        </div>
      </div>
      <p className="mt-8 text-2xl font-extrabold tracking-tight text-slate-900">
        Review Listings
      </p>
      <ReviewListing reviewData={reviewData} />
    </div>
  );
};

export default Dashboard;
