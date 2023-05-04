import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Chart } from "react-google-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const ThreePies = ({ app1, app2, topicMentions1, topicMentions2 }) => {
  const { topicMentions, topicNames, appName } = useStateContext();
  const temp = [];
  topicMentions.map((val) => {
    temp.push(val);
  });
  temp
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  const mydata = [];
  temp.slice(0, 5).map((num) => {
    mydata.push([topicNames[topicMentions.indexOf(num)], num]);
  });
  mydata.unshift(["Topic", "No of mentions"]);

  const options = {
    legend: "none",
    pieHole: 0.0,
    is3D: true,
  };

  const temp1 = [];
  topicMentions1.map((val) => {
    temp1.push(val);
  });
  temp1
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  const mydata1 = [];
  temp1.slice(0, 5).map((num) => {
    mydata1.push([topicNames[topicMentions1.indexOf(num)], num]);
  });
  mydata1.unshift(["Topic", "No of mentions"]);

  const temp2 = [];
  topicMentions2.map((val) => {
    temp2.push(val);
  });
  temp2
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  const mydata2 = [];
  temp2.slice(0, 5).map((num) => {
    mydata2.push([topicNames[topicMentions2.indexOf(num)], num]);
  });
  mydata2.unshift(["Topic", "No of mentions"]);

  return (
    <div className="flex justify-between mb-10">
      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="300px"
          data={mydata}
          options={options}
        />
        <p className="flex justify-center">{appName}</p>
      </div>

      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="300px"
          data={mydata1}
          options={options}
        />
        <p className="flex justify-center">{app1}</p>
      </div>
      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="300px"
          data={mydata2}
          options={options}
        />
        <p className="flex justify-center">{app2}</p>
      </div>
    </div>
  );
};
export default ThreePies;
