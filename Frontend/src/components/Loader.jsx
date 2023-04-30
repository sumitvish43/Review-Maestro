import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { ThreeCircles, Puff } from "react-loader-spinner";

const PageLoader = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="h-full m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl flex justify-center">
      <ThreeCircles
        height="100"
        width="100"
        color={currentColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
const LineLoading = () => {
  return (
    <div>
      <div className="h-5/12 px-2 flex justify-center mt-64">
        <Puff
          height="90"
          width="90"
          radius={1}
          color="white"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <p className="flex justify-center text-sm mt-12 text-white center">
        This will take a few minutes (estimated time 4 minutes..)
      </p>
    </div>
  );
};
export { PageLoader, LineLoading };
