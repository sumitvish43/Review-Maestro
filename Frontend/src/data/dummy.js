import React, { useState, useEffect } from "react";
import {
  AiOutlineFileSearch,
  AiFillDashboard,
  AiFillStar,
} from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import { BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdThumbsUp } from "react-icons/io";
import { RiTableFill } from "react-icons/ri";
// import avatar from "./avatar.jpg";
import product1 from "./Microsoft Teams.jpg";
import product2 from "./Google Meet.jpg";
import product3 from "./Zoom Meetings.jpg";

export const gridAppImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.AppIcon}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.AverageBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Average}
  </button>
);
export const percentStatus = (props) => (
  <button
    type="button"
    style={{ background: props.MentionpercentBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Mentionpercent}
  </button>
);
const GetMentions = (props) => {
  const { topicMentions } = useStateContext();
  return topicMentions[0];
};
export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}",
  rangePadding: "None",
  minimum: 0,
  maximum: 1000,
  interval: 200,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const links = [
  {
    title: "Analysis",
    links: [
      {
        name: "dashboard",
        icon: <AiFillDashboard />,
      },
      {
        name: "ratings",
        icon: <AiFillStar />,
      },
      {
        name: "compare",
        icon: <RiTableFill />,
      },
      {
        name: "sentiment",
        icon: <IoMdThumbsUp />,
      },
    ],
  },
  {
    title: "Groupings",
    links: [
      {
        name: "words",
        icon: <AiOutlineFileSearch />,
      },
      {
        name: "topics",
        icon: <BsKanban />,
      },
      {
        name: "tags",
        icon: <BiColorFill />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const appGrid = [
  {
    headerText: "ICON",
    template: gridAppImage,
    textAlign: "Center",
    width: "150",
  },
  {
    field: "AppName",
    headerText: "APP NAME",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Sentiment",
    headerText: "SENTIMENT",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },

  {
    field: "Reviews",
    headerText: "REVIEWS",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "AVG RATING",
    template: gridOrderStatus,
    field: "Average",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "Breakdown",
    headerText: "BREAKDOWN",
    width: "120",
    textAlign: "Center",
  },
];
export const appData = [
  {
    AppName: "Microsoft Teams",
    Reviews: "21,778",
    Sentiment: "-",
    Average: "3.8",
    AverageBg: "#FB9678",
    AppIcon: product1,
    Breakdown: "-",
  },
  {
    AppName: "Google Meet",
    Reviews: "24,312",
    Sentiment: "-",
    Average: "3.7",
    AverageBg: "#8BE78B",
    AppIcon: product2,
    Breakdown: "-",
  },
  {
    AppName: "Zoom Meeting",
    Reviews: "19,087",
    Sentiment: "-",
    Average: "3.9",
    AverageBg: "#03C9D7",
    AppIcon: product3,
    Breakdown: "-",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 438 },
    { x: new Date(2006, 0, 1), y: 859 },
    { x: new Date(2007, 0, 1), y: 301 },
    { x: new Date(2008, 0, 1), y: 502 },
    { x: new Date(2009, 0, 1), y: 402 },
    { x: new Date(2010, 0, 1), y: 570 },
    { x: new Date(2011, 0, 1), y: 377 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 377 },
    { x: new Date(2006, 0, 1), y: 570 },
    { x: new Date(2007, 0, 1), y: 443 },
    { x: new Date(2008, 0, 1), y: 859 },
    { x: new Date(2009, 0, 1), y: 438 },
    { x: new Date(2010, 0, 1), y: 301 },
    { x: new Date(2011, 0, 1), y: 502 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 599 },
    { x: new Date(2006, 0, 1), y: 420 },
    { x: new Date(2007, 0, 1), y: 330 },
    { x: new Date(2008, 0, 1), y: 629 },
    { x: new Date(2009, 0, 1), y: 501 },
    { x: new Date(2010, 0, 1), y: 468 },
    { x: new Date(2011, 0, 1), y: 480 },
  ],
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Microsoft Teams",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "Google Meet",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "Zoom Meeting",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const ratingLineData = [
  [
    { x: new Date(2022, 10, 11), y: 3.8 },
    { x: new Date(2022, 10, 15), y: 4 },
    { x: new Date(2022, 10, 20), y: 4.1 },
    { x: new Date(2022, 10, 25), y: 3.5 },
    { x: new Date(2022, 10, 27), y: 3.2 },
    { x: new Date(2022, 10, 29), y: 3.6 },
    { x: new Date(2022, 11, 4), y: 3.7 },
    { x: new Date(2022, 11, 10), y: 3.9 },
    { x: new Date(2022, 11, 16), y: 4.0 },
    { x: new Date(2022, 11, 20), y: 4.1 },
    { x: new Date(2022, 11, 24), y: 4.2 },
    { x: new Date(2022, 11, 28), y: 4 },
    { x: new Date(2022, 12, 3), y: 3.8 },
    { x: new Date(2022, 12, 7), y: 3.7 },
    { x: new Date(2022, 12, 12), y: 3.5 },
    { x: new Date(2022, 12, 15), y: 3.4 },
    { x: new Date(2022, 12, 17), y: 3.4 },
    { x: new Date(2022, 12, 21), y: 3.6 },
    { x: new Date(2022, 12, 25), y: 3.7 },
    { x: new Date(2022, 12, 31), y: 3.9 },
    { x: new Date(2023, 1, 4), y: 3.7 },
    { x: new Date(2023, 1, 10), y: 3.8 },
    { x: new Date(2023, 1, 17), y: 4 },
    { x: new Date(2023, 1, 22), y: 4.1 },
    { x: new Date(2023, 1, 24), y: 4.2 },
    { x: new Date(2023, 1, 30), y: 4.2 },
    { x: new Date(2023, 2, 5), y: 4 },
    { x: new Date(2023, 2, 11), y: 3.7 },
  ],
];
export const ratingSeries = [
  {
    dataSource: ratingLineData[0],
    xName: "x",
    yName: "y",
    name: "Avg Star Ratings",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];
export const RatingLineXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const RatingLineYAxis = {
  labelFormat: "{value}",
  rangePadding: "None",
  minimum: 0.0,
  maximum: 5.0,
  interval: 1.0,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const stackedChartData = [
  [
    { x: "Jan 22", y: 111 },
    { x: "Feb 22", y: 127 },
    { x: "Mar 22", y: 243 },
    { x: "Apr 22", y: 159 },
    { x: "May 22", y: 159 },
    { x: "Jun 22", y: 159 },
    { x: "July 22", y: 159 },
    { x: "Aug 22", y: 411 },
    { x: "Sep 22", y: 127 },
    { x: "Oct 22", y: 143 },
    { x: "Nov 22", y: 359 },
    { x: "Dec 22", y: 159 },
    { x: "Jan 23", y: 280 },
    { x: "Feb 23", y: 429 },
    { x: "Mar 23", y: 343 },
    { x: "Apr 23", y: 359 },
    { x: "May 23", y: 159 },
    { x: "Jun 23", y: 159 },
    { x: "July 23", y: 159 },
    { x: "Aug 23", y: 111 },
    { x: "Sep 23", y: 127 },
    { x: "Oct 23", y: 143 },
    { x: "Nov 23", y: 259 },
    { x: "Dec 23", y: 159 },
    { x: "Jan 24", y: 111 },
    { x: "Feb 24", y: 127 },
    { x: "Mar 24", y: 143 },
    { x: "Apr 24", y: 159 },
    { x: "May 24", y: 339 },
    { x: "Jun 24", y: 159 },
    { x: "July 24", y: 569 },
    { x: "Aug 24", y: 111 },
    { x: "Sep 24", y: 127 },
    { x: "Oct 24", y: 143 },
    { x: "Nov 24", y: 159 },
    { x: "Dec 24", y: 449 },
    { x: "Jan 25", y: 159 },
    { x: "Feb 25", y: 159 },
    { x: "Mar 25", y: 143 },
    { x: "Apr 25", y: 625 },
    { x: "May 25", y: 159 },
    { x: "Jun 25", y: 229 },
    { x: "July 25", y: 159 },
    { x: "Aug 25", y: 111 },
    { x: "Sep 25", y: 127 },
    { x: "Oct 25", y: 143 },
    { x: "Nov 25", y: 159 },
    { x: "Dec 25", y: 159 },
  ],

  [
    { x: "Jan 22", y: 111 },
    { x: "Feb 22", y: 127 },
    { x: "Mar 22", y: 143 },
    { x: "Apr 22", y: 50 },
    { x: "May 22", y: 101 },
    { x: "Jun 22", y: 159 },
    { x: "July 22", y: 159 },
    { x: "Aug 22", y: 111 },
    { x: "Sep 22", y: 68 },
    { x: "Oct 22", y: 43 },
    { x: "Nov 22", y: 15 },
    { x: "Dec 22", y: 95 },
    { x: "Jan 23", y: 159 },
    { x: "Feb 23", y: 159 },
    { x: "Mar 23", y: 143 },
    { x: "Apr 23", y: 109 },
    { x: "May 23", y: 159 },
    { x: "Jun 23", y: 159 },
    { x: "July 23", y: 109 },
    { x: "Aug 23", y: 111 },
    { x: "Sep 23", y: 127 },
    { x: "Oct 23", y: 143 },
    { x: "Nov 23", y: 77 },
    { x: "Dec 23", y: 159 },
    { x: "Jan 24", y: 111 },
    { x: "Feb 24", y: 127 },
    { x: "Mar 24", y: 143 },
    { x: "Apr 24", y: 80 },
    { x: "May 24", y: 69 },
    { x: "Jun 24", y: 76 },
    { x: "July 24", y: 159 },
    { x: "Aug 24", y: 111 },
    { x: "Sep 24", y: 127 },
    { x: "Oct 24", y: 143 },
    { x: "Nov 24", y: 159 },
    { x: "Dec 24", y: 15 },
    { x: "Jan 25", y: 106 },
    { x: "Feb 25", y: 159 },
    { x: "Mar 25", y: 14 },
    { x: "Apr 25", y: 39 },
    { x: "May 25", y: 159 },
    { x: "Jun 25", y: 49 },
    { x: "July 25", y: 159 },
    { x: "Aug 25", y: 71 },
    { x: "Sep 25", y: 127 },
    { x: "Oct 25", y: 143 },
    { x: "Nov 25", y: 159 },
    { x: "Dec 25", y: 159 },
  ],
  [
    { x: "Jan 22", y: 411 },
    { x: "Feb 22", y: 527 },
    { x: "Mar 22", y: 443 },
    { x: "Apr 22", y: 359 },
    { x: "May 22", y: 411 },
    { x: "Jun 22", y: 500 },
    { x: "July 22", y: 311 },
    { x: "Aug 22", y: 411 },
    { x: "Sep 22", y: 327 },
    { x: "Oct 22", y: 43 },
    { x: "Nov 22", y: 411 },
    { x: "Dec 22", y: 559 },
    { x: "Jan 23", y: 499 },
    { x: "Feb 23", y: 650 },
    { x: "Mar 23", y: 343 },
    { x: "Apr 23", y: 259 },
    { x: "May 23", y: 459 },
    { x: "Jun 23", y: 359 },
    { x: "July 23", y: 559 },
    { x: "Aug 23", y: 761 },
    { x: "Sep 23", y: 527 },
    { x: "Oct 23", y: 443 },
    { x: "Nov 23", y: 359 },
    { x: "Dec 23", y: 359 },
    { x: "Jan 24", y: 411 },
    { x: "Feb 24", y: 227 },
    { x: "Mar 24", y: 343 },
    { x: "Apr 24", y: 559 },
    { x: "May 24", y: 459 },
    { x: "Jun 24", y: 259 },
    { x: "July 24", y: 359 },
    { x: "Aug 24", y: 411 },
    { x: "Sep 24", y: 427 },
    { x: "Oct 24", y: 543 },
    { x: "Nov 24", y: 359 },
    { x: "Dec 24", y: 359 },
    { x: "Jan 25", y: 559 },
    { x: "Feb 25", y: 659 },
    { x: "Mar 25", y: 243 },
    { x: "Apr 25", y: 366 },
    { x: "May 25", y: 519 },
    { x: "Jun 25", y: 659 },
    { x: "July 25", y: 159 },
    { x: "Aug 25", y: 311 },
    { x: "Sep 25", y: 228 },
    { x: "Oct 25", y: 343 },
    { x: "Nov 25", y: 459 },
    { x: "Dec 25", y: 759 },
  ],
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: "x",
    yName: "y",
    name: "Negative",
    type: "StackingColumn",
    fill: "#ff453c",
  },

  {
    dataSource: stackedChartData[1],
    xName: "x",
    yName: "y",
    name: "Neutral",
    type: "StackingColumn",
    fill: "#ffa701",
  },
  {
    dataSource: stackedChartData[2],
    xName: "x",
    yName: "y",
    name: "Positive",
    type: "StackingColumn",
    fill: "#39c38e",
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  interval: 0,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
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

export const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 10 },
  { text: "Hey", value: 1200 },
  { text: "lol", value: 2000 },
  { text: "first impression", value: 8000 },
  { text: "very cool", value: 100000 },
  { text: "duck", value: 100 },
];

export const topicGrid = [
  {
    field: "TopicName",
    headerText: "TOPIC",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Sentiment",
    headerText: "SENTIMENT",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },

  {
    field: "Mentions",
    headerText: "MENTIONS",
    textAlign: "Center",
    editType: "numericedit",

    width: "150",
  },
  {
    headerText: "MENTION %",
    template: percentStatus,
    field: "Mentionpercent",
    textAlign: "Center",
    width: "120",
  },
];
