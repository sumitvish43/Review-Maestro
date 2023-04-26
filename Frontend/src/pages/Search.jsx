import React, { useState } from "react";
import { Route } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import App from "../App";
import { ContextProvider } from "../contexts/ContextProvider";
import gmeet from "../data/Google Meet.jpg";
import zoom from "../data/Zoom Meetings.jpg";
import teams from "../data/Microsoft Teams.jpg";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [appId, setAppId] = useState("");
  const apps = [
    { name: "Microsoft Teams", id: "com.microsoft.teams" },
    { name: "Zoom Meetings", id: "us.zoom.videomeetings" },
    { name: "Google Meet", id: "com.google.android.apps.tachyon" },
  ];

  if (searchInput.length > 0) {
    apps.filter((app) => {
      return app.name.match(searchInput);
    });
  }
  const handleOnSelect = (item) => {
    setSearchInput(item.target.name);
    setAppId(item.target.id);
  };

  return !searchInput.length ? (
    <div className="">
      <p className="text-7xl flex justify-center mt-28 font-crisis text-slate-600">
        Review Maestro
      </p>
      {/*<div className="flex justify-center mt-20">
        <div className="w-2/4">
          <ReactSearchAutocomplete
            maxResults={5}
            items={apps}
            fuseOptions={{ keys: ["name"] }} // Search on both fields
            resultStringKeyName="name" // String to display in the results
            onSelect={handleOnSelect}
            showIcon={false}
            placeholder="Search for an app here"
            styling={{
              hoverBackgroundColor: "lightgray",
              color: "#444",
              fontSize: "16px",
              iconColor: "#444",
              lineColor: "lightgray",
              placeholderColor: "#aaa",
              clearIconMargin: "3px 8px 0 0",
              width: "50px",
            }}
          />
        </div>
      </div>*/}
      <div className="flex justify-center mt-20">
        <div className="flex justify-center items-center w-48 h-48 mx-12 rounded-tl-xl rounded-br-xl">
          <img
            src={gmeet}
            alt="Gmeet"
            name="Google Meet"
            id="com.google.android.apps.tachyon"
            onClick={handleOnSelect}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="flex justify-center items-center pt-12 w-40 h-40 mx-12 rounded-tr-xl rounded-bl-xl">
          <img
            src={zoom}
            alt="Zoom"
            name="Zoom Meetings"
            id="us.zoom.videomeetings"
            onClick={handleOnSelect}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="flex justify-center items-center w-48 h-48 mx-12 rounded-tl-xl rounded-br-xl">
          <img
            src={teams}
            alt="Teams"
            name="Microsoft Teams"
            id="com.microsoft.teams"
            onClick={handleOnSelect}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* <div className="flex justify-center items-center w-48 h-48 mx-12 bg-blue-400 rounded-tr-xl rounded-bl-xl">
          <p className="font-bold text-white">Summarize</p>
        </div> */}
      </div>
    </div>
  ) : (
    <ContextProvider>
      <App name={searchInput} id={appId} />
    </ContextProvider>
  );
};
export default Search;
