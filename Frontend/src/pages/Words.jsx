import React from "react";
import { Header } from "../components";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { data } from "../data/dummy";
import ReactWordcloud from "react-wordcloud";

const Words = () => {
  const words = [
    {
      text: "told",
      value: 640,
    },
    {
      text: "mistake",
      value: 110,
    },
    {
      text: "thought",
      value: 160,
    },
    {
      text: "bad",
      value: 170,
    },
  ];
  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Clustering of words" title="Word Cloud" />
      {/* <WordCloud
        data={data}
        width={500}
        height={250}
        font="Times"
        fontStyle="italic"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 4}
        spiral="rectangular"
        rotate={(word) => word.value % 360}
        padding={4}
        random={Math.random}
        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      /> */}
      <ReactWordcloud words={words} size={[800, 400]} />
    </div>
  );
};

export default Words;
