import React from "react";

const Slider = () => {
  const slides = [
    "All",
    "Mixes",
    "Music",
    "Gaming",
    "Css",
    "Debates",
    "Python",
    "C++",
    "Memes",
    "Live",
    "Gadgets",
    "Podcasts",
    "Presentation",
    "Comedy",
    "Electronic",
    "Recently Uploaded",
    "Watched",
    "New to You",
  ];
  return (
    <div className="sticky top-0 flex flex-row px-2 py-4 overflow-x-scroll gap-3 bg-white shadow-sm">
      {[...slides].map((item) => {
        return <div className="bg-zinc-100 rounded-md">{item}</div>;
      })}
    </div>
  );
};

export default Slider;
