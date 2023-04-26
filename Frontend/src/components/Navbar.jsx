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
    currentMode,
    setScreenSize,
    screenSize,
    appName,
  } = useStateContext();

  const getAppIcon = () => {
    if (appName === "Google Meet") return gmeet;
    if (appName === "Zoom Meetings") return zoom;
    if (appName === "Microsoft Teams") return teams;
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
  );
};

export default Navbar;
