import React from "react";
import { categories, links } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { useContext } from "react";
import { Context } from "../contexts/contextApi";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  return (
    <div className="w-[260px] overflow-y-auto py-4">
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
        <ul className="flex gap-2 flex-wrap">
          {links[0].map((link) => {
            return (
              <Link>
                <li className="color-[#737373] text-sm">{link}</li>
              </Link>
            );
          })}
          <ul className="flex gap-2 flex-wrap">
            {links[1].map((link) => {
              return (
                <Link>
                  <li className="color-[#737373] text-sm">{link}</li>
                </Link>
              );
            })}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
