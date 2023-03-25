import React, { useState, useEffect } from "react";
import StarRating from "@pluralsight/ps-design-system-starrating";
import InfiniteScroll from "react-infinite-scroll-component";

const ReviewListing = ({ reviewData }) => {
  const arrayData = JSON.parse(reviewData);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetchData(page);
    }, 500);
  }, [page]);

  const fetchData = (page) => {
    const newItems = arrayData.slice(count, count + 10);
    setCount(count + 10);
    setItems([...items, ...newItems]);
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

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
      {items.map((review, index) => (
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
    // <div key={index}>{item["authorName"]}</div>
  );
};
export default ReviewListing;
