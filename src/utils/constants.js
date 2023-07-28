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
