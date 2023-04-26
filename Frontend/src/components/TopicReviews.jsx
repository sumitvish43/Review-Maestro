import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { AiFillNotification, AiFillStar } from "react-icons/ai";

const ReviewListing = ({ topic, reviewData }) => {
  const arrayData = JSON.parse(reviewData);
  const { topicNames, topicMentions } = useStateContext(0);

  return (
    <div className="" id="topic-reviews">
      {topicMentions[topicNames.indexOf(topic)] ? (
        <p className="mt-12 text-xl font-extrabold tracking-tight text-slate-900">
          Reviews of topic "{topic}"
        </p>
      ) : topic ? (
        <p className="flex mt-12 text-xl font-bold tracking-tight text-red-700">
          <AiFillNotification className="mt-0.5 text-red-700 text-2xl" />
          There are no reviews for "{topic}"{" "}
        </p>
      ) : (
        <></>
      )}
      {arrayData.map((review, index) => {
        if (topicNames.indexOf(topic) === review["topics"]) {
          return (
            <div
              key={review["review_id"]}
              className="flex flex-row my-5 rounded-md border-2 p-5"
            >
              <div className="basis-5/8 container mx-auto">
                <p className="flex">
                  {Array(review["rating"])
                    .fill()
                    .map((item, i) => {
                      return (
                        <AiFillStar className="mt-0.5 text-gold text-xl" />
                      );
                    })}
                </p>
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
                <p className="my-1">Topic: {topicNames[review["topics"]]}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default ReviewListing;
