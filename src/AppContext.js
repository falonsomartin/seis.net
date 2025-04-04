import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio"); // Estado para la sección activa

  const toggleNav = () => setToggle((prevToggle) => !prevToggle);

  return (
    <AppContext.Provider value={{ toggle, toggleNav, activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};