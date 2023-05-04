import React from "react";
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

import { useStateContext } from "../../contexts/ContextProvider";

const RatingChart = () => {
  //average and format rating data
  const { lineChartData } = useStateContext();

  lineChartData.map((data) => {
    // if (data["x"].split(" ").join("").length === 5) {
    //   let year = data["x"].split(" ").join("").slice(0, 4);
    //   let month = data["x"].split(" ").join("").slice(4, 6);
    //   data["x"] = new Date(year, month);
    //   console.log(lineChartData);
    // }
    // var len2 = data["x"];
    // if (len2.replaceAll(" ", "").length === 5) {
    //   let year = data["x"].replaceAll(" ", "").slice(0, 4);
    //   let month = data["x"].replaceAll(" ", "").slice(4, 5);
    //   data["x"] = new Date(year, month);
    //   console.log(lineChartData);
    // }
    // console.log(typeof data["x"].replaceAll(" ", "").length);
  });
  console.log(lineChartData);
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
