import React, { useState } from "react";
import gmeet from "../data/Google Meet.jpg";
import zoom from "../data/Zoom Meetings.jpg";
import teams from "../data/Microsoft Teams.jpg";
import {
  AvgStar,
  LineDistribution,
  TopicBreakdown,
  ThreePies,
  Header,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const CompareTable = () => {
  const gmeetColor = "#02AC49";
  const zoomColor = "#02AC49"; //"#1B97F3"
  const teamsColor = "#02AC49"; //"#5059C9"
  const {
    currentColor,
    reviewCount,
    appName,
    avgRating,
    gmeetData,
    zoomData,
    teamsData,
    topicMentions,
  } = useStateContext();
  const getAppIcon = (app) => {
    if (app === "Google Meet") return gmeet;
    if (app === "Zoom Meetings") return zoom;
    if (app === "Microsoft Teams") return teams;
  };
  var sentiment = 0;
  var app1 = "";
  var app1Data = [];
  var app2 = "";
  var app2Data = [];
  var topicMentions1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var avgRating1 = 0;
  var sentiment1 = 0;
  var topicMentions2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var avgRating2 = 0;
  var sentiment2 = 0;

  var appColor = "";
  var app1Color = "";
  var app2Color = "";

  if (appName === "Microsoft Teams") {
    appColor = teamsColor;
    const arrayData = JSON.parse(teamsData);
    arrayData.map((review) => {
      if (review["sentiment"]) sentiment += 1;
    });

    app1 = "Zoom Meetings";
    app1Data = JSON.parse(zoomData);
    var ratingSum = 0;
    app1Data.map((review) => {
      if (review["sentiment"]) sentiment1 += 1;
      topicMentions1[review["topics"]] += 1;
      ratingSum += review["rating"];
    });
    avgRating1 = (ratingSum / reviewCount).toFixed(2);
    app1Color = zoomColor;

    ratingSum = 0;
    app2 = "Google Meet";
    app2Data = JSON.parse(gmeetData);
    app2Data.map((review) => {
      if (review["sentiment"]) sentiment2 += 1;
      topicMentions2[review["topics"]] += 1;
      ratingSum += review["rating"];
    });
    avgRating2 = (ratingSum / reviewCount).toFixed(2);
    app2Color = gmeetColor;
  }

  if (appName === "Zoom Meetings") {
    appColor = zoomColor;
    const arrayData = JSON.parse(zoomData);
    arrayData.map((review) => {
      if (review["sentiment"]) sentiment += 1;
    });

    app1 = "Microsoft Teams";
    app1Data = JSON.parse(teamsData);
    var ratingSum = 0;
    app1Data.map((review) => {
      if (review["sentiment"]) sentiment1 += 1;
      topicMentions1[review["topics"]] += 1;
      ratingSum += review["rating"];
    });
    avgRating1 = (ratingSum / reviewCount).toFixed(2);
    app1Color = teamsColor;

    ratingSum = 0;
    app2 = "Google Meet";
    app2Data = JSON.parse(gmeetData);
    app2Data.map((review) => {
      if (review["sentiment"]) sentiment2 += 1;
      topicMentions2[review["topics"]] += 1;
      ratingSum += review["rating"];
    });
    avgRating2 = (ratingSum / reviewCount).toFixed(2);
    app2Color = gmeetColor;
  }

  if (appName === "Google Meet") {
    appColor = gmeetColor;
    const arrayData = JSON.parse(gmeetData);
    arrayData.map((review) => {
      if (review["sentiment"]) sentiment += 1;
    });

    app1 = "Microsoft Teams";
    app1Data = JSON.parse(teamsData);
    var ratingSum = 0;
    app1Data.map((review) => {
      if (review["sentiment"]) sentiment1 += 1;
      topicMentions1[review["topics"]] += 1;
      ratingSum += review["rating"];
    });
    avgRating1 = (ratingSum / reviewCount).toFixed(2);
    app1Color = teamsColor;

    ratingSum = 0;
    app2 = "Zoom Meetings";
    app2Data = JSON.parse(zoomData);
    app2Data.map((review) => {
      if (review["sentiment"]) sentiment2 += 1;
      topicMentions2[review["topics"]] += 1;
      ratingSum += review["rating"];
    });
    avgRating2 = (ratingSum / reviewCount).toFixed(2);
    app2Color = zoomColor;
  }

  return (
    <>
      <div className="mb-10">
        <table className="w-full text-sm text-center border-1">
          <thead className="text-sm text-gray-600 uppercase border-b">
            <th className="p-3">ICON</th>
            <th className="p-3">APP NAME</th>
            <th className="p-3">TOPIC</th>
            <th className="p-3">AVG RATING</th>
            <th className="p-3">SENTIMENT</th>
          </thead>
          <tbody>
            <tr className="bg-white border-b text-sm">
              <td className="flex justify-center">
                <img
                  src={getAppIcon(appName)}
                  alt="App Icon"
                  height="100px"
                  width="100px"
                />
              </td>
              <td>{appName}</td>
              <td>
                <TopicBreakdown topicMentions={topicMentions} />
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="py-1 px-2 mr-2 rounded-full font-bold text-white"
                    style={{ backgroundColor: appColor }}
                  >
                    {avgRating}
                  </span>
                  <AvgStar avgRating={avgRating} />
                </div>
              </td>
              <td>
                <LineDistribution total={reviewCount} positives={sentiment} />
              </td>
            </tr>

            <tr className="bg-white border-b text-sm">
              <td className="flex justify-center">
                <img
                  src={getAppIcon(app1)}
                  alt="App Icon"
                  height="100px"
                  width="100px"
                />
              </td>
              <td>{app1}</td>
              <td>
                <TopicBreakdown topicMentions={topicMentions1} />
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="py-1 px-2 mr-2 rounded-full font-bold text-white"
                    style={{ backgroundColor: app1Color }}
                  >
                    {avgRating1}
                  </span>
                  <AvgStar avgRating={avgRating1} />
                </div>
              </td>
              <td>
                <LineDistribution total={reviewCount} positives={sentiment1} />
              </td>
            </tr>

            <tr className="bg-white border-b text-sm">
              <td className="flex justify-center">
                <img
                  src={getAppIcon(app2)}
                  alt="App Icon"
                  height="100px"
                  width="100px"
                />
              </td>
              <td>{app2}</td>
              <td>
                <TopicBreakdown topicMentions={topicMentions2} />
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="py-1 px-2 mr-2 rounded-full font-bold text-white"
                    style={{ backgroundColor: app2Color }}
                  >
                    {avgRating2}
                  </span>
                  <AvgStar avgRating={avgRating2} />
                </div>
              </td>
              <td>
                <LineDistribution total={reviewCount} positives={sentiment2} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Header category="Visualization of Topic Extraction" />
      <ThreePies
        topicMentions1={topicMentions1}
        topicMentions2={topicMentions2}
      />
    </>
  );
};
export default CompareTable;
