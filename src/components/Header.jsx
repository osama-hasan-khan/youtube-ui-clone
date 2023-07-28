import React, { useState, useContext } from "react";

// react router packages
import { Link, useNavigate } from "react-router-dom";

// icons
import { HiOutlineMenu } from "react-icons/hi";
import { BsBell, BsCameraVideo, BsYoutube } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BsMicFill } from "react-icons/bs";

// import conrext api
import { Context } from "../contexts/contextApi";

const Header = () => {
  // state for tracking search string
  const [searchQuery, setSearchQuery] = useState("");

  // using contex api in header component
  const { clicked, setClicked } = useContext(Context);

  // toggle short navbar
  const toggleNav = () => {
    setClicked(!clicked);
  };

  // to navigate the search pages
  const navigate = useNavigate();

  // function for search on youtube
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery.length > 0
    ) {
      navigate(`searchResult/${searchQuery}`);
    }
  };

  // mobile menu and using toggle state created by context api
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="sticky top-0 flex justify-between items-center h-14 px-4 md:px-7 shadow-sm">
      {/* logo */}
      <div className="flex items-center gap-6">
        <div className="flex items-center p-2 rounded-full hover:bg-zinc-200 cursor-pointer">
          <HiOutlineMenu size={26} onClick={toggleNav} />
        </div>
        <div>
          <Link to="/" className="flex items-center gap-1">
            <BsYoutube size={30} className="text-red-600/90" />
            <span className="text-xl">YouTube</span>
          </Link>
        </div>
      </div>

      {/* input bar */}
      <div className="hidden md:flex gap-3 min-w-[300px] lg:w-[670px]">
        <div className="flex w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full px-4 border-[1px] border-zinc-200 focus:border-blue-600
             rounded-tl-full rounded-bl-full focus:outline-none placeholder:text-zinc-400"
            onKeyUp={searchQueryHandler}
          />
          <button
            onClick={() => searchQueryHandler("searchButton")}
            className="flex items-center px-5 py-3 border-[1px] border-zinc-200 rounded-tr-full rounded-br-full"
          >
            <BiSearch size={22} />
          </button>
        </div>
        <div className="flex items-center p-4 rounded-full bg-zinc-100 hover:bg-zinc-200 cursor-pointer">
          <BsMicFill />
        </div>
      </div>

      {/* user icons */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex items-center p-3 rounded-full hover:bg-zinc-200 cursor-pointer">
            <BsCameraVideo size={22} />
          </div>
          <div className="flex items-center p-3 rounded-full hover:bg-zinc-200 cursor-pointer">
            <BsBell size={22} />
          </div>
          <div className="cursor-pointer">
            <img
              src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
