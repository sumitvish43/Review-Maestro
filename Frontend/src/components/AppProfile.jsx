import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const UserProfile = () => {
  const apps = [
    { name: "Microsoft Teams", id: "com.microsoft.teams" },
    { name: "Zoom Meetings", id: "us.zoom.videomeetings" },
    { name: "Google Meet", id: "com.google.android.apps.tachyon" },
  ];
  const [showModal, setShowModal] = useState(false);
  const { currentColor, appName, setAppName } = useStateContext();
  const [searchInput, setSearchInput] = useState("");
  const [appId, setAppId] = useState("");

  const clickHandler = () => {
    setAppName(searchInput);
    setShowModal(false);
  };

  const handleOnSelect = (item) => {
    setSearchInput(item.name);
    setAppId(item.id);
    console.log(searchInput);
  };

  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Select an app</h3>
              <button
                className="p-1 ml-auto border-0 font-black float-right text-3xl font-semibold"
                onClick={() => setShowModal(false)}
              >
                <span className="text-red-600 h-6 w-6 text-2xl">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="w-full">
                <ReactSearchAutocomplete
                  maxResults={5}
                  items={apps}
                  fuseOptions={{ keys: ["name", "id"] }} // Search on both fields
                  resultStringKeyName="name"
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
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <Link to="/">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => clickHandler()}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200"></p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        {/* <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        /> */}
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {appName}{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Google Play Store{" "}
          </p>
        </div>
      </div>

      <div className="mt-5">
        {/* <Button
          color="white"
          bgColor={currentColor}
          text="CHANGE APP"
          borderRadius="10px"
          width="full"
        /> */}
        {/* <Link to="/search" onClick={clickHandler}> */}
        <button
          className="w-full rounded-xl text-red-400 font-bold"
          onClick={() => setShowModal(true)}
        >
          CHANGE APP
        </button>
        {/* </Link> */};
      </div>
    </div>
  );
};

export default UserProfile;
