import React, { useState, useEffect } from "react";
import { ContextProvider } from "./contexts/ContextProvider";
import Mainscreen from "./pages/Mainscreen";
import gmeet from "./data/Google Meet.jpg";
import zoom from "./data/Zoom Meetings.jpg";
import teams from "./data/Microsoft Teams.jpg";
import "./App.css";
import { LineLoading } from "./components";

const App = () => {
  useEffect(() => {
    document.title = "Review Maestro";
  }, []);
  const [AppInput, setAppInput] = useState("");
  const [appId, setAppId] = useState("");

  const handleOnSelect = (item) => {
    document.getElementById("dark-overlay").style.display = "block";
    setTimeout(() => {
      setAppInput(item.target.name);
    }, 190000);
    setAppId(item.target.id);
  };

  return !AppInput.length ? (
    <div className="">
      <div id="dark-overlay">
        <LineLoading />
      </div>
      <p className="text-7xl flex justify-center mt-28 font-crisis text-slate-600">
        Review Maestro
      </p>

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
      </div>
    </div>
  ) : (
    <ContextProvider>
      <Mainscreen name={AppInput} id={appId} />
    </ContextProvider>
  );
};
export default App;
