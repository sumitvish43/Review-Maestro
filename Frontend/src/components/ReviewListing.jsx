import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";

const ReviewListing = () => {
  const { appName, topicNames, reviewData, gmeetData, zoomData, teamsData } =
    useStateContext(0);
  const [currentData, setCurrentData] = useState(reviewData);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [appChange, setAppChange] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData(page);
    }, 500);
  }, [page]);

  useEffect(() => {
    appChange ? setAppChange(false) : setAppChange(true);
    if (appName === "Microsoft Teams") setCurrentData(teamsData);
    if (appName === "Zoom Meetings") setCurrentData(zoomData);
    if (appName === "Google Meet") setCurrentData(gmeetData);
    setCount(0);
    setPage(1);
    fetchData(page);
  }, [appName]);

  const fetchData = (page) => {
    const arrayData = JSON.parse(currentData);
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

  return (
    <div className="">
      {items.map((review, index) => (
        <div
          key={review["review_id"]}
          className="flex flex-row my-5 rounded-md border-2 p-5"
        >
          <div className="basis-5/8 container mx-auto">
            <p className="flex">
              {Array(review["rating"])
                .fill()
                .map((item, i) => {
                  return <AiFillStar className="mt-0.5 text-gold text-xl" />;
                })}
            </p>
            {/^[a-z0-9]/i.test(review["review"]) ? (
              <p className="w-80">{String(review["review"])}</p>
            ) : (
              <p className="w-80 italic text-xs">
                ~This review is not in English language~
              </p>
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
      ))}
    </div>
  );
};
export default ReviewListing;
