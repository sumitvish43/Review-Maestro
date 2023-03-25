import React from "react";
import { ProgressBar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const SentimentBreakdown = ({ from }) => {
  const { reviewData } = useStateContext(0);
  const getSentiment = () => {
    const sentimentValues = [0, 0];
    const arrayData = JSON.parse(reviewData);
    arrayData.map((review) => (sentimentValues[review["sentiment"]] += 1));
    return sentimentValues;
  };
  return (
    <div>
      <ProgressBar
        from={from}
        bgcolor={["#39c38e", "#ff453c"]}
        progress={getSentiment()}
      />
    </div>
  );
};
export default SentimentBreakdown;
