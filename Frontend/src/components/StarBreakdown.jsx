import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { AiFillStar } from "react-icons/ai";

const StarBreakdown = () => {
  const size = 12;
  const bgcolor = "#ffcc00";
  const starsCount = [0, 0, 0, 0, 0];
  const { reviewData, reviewCount } = useStateContext(0);
  const arrayData = JSON.parse(reviewData);
  arrayData.map((review) => (starsCount[review["rating"] - 1] += 1));

  const Parentdiv = {
    height: `7px`,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 40,
    marginTop: 10,
  };
  return (
    <div>
      <div>
        <div style={Parentdiv}>
          <div
            style={{
              backgroundColor: bgcolor,
              width: `${(100 * starsCount[4]) / reviewCount}%`,
              borderRadius: 40,
              height: "100%",
            }}
          ></div>
        </div>
        <div className="flex justify-between" style={{ fontSize: size }}>
          <p className="flex">
            <AiFillStar className="mt-0.5  text-slate-400" />5
          </p>
          <div className="flex">
            <p className="mr-1">{starsCount[4]}</p>
            <p className="font-bold">
              ({((starsCount[4] * 100) / reviewCount).toFixed(2)} %)
            </p>
          </div>
        </div>
      </div>

      <div>
        <div style={Parentdiv}>
          <div
            style={{
              backgroundColor: bgcolor,
              width: `${(100 * starsCount[3]) / reviewCount}%`,
              borderRadius: 40,
              height: "100%",
            }}
          ></div>
        </div>
        <div className="flex justify-between" style={{ fontSize: size }}>
          <p className="flex">
            <AiFillStar className="mt-0.5 text-slate-400" />4
          </p>
          <div className="flex">
            <p className=" mr-1">{starsCount[3]}</p>
            <p className="font-bold">
              ({((starsCount[3] * 100) / reviewCount).toFixed(2)} %)
            </p>
          </div>
        </div>
      </div>

      <div>
        <div style={Parentdiv}>
          <div
            style={{
              backgroundColor: bgcolor,
              width: `${(100 * starsCount[2]) / reviewCount}%`,
              borderRadius: 40,
              height: "100%",
            }}
          ></div>
        </div>
        <div className="flex justify-between" style={{ fontSize: size }}>
          <p className="flex">
            <AiFillStar className="mt-0.5 text-slate-400" />3{" "}
          </p>
          <div className="flex">
            <p className=" mr-1">{starsCount[2]}</p>
            <p className="font-bold">
              ({((starsCount[2] * 100) / reviewCount).toFixed(2)} %)
            </p>
          </div>
        </div>
      </div>

      <div>
        <div style={Parentdiv}>
          <div
            style={{
              backgroundColor: bgcolor,
              width: `${(100 * starsCount[1]) / reviewCount}%`,
              borderRadius: 40,
              height: "100%",
            }}
          ></div>
        </div>
        <div className="flex justify-between" style={{ fontSize: size }}>
          <p className="flex">
            <AiFillStar className="mt-0.5 text-slate-400" />2
          </p>
          <div className="flex">
            <p className="mr-1">{starsCount[1]}</p>
            <p className="font-bold">
              {" "}
              ({((starsCount[1] * 100) / reviewCount).toFixed(2)} %)
            </p>
          </div>
        </div>
      </div>

      <div>
        <div style={Parentdiv}>
          <div
            style={{
              backgroundColor: bgcolor,
              width: `${(100 * starsCount[0]) / reviewCount}%`,
              borderRadius: 40,
              height: "100%",
            }}
          ></div>
        </div>
        <div className="flex justify-between" style={{ fontSize: size }}>
          <p className="flex">
            <AiFillStar className="mt-0.5 text-slate-400" />1
          </p>
          <div className="flex">
            <p className="mr-1">{starsCount[0]}</p>
            <p className="font-bold">
              ({((starsCount[0] * 100) / reviewCount).toFixed(2)} %)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarBreakdown;
