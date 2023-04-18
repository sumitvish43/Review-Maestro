import React from "react";
import { Header, Loader, LineDistribution } from "../components";
import Box from "@mui/material/Box";
import { useStateContext } from "../contexts/ContextProvider";

const Topics = () => {
  const { topicMentions, loading, reviewCount, currentColor } =
    useStateContext();

  const topicData = [
    {
      TopicName: "Aesthetic",
      Mentions: topicMentions[0],
      Sentiment: <LineDistribution />,
      Mentionpercent: ((topicMentions[0] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Compatibility",
      Mentions: topicMentions[1],
      Sentiment: <LineDistribution />,
      Mentionpercent: ((topicMentions[1] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Cost",
      Mentions: topicMentions[2],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[2] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Effectiveness",
      Mentions: topicMentions[3],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[3] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Efficiency",
      Mentions: topicMentions[4],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[4] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Enjoyability",
      Mentions: topicMentions[5],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[5] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "General",
      Mentions: topicMentions[6],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[6] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Learnability",
      Mentions: topicMentions[7],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[7] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Reliability",
      Mentions: topicMentions[8],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[8] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Safety",
      Mentions: topicMentions[9],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[9] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Security",
      Mentions: topicMentions[10],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[10] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: "Usability",
      Mentions: topicMentions[11],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[11] / reviewCount) * 100).toFixed(2),
    },
  ];

  return loading ? (
    <Loader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Extraction of topics" title="Topics" />
      <div className="">
        <table className="w-full text-sm text-center border-1">
          <thead className="text-sm text-gray-600 uppercase border-b">
            <th className="p-3">TOPIC</th>
            <th className="p-3">SENTIMENT</th>
            <th className="p-3">MENTIONS</th>
            <th className="p-3">MENTION %</th>
          </thead>
          {topicData.map((val, key) => {
            return (
              <tr key={key} className="bg-white border-b text-sm">
                <td className="p-3 ">{val.TopicName}</td>
                <td className="p-3">{val.Sentiment}</td>
                <td className="p-3">{val.Mentions}</td>
                <td className="m-3">
                  <span
                    className="py-1 px-2 rounded-full text-white"
                    style={{ backgroundColor: currentColor }}
                  >
                    {val.Mentionpercent}
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Topics;
