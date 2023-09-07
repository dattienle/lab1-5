import React, { useEffect } from "react";
import { useState } from "react";
const themes = {
  dark: {
    backgroundColor: "#222120",
    color: "white",
    borderBottom: "3px solid white",
  },
  light: {
    backgroundColor: "#f8f3ed",
    color: "black",
    borderBottom: "3px solid black",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = React.createContext(initialState);

function ThemProvider({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);
  const theme = dark ? themes.dark : themes.light;
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  return (
    <ThemeContext.Provider value={{ dark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemProvider, ThemeContext };
