import React from "react";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { useContext } from "react";
import { Context } from "../contexts/contextApi";

const LeftMenu = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  return (
    <div
      className="md:block w-[240px] overflow-y-auto
  h-full py-4 translate-x-[240px] md:translate-x-0 transition-all"
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <LeftNavMenuItem
                text={item.name}
                icon={<item.icon />}
                selectedCategory={selectedCategory}
              />
              {item.border && <hr className="my-5 border-zinc-300" />}
            </div>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-black text-[12px]">YouTube UI Clone</div>
      </div>
    </div>
  );
};

export default LeftMenu;
