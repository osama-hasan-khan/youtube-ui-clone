import { AiFillHome, AiOutlineFlag, AiFillPlayCircle } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BsPlayBtn } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import {CgPlayButtonR} from "react-icons/cg"

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
  { name: "Music", icon: CgMusicNote, type: "category" },
  { name: "Films", icon: FiFilm, type: "category" },
  { name: "Live", icon: MdLiveTv, type: "category" },
  { name: "Gaming", icon: IoGameControllerSharp, type: "category" },
  { name: "News", icon: ImNewspaper, type: "category" },
  { name: "Sports", icon: GiDiamondTrophy, type: "category" },
  { name: "Learning", icon: RiLightbulbLine, type: "category" },
  {
    name: "Fashion & beauty",
    icon: GiEclipse,
    type: "category",
    border: true,
  },
  { name: "Settings", icon: FiSettings, type: "menu" },
  { name: "Report History", icon: AiOutlineFlag, type: "menu" },
  { name: "Help", icon: FiHelpCircle, type: "menu" },
  { name: "Send feedback", icon: RiFeedbackLine, type: "menu" },
];
