import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Header, Stacked } from "../components";
import GaugeChart from "react-gauge-chart";
import { Loader } from "../pages";
import { ProgressBar } from "../components";

const Sentiment = () => {
  const { reviewData, loading, reviewCount } = useStateContext();

  const getSentiment = () => {
    const sentimentValues = [0, 0];
    const arrayData = JSON.parse(reviewData);
    arrayData.map((review) => (sentimentValues[review["sentiment"]] += 1));
    return sentimentValues;
  };

  const getSentimentPercent = () => {
    const arrayData = JSON.parse(reviewData);
    const positiveSentiment = [0, 0];
    arrayData.map((review) => (positiveSentiment[review["sentiment"]] += 1));
    const returnthis = positiveSentiment[1] / reviewCount;
    return Number(returnthis.toFixed(2));
  };
  const chartStyle = {
    height: 200,
    width: 400,
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl border-2">
      <Header category="Sentiment Analysis" title="Timeline" />
      <Stacked reviewData={reviewData} />
      <div className="flex justify-around">
        <div>
          <div className="flex justify-center mt-10">
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={42}
              arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
              colors={["#FF453C", "#ff8761", "#ffa701", "#95c339", "#39c38e"]}
              percent={getSentimentPercent()}
              arcPadding={0.02}
              style={chartStyle}
              textColor="#000"
              hideText="true"
            />
          </div>
          <div className="flex justify-center">
            <p className="">
              Sentiment Score is {getSentimentPercent() * 100}%
            </p>
          </div>
        </div>
        <div className="mt-20 w-5/12">
          <p>Sentiment Breakdown</p>
          <ProgressBar
            from="sentiment"
            count={2}
            bgcolor={["#39c38e", "#ff453c"]}
            progress={getSentiment()}
            height={13}
          />
        </div>
      </div>
    </div>
  );
};
export default Sentiment;
