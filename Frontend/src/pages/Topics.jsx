import React, { useState, useRef } from "react";
import {
  Header,
  PageLoader,
  LineDistribution,
  TopicReviews,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Topics = () => {
  const ref = useRef(null);

  const {
    reviewData,
    positiveOnTopic,
    topicNames,
    topicMentions,
    loading,
    reviewCount,
    currentColor,
  } = useStateContext();

  const [topicToList, setTopicToList] = useState("");

  const topicHandler = (e) => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTopicToList(e.target.id);
  };
  var styleCursor = {};
  const topicData = [
    {
      TopicName: topicNames[0],
      Mentions: topicMentions[0],
      Sentiment: (
        <LineDistribution
          total={topicMentions[0]}
          positives={positiveOnTopic[0]}
          key={0}
        />
      ),
      Mentionpercent: ((topicMentions[0] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[1],
      Mentions: topicMentions[1],
      Sentiment: (
        <LineDistribution
          total={topicMentions[1]}
          positives={positiveOnTopic[1]}
          key={1}
        />
      ),
      Mentionpercent: ((topicMentions[1] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[2],
      Mentions: topicMentions[2],
      Sentiment: (
        <LineDistribution
          total={topicMentions[2]}
          positives={positiveOnTopic[2]}
          key={2}
        />
      ),
      Mentionpercent: ((topicMentions[2] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[3],
      Mentions: topicMentions[3],
      Sentiment: (
        <LineDistribution
          total={topicMentions[3]}
          positives={positiveOnTopic[3]}
          key={3}
        />
      ),
      Mentionpercent: ((topicMentions[3] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[4],
      Mentions: topicMentions[4],
      Sentiment: (
        <LineDistribution
          total={topicMentions[4]}
          positives={positiveOnTopic[4]}
          key={4}
        />
      ),
      Mentionpercent: ((topicMentions[4] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[5],
      Mentions: topicMentions[5],
      Sentiment: (
        <LineDistribution
          total={topicMentions[5]}
          positives={positiveOnTopic[5]}
          key={5}
        />
      ),
      Mentionpercent: ((topicMentions[5] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[6],
      Mentions: topicMentions[6],
      Sentiment: (
        <LineDistribution
          total={topicMentions[6]}
          positives={positiveOnTopic[6]}
          key={6}
        />
      ),
      Mentionpercent: ((topicMentions[6] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[7],
      Mentions: topicMentions[7],
      Sentiment: (
        <LineDistribution
          total={topicMentions[7]}
          positives={positiveOnTopic[7]}
          key={7}
        />
      ),
      Mentionpercent: ((topicMentions[7] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[8],
      Mentions: topicMentions[8],
      Sentiment: (
        <LineDistribution
          total={topicMentions[8]}
          positives={positiveOnTopic[8]}
          key={8}
        />
      ),
      Mentionpercent: ((topicMentions[8] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[9],
      Mentions: topicMentions[9],
      Sentiment: (
        <LineDistribution
          total={topicMentions[9]}
          positives={positiveOnTopic[9]}
          key={9}
        />
      ),
      Mentionpercent: ((topicMentions[9] / reviewCount) * 100).toFixed(2),
    },
    {
      TopicName: topicNames[10],
      Mentions: topicMentions[10],
      Sentiment: (
        <LineDistribution
          total={topicMentions[10]}
          positives={positiveOnTopic[10]}
          key={10}
        />
      ),
      Mentionpercent: ((topicMentions[10] / reviewCount) * 100).toFixed(2),
    },
  ];

  return loading ? (
    <PageLoader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Extraction of topics" title="Topics" />
      <div className="">
        <p className="text-slate-700 text-sm italic mb-2">
          Click on any topic to see their reviews
        </p>
        <table className="w-full text-sm text-center border-1">
          <thead className="text-sm text-gray-600 uppercase border-b">
            <th className="p-3">TOPIC</th>
            <th className="p-3">SENTIMENT</th>
            <th className="p-3">MENTIONS</th>
            <th className="p-3">MENTION %</th>
          </thead>
          <tbody>
            {topicData.map((val, key) => {
              topicMentions[topicNames.indexOf(val.TopicName)]
                ? (styleCursor = {
                    cursor: "pointer",
                  })
                : (styleCursor = { cursor: "not-allowed" });
              return (
                <tr key={key} className="bg-white border-b text-sm">
                  <td
                    className="p-3 flex justify-center my-1.5"
                    style={styleCursor}
                    id={val.TopicName}
                    onClick={topicHandler}
                  >
                    {val.TopicName}
                    {/* <span id="loader" style={{ display: "none" }}>
                    <LineLoading />
                  </span> */}
                  </td>

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
          </tbody>
        </table>
      </div>
      <div id="section-1" className="mt-6">
        <TopicReviews topic={topicToList} reviewData={reviewData} ref={ref} />
      </div>
    </div>
  );
};

export default Topics;
