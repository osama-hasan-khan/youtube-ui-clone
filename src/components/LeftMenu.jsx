import React from "react";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { useContext } from "react";
import { Context } from "../contexts/contextApi";

const LeftMenu = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  return (
    <div className="w-[240px] overflow-y-auto py-4">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <LeftNavMenuItem
                text={item.name}
                icon={<item.icon />}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              {item.border && <hr className="my-5 border-zinc-300" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftMenu;
