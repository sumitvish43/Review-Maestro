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
  const [avgRating, setAvgRating] = useState(0);
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/predict?for=${children.props.id}`)
      .then((res) => res.json())
      .then((reviewData) => {
        setReviewData(reviewData);
        setLoading(false);
        const arrayData = JSON.parse(reviewData);
        setReviewCount(arrayData.length);
        const tempArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        arrayData.map((review) => {
          tempArray[review["topics"]] += 1;
        });
        setTopicMentions(tempArray);

        const ratingByMonth = [];
        console.log(arrayData);
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
          const x = forChart[i];
          const y = forChart[i + 1] / forChart[i + 2];
          sumOfAvgRating += y;
          lineChartDataTemp.push({ x, y });
        }

        setLineChartData(lineChartDataTemp);
        const avgRating = sumOfAvgRating / (forChart.length / 3);
        setAvgRating(Number(parseFloat(avgRating).toFixed(2)));
      });
  }, [appName]);

  const topic_names = [
    "Aesthetics",
    "Compatibility",
    "Cost",
    "Effectiveness",
    "Efficiency",
    "Enjoyability",
    "General",
    "Learnability",
    "Reliability",
    "Safety",
    "Security",
    "Usability",
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
        appName,
        setAppName,
        topicMentions,
        reviewCount,
        setReviewCount,
        avgRating,
        lineChartData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
