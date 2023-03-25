import React from "react";

const ProgressBar = ({ from, count, bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 40,
    marginTop: 20,
  };

  const Childdiv = {
    height: "100%",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  if (from === "sentiment") {
    return (
      <>
        <div style={Parentdiv}>
          <div
            style={{
              ...Childdiv,
              ...{
                backgroundColor: bgcolor[0],
                width: `${(100 * progress[1]) / (progress[0] + progress[1])}%`,
              },
            }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <p>Positive</p>
          <p>
            {progress[1]} ({(100 * progress[1]) / (progress[0] + progress[1])}%)
          </p>
        </div>

        <div style={Parentdiv}>
          <div
            style={{
              ...Childdiv,
              ...{
                backgroundColor: bgcolor[1],
                width: `${(100 * progress[0]) / (progress[0] + progress[1])}%`,
              },
            }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <p>Negative</p>
          <p>
            {progress[0]} ({(100 * progress[0]) / (progress[0] + progress[1])}%)
          </p>
        </div>
      </>
    );
  } else {
    return (
      <div style={Parentdiv}>
        <div style={{ ...Childdiv, ...{ backgroundColor: "blue" } }}></div>
      </div>
    );
  }
};
export default ProgressBar;
