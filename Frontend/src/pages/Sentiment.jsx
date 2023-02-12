import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Header, Stacked } from "../components";
import GaugeChart from "react-gauge-chart";
import { Loader } from "../pages";

const Sentiment = () => {
  const { reviewData, loading } = useStateContext();

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
      <div className="flex justify-center mt-20">
        <GaugeChart
          id="gauge-chart5"
          nrOfLevels={42}
          arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
          colors={["#FF453C", "#ff8761", "#ffa701", "#95c339", "#39c38e"]}
          percent={0.79}
          arcPadding={0.02}
          style={chartStyle}
          textColor="#000"
          hideText="true"
        />
      </div>
      <div className="flex justify-center">
        <p className="">Sentiment Score is 79%</p>
      </div>
    </div>
  );
};
export default Sentiment;
