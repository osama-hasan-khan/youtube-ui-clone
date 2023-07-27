import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProviver = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Context.Provider value={{ mobileMenu, setMobileMenu }}>
      {children}
    </Context.Provider>
  );
};
