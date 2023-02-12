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

const RatingChart = ({ reviewData }) => {
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
