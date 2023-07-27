import React, { useState } from "react";

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

const Header = () => {
  // state for tracking search string
  const [searchQuery, setSearchQuery] = useState("");

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

  return <div>Header</div>;
};

export default Header;
