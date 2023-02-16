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

// import {
//   stackedCustomSeries,
//   stackedPrimaryXAxis,
//   stackedPrimaryYAxis,
// } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ reviewData, width, height }) => {
  const sentimentByMonth = [];

  const arrayData = JSON.parse(reviewData);
  console.log(arrayData);
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
      if (item[1] == 1) {
        forChart[forChart.indexOf(item[0]) + 1] += 1;
      }
      if (item[1] == 0) {
        forChart[forChart.indexOf(item[0]) + 2] += 1;
      }
    } else {
      if (item[1] == 1) {
        forChart.push(item[0], 1, 0);
      }
      if (item[1] == 0) {
        forChart.push(item[0], 0, 1);
      }
    }
  });
  console.log("dataForChart", forChart);
  const positiveData = [];
  const monthConvert = [
    1,
    "Jan",
    2,
    "Feb",
    3,
    "Mar",
    4,
    "Apr",
    5,
    "May",
    6,
    "Jun",
    7,
    "Jul",
    8,
    "Aug",
    9,
    "Sep",
    10,
    "Oct",
    11,
    "Nov",
    12,
    "Dec",
  ];
  for (var i = 0; i < forChart.length; i += 3) {
    const x = forChart[i];
    const y = forChart[i + 1];
    positiveData.push({ x, y });
  }

  const negativeData = [];
  for (var i = 0; i < forChart.length; i += 3) {
    const x = forChart[i];
    const y = forChart[i + 2];
    negativeData.push({ x, y });
  }

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

  const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 1 },
    minorTickLines: { width: 1 },
    interval: 0,
    lineStyle: { width: 0 },
    labelIntersectAction: "Rotate45",
    valueType: "Category",
  };
  const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 0,
    maximum: 600,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: "{value}",
  };
  console.log("positive: ", positiveData);
  console.log("negative: ", negativeData);
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
