import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type themeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<themeContextType>({
  theme: "light",
  toggleTheme: () => null,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    (async () => {
      const themes = localStorage.getItem("theme");
      if (themes === "light") {
        document.body.classList.add("light-theme");
        setTheme("light");
      } else {
        document.body.classList.add("dark-theme");
        setTheme("dark");
      }
    })();
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
