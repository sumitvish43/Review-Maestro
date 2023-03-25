import React from "react";

const ProgressBar = ({ from, bgcolor, progress, height }) => {
  var size = 14;
  if (from === "sentiment") {
    height = 12;
  } else {
    height = 6;
    size = 12;
  }

  const Parentdiv = {
    height: `${height}px`,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 40,
    marginTop: 20,
  };

  return (
    <>
      <div style={Parentdiv}>
        <div
          style={{
            backgroundColor: bgcolor[0],
            width: `${(100 * progress[1]) / (progress[0] + progress[1])}%`,
            borderRadius: 40,
            height: "100%",
          }}
        ></div>
      </div>
      <div className="flex justify-between" style={{ fontSize: size }}>
        <p>Positive</p>
        <p>
          {progress[1]} (
          {((100 * progress[1]) / (progress[0] + progress[1])).toFixed(2)}%)
        </p>
      </div>

      <div style={Parentdiv}>
        <div
          style={{
            backgroundColor: bgcolor[1],
            width: `${(100 * progress[0]) / (progress[0] + progress[1])}%`,
            borderRadius: 40,
            height: "100%",
          }}
        ></div>
      </div>
      <div className="flex justify-between" style={{ fontSize: size }}>
        <p>Negative</p>
        <p>
          {progress[0]} (
          {((100 * progress[0]) / (progress[0] + progress[1])).toFixed(2)}%)
        </p>
      </div>
    </>
  );
};
export default ProgressBar;
