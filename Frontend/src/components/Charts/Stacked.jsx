import React, { useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ reviewData, width, height }) => {
  const stackedchartdata = [[], []];

  const { currentMode } = useStateContext();

  const sentimentData = [];
  const finalStackData = [];
  // const finalPositiveLineData = [];
  // const finalNegativeLineData = [];
  // const arrayOfReviews = JSON.parse(reviewData);
  // arrayOfReviews.map((item) => {
  //   const d = new Date(item["postedAt"]);
  //   const month = d.getUTCMonth() + 1; //months from 1-
  //   const dayNumber = d.getUTCDate();
  //   const day = dayNumber + " " + month;
  //   const sentiment = item["sentiment"];
  //   sentimentData.push({ day, sentiment });
  // });
  // console.log(sentimentData);
  // const [currentDay, setCurrentDay] = useState(sentimentData[0]["day"]);
  // const [sumOfPositives, setSumOfPositives] = useState(0);
  // const [sumOfNegatives, setSumOfNegatives] = useState(0);
  // const [prevDay, setPrevDay] = useState(currentDay);

  // sentimentData.map((item) => {
  //   if (currentDay === item["day"]) {
  //     if (item["sentiment"] === 0) {
  //       setSumOfNegatives(sumOfNegatives + 1);
  //     } else {
  //       setSumOfPositives(sumOfPositives + 1);
  //     }
  //   } else {
  //     finalStackData.push({ currentDay, sumOfNegatives });
  //     finalStackData.push({ currentDay, sumOfPositives });
  //     if (item["sentiment"] === 0) {
  //       setSumOfNegatives(1);
  //       setSumOfPositives(0);
  //     } else {
  //       setSumOfPositives(1);
  //       setSumOfNegatives(0);
  //     }
  //     setCurrentDay(item["day"]);
  //   }
  // });

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
