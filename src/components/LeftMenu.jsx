import React from "react";
import { categories, links, shortNavbar } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { useContext } from "react";
import { Context } from "../contexts/contextApi";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  const { selectedCategory, setSelectedCategory, clicked } =
    useContext(Context);

  return (
    <>
      {clicked ? (
        <div className="w-[80px]">
          {shortNavbar.map((navBar) => {
            return (
              <LeftNavMenuItem
                ShortNavIcon={<navBar.icon />}
                ShortNavText={navBar.name}
                clicked={clicked}
              />
            );
          })}
        </div>
      ) : (
        <div className="w-[240px] overflow-y-auto py-4">
          <div className="flex px-5 flex-col">
            {categories.map((item) => {
              return (
                <div>
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
          <span className="px-4 text-sm text-zinc-400">&copy; 2023 Google</span>
        </div>
      )}
    </>
  );
};

export default LeftMenu;
