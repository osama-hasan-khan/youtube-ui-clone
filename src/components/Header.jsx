import React, { useState, useContext } from "react";

// react router packages
import { Link, useLocation, useNavigate } from "react-router-dom";

// images
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

// icons
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

// import conrext api
import { Context } from "../contexts/contextApi";

const Header = () => {
  // state for tracking search string
  const [searchQuery, setSearchQuery] = useState("");

  // using contex api in header component 
  const { mobileMenu, setMobileMenu } = useContext(Context);

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

  return <div className="">Header</div>;
};

export default Header;
