import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkNodeContext = createContext();

function DarkModePrrovider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-secheme: dark").matches,
    "isDarkMode"
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <DarkNodeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkNodeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkNodeContext);
  if (context === undefined)
    throw new Error("darkmode was uesd outside of darmode provider ");
  return context;
}
DarkModePrrovider.propTypes = {
  children: PropTypes.node,
};
export { DarkModePrrovider, useDarkMode };
