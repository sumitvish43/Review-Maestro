import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import gmeet from "../data/Google Meet.jpg";
import zoom from "../data/Zoom Meetings.jpg";
import teams from "../data/Microsoft Teams.jpg";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    setScreenSize,
    screenSize,
    appName,
    setAppName,
  } = useStateContext();

  const getAppIcon = () => {
    if (appName === "Google Meet") return gmeet;
    if (appName === "Zoom Meetings") return zoom;
    if (appName === "Microsoft Teams") return teams;
  };
  const getOtherAppIcon1 = () => {
    if (appName === "Google Meet") return zoom;
    if (appName === "Zoom Meetings") return gmeet;
    if (appName === "Microsoft Teams") return gmeet;
  };
  const getOtherAppIcon2 = () => {
    if (appName === "Google Meet") return teams;
    if (appName === "Zoom Meetings") return teams;
    if (appName === "Microsoft Teams") return zoom;
  };
  const appClickHandler = (e) => {
    setAppName(e.target.id);
  };

  const getAppName1 = () => {
    if (appName === "Google Meet") return "Zoom Meetings";
    if (appName === "Zoom Meetings") return "Google Meet";
    if (appName === "Microsoft Teams") return "Google Meet";
  };
  const getAppName2 = () => {
    if (appName === "Google Meet") return "Microsoft Teams";
    if (appName === "Zoom Meetings") return "Microsoft Teams";
    if (appName === "Microsoft Teams") return "Zoom Meetings";
  };
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <div className="mx-2 cursor-pointer" onClick={appClickHandler}>
          <img
            className="rounded-full w-12 h-12"
            src={getOtherAppIcon1()}
            alt="App Icon"
            id={getAppName1()}
          />
        </div>

        <div className="mx-2" onClick={appClickHandler}>
          <img
            className="rounded-full w-12 h-12 cursor-pointer"
            src={getOtherAppIcon2()}
            alt="App Icon"
            id={getAppName2()}
          />
        </div>

        <div className="flex ml-8" id="active">
          <img
            className="rounded-full w-12 h-12"
            src={getAppIcon()}
            alt="App Icon"
          />
          <p className="mt-2 px-3 text-lg font-bold" style={{ color: "#888" }}>
            {appName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
