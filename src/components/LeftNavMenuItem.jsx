import React from "react";
import { Link } from "react-router-dom";

const LeftNavMenuItem = ({
  text,
  icon,
  selectedCategory,
  setSelectedCategory,
  clicked,
  ShortNavIcon,
  ShortNavText,
  ShortNavLink,
}) => {
  return (
    <>
      {clicked ? (
        <div
          className={`flex flex-col h-[70px] px-3 justify-center items-center cursor-pointer rounded-lg hover:bg-zinc-100 ${
            ShortNavText === selectedCategory ? "bg-zinc-200" : ""
          }`}
          onClick={() => setSelectedCategory(ShortNavText)}
        >
          <Link to={`/${ShortNavLink}`} className="text-xl">
            {ShortNavIcon}
          </Link>
          <Link className="text-[11px]">{ShortNavText}</Link>
        </div>
      ) : (
        <div
          className={`text-black text-sm cursor-pointer h-10 font-semibold
         flex items-center px-3 mb-[1px] rounded-lg hover:bg-zinc-100 ${
           text === selectedCategory ? "bg-zinc-200" : ""
         }`}
          onClick={() => setSelectedCategory(text)}
        >
          <div className="text-xl mr-5">{icon}</div>
          {text}
        </div>
      )}
    </>
  );
};

export default LeftNavMenuItem;
