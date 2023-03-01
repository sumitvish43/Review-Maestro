import React from "react";
import StarRating from "@pluralsight/ps-design-system-starrating";

const ReviewListing = ({ reviewData }) => {
  const arrayData = JSON.parse(reviewData);
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
  return (
    <div className="">
      {arrayData.map((review) => (
        <div
          key={review["review_id"]}
          className="flex flex-row my-5 rounded-md border-2 p-5"
        >
          <div className="basis-5/8 container mx-auto">
            <StarRating className="mt-2" value={review["rating"]} />
            {/^[a-z0-9]/i.test(review["review"]) ? (
              <p className="w-80">{String(review["review"])}</p>
            ) : (
              <p className="w-80">Different language</p>
            )}
          </div>
          <div className="basis-3/4">
            <p>Author: {review["authorName"]}</p>
            <p className="my-1">
              Posted: {String(new Date(review["postedAt"])).slice(0, -30)}
            </p>
            <p className="my-1">
              Sentiment:{" "}
              {review["sentiment"] ? (
                <span className="bg-green-200 px-2 py-1 text-green-500 rounded-md">
                  Positive
                </span>
              ) : (
                <span className="bg-red-200 px-2 py-1 text-red-500 rounded-md">
                  {" "}
                  Negative
                </span>
              )}
            </p>
            <p className="my-1">Topic: {topic_names[review["topics"]]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReviewListing;
