import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { ThreeCircles, FallingLines } from "react-loader-spinner";

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
  const { currentColor } = useStateContext();
  return (
    <div className="h-full px-2 bg-white rounded-3xl flex justify-center">
      <FallingLines
        color={currentColor}
        width="25"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
export { PageLoader, LineLoading };
