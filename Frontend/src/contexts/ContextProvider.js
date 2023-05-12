import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const initialState = {
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const [reviewData, setReviewData] = useState([{}]);
  const app = children.props.name;
  const [appName, setAppName] = useState(app);
  const [reviewCount, setReviewCount] = useState(0);

  const [topicMentions, setTopicMentions] = useState([]);
  const [positiveOnTopic, setPositiveOnTopic] = useState([0]);
  const [avgRating, setAvgRating] = useState(0);
  const [lineChartData, setLineChartData] = useState([]);
  const [lastMonth, setLastMonth] = useState("");
  const [year, setYear] = useState(0);

  const [gmeetData, setGmeetData] = useState([{}]);
  const [zoomData, setZoomData] = useState([{}]);
  const [teamsData, setTeamsData] = useState([{}]);
  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString("en-US", { month: "long" });
  }

  const loadAllData = () => {
    fetch(`http://localhost:5000/ms-teams-data`)
      .then((res) => res.json())
      .then((reviewData) => {
        setTeamsData(reviewData);
        if (appName === "Microsoft Teams") setReviewData(reviewData);
      });
    fetch(`http://localhost:5000/zoom-data`)
      .then((res) => res.json())
      .then((reviewData) => {
        setZoomData(reviewData);
        if (appName === "Zoom Meetings") setReviewData(reviewData);
      });
    fetch(`http://localhost:5000/gmeet-data`)
      .then((res) => res.json())
      .then((reviewData) => {
        setGmeetData(reviewData);
        if (appName === "Google Meet") setReviewData(reviewData);
      });
  };
  if (loading) loadAllData();

  useEffect(() => {
    var url = "";
    if (appName === "Microsoft Teams")
      url = `http://localhost:5000/ms-teams-data`;
    if (appName === "Google Meet") url = `http://localhost:5000/gmeet-data`;
    if (appName === "Zoom Meetings") url = `http://localhost:5000/zoom-data`;

    fetch(url)
      .then((res) => res.json())
      .then((reviewData) => {
        setReviewData(reviewData);
        setLoading(false);
        const arrayData = JSON.parse(reviewData);
        setReviewCount(arrayData.length);
        const tempArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const tempTopicPositive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        arrayData.map((review) => {
          tempArray[review["topics"]] += 1;
          if (review["sentiment"] === 1)
            tempTopicPositive[review["topics"]] += 1;
        });
        setTopicMentions(tempArray);
        setPositiveOnTopic(tempTopicPositive);
        const ratingByMonth = [];
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

        const lineChartDataTemp = [];
        var sumOfAvgRating = 0;
        for (var i = 0; i < forChart.length; i += 3) {
          const x = new Date(forChart[i]);
          const y = forChart[i + 1] / forChart[i + 2];
          sumOfAvgRating += y;
          lineChartDataTemp.push({ x, y });
        }

        setLineChartData(lineChartDataTemp);
        setLastMonth(
          getMonthName(lineChartDataTemp.slice(-1)[0]["x"].getMonth())
        );
        setYear(lineChartDataTemp.slice(-1)[0]["x"].getFullYear());

        const avgRating = sumOfAvgRating / (forChart.length / 3);
        setAvgRating(Number(parseFloat(avgRating).toFixed(2)));
      });
  }, [appName]);

  const topicNames = [
    "Audio",
    "Bugs",
    "Design & UX",
    "Dissatisfied Users",
    "Feature Requests",
    "Performance", //
    "Satisfied Users",
    "Security & Accounts",
    "Sign Up & Login",
    "Update",
    "Use cases",
    "Video",
    "Connectivity",
  ];
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        reviewData,
        loading,
        setLoading,
        appName,
        setAppName,
        topicNames,
        topicMentions,
        positiveOnTopic,
        reviewCount,
        setReviewCount,
        avgRating,
        lineChartData,
        lastMonth,
        year,
        gmeetData,
        zoomData,
        teamsData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
