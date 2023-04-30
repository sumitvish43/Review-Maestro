import React from "react";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { contextMenuItems, topicGrid } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Loader } from "../pages";

const Topics = () => {
  const { topicMentions, loading, reviewCount, currentColor } =
    useStateContext();

  const topicData = [
    {
      TopicName: "Use Cases",
      Mentions: topicMentions[0],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[0] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Performance",
      Mentions: topicMentions[1],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[1] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Audio",
      Mentions: topicMentions[2],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[2] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Video",
      Mentions: topicMentions[3],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[3] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Feature Requests",
      Mentions: topicMentions[4],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[4] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "connectivity",
      Mentions: topicMentions[5],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[5] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Design & UX",
      Mentions: topicMentions[6],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[6] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Bugs",
      Mentions: topicMentions[7],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[7] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Security Accounts",
      Mentions: topicMentions[8],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[8] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Sign Up & Login",
      Mentions: topicMentions[9],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[9] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    },
    {
      TopicName: "Update",
      Mentions: topicMentions[10],
      Sentiment: "-",
      Mentionpercent: ((topicMentions[10] / reviewCount) * 100).toFixed(2),
      MentionpercentBg: currentColor,
    }
  ];

  return loading ? (
    <Loader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Extraction of topics" title="Topics" />
      <div>
        <GridComponent
          id="gridcomp"
          dataSource={topicData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {topicGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      </div>
    </div>
  );
};

export default Topics;
