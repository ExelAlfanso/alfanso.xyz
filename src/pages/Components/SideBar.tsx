import React from "react";
import { navigationItems } from "../../Datas/navbarDatas.ts";
import { Link } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
  return (
    <>
      {navigationItems.map((navItem, index) => {
        return (
          <button
            key={index}
            className={`cursor-pointer fixed right-0 top-0 h-full w-80 hover:scale-110 text-accent hover:text-accent-two transition-transform duration-500 ${
              navItem.bg
            } ${isOpen ? navItem.translate : "translate-x-full"}`}
          >
            <h1 className="-rotate-90 origin-top-left z-10 absolute top-180 text-[3rem] font-accent">
              {`<<<<<<${navItem.label.toUpperCase()}>>>>>>`}
            </h1>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
