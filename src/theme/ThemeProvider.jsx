import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { roseTheme } from "./themes/rose"
import { mintTheme } from "./themes/mint";
import { coffeeTheme } from "./themes/coffee";
import { lavenderTheme } from "./themes/lavender";

const themes = {
  rose: roseTheme,
  coffee: coffeeTheme,
  mint: mintTheme,
  lavender: lavenderTheme
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }){
  const [currentTheme, setCurrentTheme] = useState("rose");

  useEffect(()=>{
    const theme = themes[currentTheme];

    Object.entries(theme.colors).forEach(([key, value])=>{
      document.documentElement.style.setProperty(
        `--color-${key}`,
        value
      );
    });
  }, [currentTheme]);

  const value = useMemo(()=>{
    return {
      currentTheme,
      setCurrentTheme,
      themes: Object.keys(themes),
    };
  }, [currentTheme]);

  return(
    <ThemeContext.Provider value={value}>
      {children}
      </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}