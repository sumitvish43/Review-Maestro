import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const TopicBreakdown = ({ topicMentions }) => {
  const { reviewCount, topicNames } = useStateContext(0);
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
  temp.slice(0, 3).map((num) => {
    mydata.push([topicNames[topicMentions.indexOf(num)], num]);
  });

  const size = 12;
  const bgcolor = "#8E3ABC";
  const Parentdiv = {
    height: `5px`,
    width: "85%",
    backgroundColor: "#ccc",
    borderRadius: 40,
    marginTop: 10,
  };

  return (
    <div className="ml-10 my-5">
      <div>
        <div className="">
          <div style={Parentdiv}>
            <div
              style={{
                backgroundColor: bgcolor,
                width: `${(100 * mydata[0][1]) / reviewCount}%`,
                borderRadius: 40,
                height: "100%",
              }}
            ></div>
          </div>
          <div className="flex justify-between" style={{ fontSize: size }}>
            <p className="text-xs">{mydata[0][0]}</p>
            {/* <div className="flex">
              <p className="mr-1">{mydata[0][1]}</p>
              <p className="font-bold">
                ({((mydata[0][1] * 100) / reviewCount).toFixed(2)} %)
              </p>
            </div> */}
          </div>
        </div>

        <div>
          <div style={Parentdiv}>
            <div
              style={{
                backgroundColor: bgcolor,
                width: `${(100 * mydata[1][1]) / reviewCount}%`,
                borderRadius: 40,
                height: "100%",
              }}
            ></div>
          </div>
          <div className="flex justify-between" style={{ fontSize: size }}>
            <p className="text-xs">{mydata[1][0]}</p>
            <div className="flex">
              {/* <p className="mr-1">{mydata[1][1]}</p> */}
              {/* <p className="font-bold">
                ({((mydata[1][1] * 100) / reviewCount).toFixed(2)} %)
              </p> */}
            </div>
          </div>
        </div>

        <div>
          <div style={Parentdiv}>
            <div
              style={{
                backgroundColor: bgcolor,
                width: `${(100 * mydata[2][1]) / reviewCount}%`,
                borderRadius: 40,
                height: "100%",
              }}
            ></div>
          </div>
          <div className="flex justify-between" style={{ fontSize: size }}>
            <p className="text-xs">{mydata[2][0]}</p>
            <div className="flex">
              {/* <p className="mr-1">{mydata[2][1]}</p> */}
              {/* <p className="font-bold">
                ({((mydata[2][1] * 100) / reviewCount).toFixed(2)} %)
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopicBreakdown;
