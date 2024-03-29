import React from "react";
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

import { stackedPrimaryXAxis } from "../../data/dummy";

const Stacked = ({ reviewData, width, height, reviewCount }) => {
  //count and format sentiment
  const sentimentByMonth = [];
  const arrayData = JSON.parse(reviewData);

  arrayData.map((review) => {
    const d = new Date(review["postedAt"]);
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = year + " " + month;
    const sentiment = review["sentiment"];
    sentimentByMonth.push([date, sentiment]);
  });
  const forChart = [];

  sentimentByMonth.map((item) => {
    if (forChart.includes(item[0])) {
      if (item[1] === 1) {
        forChart[forChart.indexOf(item[0]) + 1] += 1;
      }
      if (item[1] === 0) {
        forChart[forChart.indexOf(item[0]) + 2] += 1;
      }
    } else {
      if (item[1] === 1) {
        forChart.push(item[0], 1, 0);
      }
      if (item[1] === 0) {
        forChart.push(item[0], 0, 1);
      }
    }
  });
  const positiveData = [];

  for (var i = 0; i < forChart.length; i += 3) {
    const x = forChart[i];
    const y = forChart[i + 1];
    positiveData.push({ x, y });
  }

  const negativeData = [];
  for (let i = 0; i < forChart.length; i += 3) {
    const x = forChart[i];
    const y = forChart[i + 2];
    negativeData.push({ x, y });
  }

  //data for chart
  const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 0,
    maximum: reviewCount / 1.2,
    interval: reviewCount / 5,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: "{value}",
  };

  const stackedCustomSeries = [
    {
      dataSource: negativeData,
      xName: "x",
      yName: "y",
      name: "Negative",
      type: "StackingColumn",
      fill: "#ff453c",
    },
    {
      dataSource: positiveData,
      xName: "x",
      yName: "y",
      name: "Positive",
      type: "StackingColumn",
      fill: "#39c38e",
    },
  ];

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
