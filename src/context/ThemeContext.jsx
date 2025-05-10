import { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // Theme options
  const themes = {
    dark: {
      name: 'dark',
      background: 'bg-dark-950',
      text: 'text-white',
      accent: 'accent',
    },
    light: {
      name: 'light',
      background: 'bg-white',
      text: 'text-dark-950',
      accent: 'primary',
    },
    artistic: {
      name: 'artistic',
      background: 'bg-dark-900',
      text: 'text-gold-300',
      accent: 'gold',
    }
  };

  // Default theme
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  
  // Toggle between themes
  const toggleTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
      localStorage.setItem('theme', themeName);
    }
  };

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(themes[savedTheme]);
    }
  }, []);

  // Context value
  const value = {
    currentTheme,
    toggleTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
