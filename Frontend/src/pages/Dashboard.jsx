import React from "react";
import {
  Header,
  ReviewListing,
  SentimentBreakdown,
  StarBreakdown,
  AvgStar,
  PageLoader,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import CountUp from "react-countup";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  const {
    loading,
    topicNames,
    topicMentions,
    reviewCount,
    appName,
    avgRating,
  } = useStateContext();
  const temp = [];
  topicMentions.map((val) => {
    temp.push(val);
  });
  temp
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  const mydata = [];
  temp.slice(0, 5).map((num) => {
    mydata.push([topicNames[topicMentions.indexOf(num)], num]);
  });
  mydata.unshift(["Topic", "No of mentions"]);

  const options = {
    legend: "none",
    pieHole: 0.0,
    is3D: false,
  };

  return loading ? (
    <PageLoader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category={appName} title="Summary" />
      <div className="flex justify-center rounded-md border-2 py-5">
        <div className="w-1/4 border-r-1 border-slate-300">
          <div className="pl-4 flex font-bold text-slate-700 ">
            <p className="text-sm">Topics</p>
            <AiOutlineQuestionCircle
              id="review-tooltip"
              className="mt-0.5 ml-1 cursor-pointer"
            />
          </div>
          <ReactTooltip
            anchorId="review-tooltip"
            place="bottom"
            content="Total number of reviews fetched"
          />
          <Chart
            chartType="PieChart"
            width="100%"
            height="310px"
            data={mydata}
            options={options}
          />
        </div>

        <div className="w-1/4 px-5 border-r-1 border-slate-300">
          <div className=" flex font-bold text-slate-700 mb-10">
            <p className="text-sm">Review & Avg Stars</p>
            <AiOutlineQuestionCircle
              id="avg-star-tooltip"
              className="mt-0.5 ml-1 cursor-pointer"
            />
          </div>
          <ReactTooltip
            anchorId="avg-star-tooltip"
            place="bottom"
            content="Average rating of the fetched reviews"
          />
          <div className="pt-6">
            <div className="flex h-1/2 mb-8">
              <div className="my-auto">
                <p className="text-3xl font-medium mt-3">
                  <CountUp end={reviewCount} />
                </p>
                <p className="text-sm underline text-slate-600 cursor-pointer">
                  Load More
                </p>
              </div>
            </div>
            <AvgStar avgRating={avgRating} />
            <p className="text-sm text-slate-500">{avgRating} Stars</p>
          </div>
        </div>

        <div className="w-1/4 px-5 border-r-1 border-slate-300">
          <div className=" flex font-bold text-slate-700 mb-10">
            <p className="text-sm">Star Breakdown</p>
            <AiOutlineQuestionCircle
              id="star-breakdown-tooltip"
              className="mt-0.5 ml-1 cursor-pointer"
            />
          </div>
          <ReactTooltip
            anchorId="star-breakdown-tooltip"
            place="bottom"
            content="A representation of how the ratings are given"
          />
          <div className="pt-4"></div>
          <StarBreakdown />
        </div>

        <div className="w-1/4 px-5">
          <div className=" flex font-bold text-slate-700 mb-10">
            <p className="text-sm">Sentiment Breakdown</p>
            <AiOutlineQuestionCircle
              id="sentiment-tooltip"
              className="mt-0.5 ml-1 cursor-pointer"
            />
          </div>
          <ReactTooltip
            anchorId="sentiment-tooltip"
            place="bottom"
            content="Shows how many positive and negative reviews are there in the fetched reviews"
          />
          <div className="pt-10"></div>
          <SentimentBreakdown from="dashboard" />
        </div>
      </div>
      <p className="mt-8 text-2xl font-extrabold tracking-tight text-slate-900">
        Review Listings{" "}
      </p>
      <div>
        <ReviewListing />
      </div>
    </div>
  );
};

export default Dashboard;
