import { React } from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useStateContext } from "../contexts/ContextProvider";

const AvgStar = () => {
  const { avgRating } = useStateContext();
  return (
    <Box
      sx={{
        display: "inline-flex",
        position: "relative",
        cursor: "pointer",
        textAlign: "left",
        color: "#ffcc00",
      }}
    >
      {[...new Array(5)].map((arr, index) => {
        const activeState = avgRating;
        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <Box position="relative">
            <Box
              sx={{
                width: showRatingWithPrecision
                  ? `${(activeState % 1) * 100}%`
                  : "0%",
                overflow: "hidden",
                position: "absolute",
              }}
            >
              <StarIcon />
            </Box>
            <Box>
              {showEmptyIcon ? (
                <StarIcon sx={{ color: "#ccc" }} />
              ) : (
                <StarIcon />
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default AvgStar;
