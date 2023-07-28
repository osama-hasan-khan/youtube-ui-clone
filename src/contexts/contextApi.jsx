import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProviver = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <Context.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        selectedCategory,
        setSelectedCategory,
        clicked,
        setClicked,
      }}
    >
      {children}
    </Context.Provider>
  );
};
