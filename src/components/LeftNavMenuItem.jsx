import React from "react";

const LeftNavMenuItem = ({
  text,
  icon,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
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
  );
};

export default LeftNavMenuItem;
