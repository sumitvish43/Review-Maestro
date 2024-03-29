import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const LineDistribution = ({ total, positives, key }) => {
  const Parentdiv = {
    height: `6px`,
    width: "75%",
    borderRadius: 40,
    marginTop: 20,
    marginLeft: 28,
  };
  return total ? (
    <div style={Parentdiv} className="flex ml-12 bottom-2.5 relative">
      <div
        style={{
          backgroundColor: "#39c38e",
          width: `${(positives / total) * 100}%`,
          borderRadius: 40,
          height: "100%",
          cursor: "pointer",
        }}
        id={`positive-tooltip-${positives}`}
      >
        <ReactTooltip
          anchorId={`positive-tooltip-${positives}`}
          place="bottom"
          content={`${positives} (${((positives / total) * 100).toFixed(2)}%)`}
        />
        <ReactTooltip
          anchorId={`negative-tooltip-${total - positives}`}
          place="bottom"
          content={`${total - positives} (${(
            ((total - positives) / total) *
            100
          ).toFixed(2)}%)`}
        />
        <span></span>
      </div>
      <div
        style={{
          color: "red",
          backgroundColor: "#ff453c",
          width: `${((total - positives) / total) * 100}%`,
          borderRadius: 40,
          height: "100%",
          cursor: "pointer",
        }}
        id={`negative-tooltip-${total - positives}`}
      >
        <span></span>
      </div>
    </div>
  ) : (
    <div
      style={{
        height: `6px`,
        width: "75%",
        backgroundColor: "#ccc",
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 28,
      }}
      className="bottom-2.5 relative"
    >
      <span></span>
    </div>
  );
};
export default LineDistribution;
