import { AiFillHome, AiFillPlayCircle, AiOutlineFlag } from "react-icons/ai";
import { BiMoviePlay, BiShoppingBag } from "react-icons/bi";
import { BsClockHistory, BsFire, BsPlayBtn, BsTrophy } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiHelpCircle, FiSettings, FiYoutube } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuMusic2, LuNewspaper, LuPlayCircle } from "react-icons/lu";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { PiLightbulbBold } from "react-icons/pi";
import { RiFeedbackLine } from "react-icons/ri";
import { SiYoutubemusic, SiYoutubestudio } from "react-icons/si";
import { TbHanger2 } from "react-icons/tb";

export const shortNavbar = [
  {
    name: "Home",
    icon: AiFillHome,
    type: "/",
  },
  { name: "Shorts", icon: AiFillPlayCircle, type: "category" },
  { name: "Subscriptions", icon: BsPlayBtn, type: "category" },
  {
    name: "Music",
    icon: SiYoutubemusic,
    type: "category",
  },
  { name: "Library", icon: CgPlayButtonR, type: "category" },
  { name: "Downloads", icon: LiaDownloadSolid, type: "downloads" },
];

export const categories = [
  { name: "Home", icon: AiFillHome, type: "home" },
  { name: "Shorts", icon: AiFillPlayCircle, type: "category" },
  { name: "Subscriptions", icon: BsPlayBtn, type: "category" },
  {
    name: "YouTube Music",
    icon: SiYoutubemusic,
    type: "category",
    border: true,
  },

  { name: "Library", icon: CgPlayButtonR, type: "category" },
  { name: "History", icon: FaClockRotateLeft, type: "category" },
  { name: "Your ideos", icon: LuPlayCircle, type: "category" },
  { name: "Watch ater", icon: BsClockHistory, type: "category" },
  { name: "Downloads", icon: LiaDownloadSolid, type: "category", border: true },

  { name: "Trending", icon: BsFire, type: "category" },
  { name: "Shopping", icon: BiShoppingBag, type: "category" },
  { name: "Music", icon: LuMusic2, type: "category" },
  { name: "Movies", icon: BiMoviePlay, type: "category" },
  { name: "Live", icon: MdOutlineWifiTetheringErrorRounded, type: "category" },
  { name: "Gaming", icon: GiConsoleController, type: "category" },
  { name: "News", icon: LuNewspaper, type: "category" },
  { name: "Sports", icon: BsTrophy, type: "category" },
  { name: "Learning", icon: PiLightbulbBold, type: "category" },
  { name: "Fashion", icon: TbHanger2, type: "category", border: true },

  { name: "YouTube Studio", icon: SiYoutubestudio, type: "category" },
  { name: "YouTube Music", icon: SiYoutubemusic, type: "category" },
  { name: "YouTube Kids", icon: FiYoutube, type: "category", border: true },

  { name: "Settings", icon: FiSettings, type: "menu" },
  { name: "Report History", icon: AiOutlineFlag, type: "menu" },
  { name: "Help", icon: FiHelpCircle, type: "menu" },
  { name: "Send feedback", icon: RiFeedbackLine, type: "menu", border: true },
];

export const links = [
  [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creator",
    "Advertise",
    "Developers",
  ],
  [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ],
];

export const feedVideos = [
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/mv9afG2Dm9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuJe6KNUpfXqLkjFhV1MXptflw_g",
    channelName: "Marques Brownlee",
    title: "I Said Yes to Every Email for a Month!",
    viewCount: 2139763,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/0fYi8SGA20k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLCUEInAbtbBc8mA81bGvYB0UYeg",
    channelName: "JavaScript Mastery",
    title: "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS",
    viewCount: 72421,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/ODJkKJUnKtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Uw2cfdBboAqP6kMuuhJXKH88vQ",
    channelName: "Theo - t3.gg",
    title: "I Ship This Tech EVERY Day - My 2023 Stack",
    viewCount: 32981,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/bK1g9bPHUTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnbtWfieWs7hdk0P4CbahEi7dnYg",
    channelName: "Einzelgänger",
    title: "Live More by Doing Less | The Philosophy of Slow Living",
    viewCount: 120391,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/iILFBGm_I9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUZRE00ZdYK6km87GA69K6a8-zfA",
    channelName: "AsmrProg",
    title: "ASMR Programming - Weather App With JavaScript - No Talking",
    viewCount: 501492,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/Rn2-eiuZGL4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTS7wfztaIWS0f3unP0kkqBQuqg",
    channelName: "Better Ideas",
    title: "Simple tweaks for effortless self-improvement",
    viewCount: 113482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/6NJfd2nHL_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkX0hCE7fzL6GUD_JDwxNwspGE2A",
    channelName: "Hannah Pak",
    title: "My first time living alone 📍 New York City",
    viewCount: 1564274,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g",
    channelName: "Fireship",
    title: "7 better ways to create a React app",
    viewCount: 297482,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/eP4eqhWc7sI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF1KMj6wSoPyzLWRSlxLcFYx35rQ",
    channelName: "Lana Del Rey",
    title: "Lana Del Rey - Lust For Life (Official Video) ft. The Weeknd",
    viewCount: 203784982,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/HpzwQZTcFBA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACbqLbrdilVpkBUNaamvHIf4bUFw",
    channelName: "Lex Clips",
    title: "Lex Fridman on smartest people he's ever met",
    viewCount: 550929,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/3L4m5ZMzf3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3k4XyUl3vxN990AQWa9Db5Nf0QA",
    channelName: "Harry Styles",
    title: "Harry Styles - Zane Lowe & Apple Music 'Harry's House' Interview",
    viewCount: 4567382,
    createdAt: new Date(),
  },
  {
    thumbnailUrl:
      "https://i.ytimg.com/vi/9qM7uX5MpwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb40oFZUL1WalK6ja05_MMUJPpNg",
    channelName: "Aperture",
    title: "Dating Apps are More Dangerous Than You Think",
    viewCount: 5382594,
    createdAt: new Date(),
  },
];
