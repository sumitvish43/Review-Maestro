import React, { useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  ratingSeries,
  RatingLineXAxis,
  RatingLineYAxis,
} from "../../data/dummy";

const RatingChart = ({ reviewData, setAvgRating, setNoOfRating }) => {
  //average and format rating data
  const ratingByMonth = [];
  const arrayData = JSON.parse(reviewData);
  arrayData.map((review) => {
    const d = new Date(review["postedAt"]);
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = year + " " + month;
    const rating = review["rating"];
    ratingByMonth.push([date, rating]);
  });

  const forChart = [];
  ratingByMonth.map((item) => {
    if (forChart.includes(item[0])) {
      forChart[forChart.indexOf(item[0]) + 1] += item[1];
      forChart[forChart.indexOf(item[0]) + 2] += 1;
    } else {
      forChart.push(item[0], item[1], 1);
    }
  });

  const lineChartData = [];
  var sumOfAvgRating = 0;
  for (var i = 0; i < forChart.length; i += 3) {
    const x = forChart[i];
    const y = forChart[i + 1] / forChart[i + 2];
    sumOfAvgRating += y;
    lineChartData.push({ x, y });
  }
  const avgRating = sumOfAvgRating / (forChart.length / 3);
  setAvgRating(parseFloat(avgRating).toFixed(2));
  setNoOfRating(arrayData.length);
  //data for chart
  const ratingSeries = [
    {
      dataSource: lineChartData,
      xName: "x",
      yName: "y",
      name: "Avg Star Ratings",
      width: "2",
      marker: { visible: true, width: 10, height: 10 },
      type: "Line",
    },
  ];

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={RatingLineXAxis}
      primaryYAxis={RatingLineYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {ratingSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default RatingChart;
