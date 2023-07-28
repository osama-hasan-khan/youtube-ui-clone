import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProviver = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Context.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};
