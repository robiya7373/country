import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const Dark = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, handleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Dark;
