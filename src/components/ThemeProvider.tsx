'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values instead of throwing during SSR
    return {
      theme: 'light' as Theme,
      setTheme: () => {},
      resolvedTheme: 'light' as Theme,
    };
  }
  return context;
};

export const useThemeStyles = () => {
  const { theme } = useTheme();
  
  return {
    primaryBg: theme === 'dark' ? 'rgb(4, 7, 17)' : '#ffffff',
    cardBg: theme === 'dark' ? 'rgb(18, 24, 39)' : '#ffffff',
    primaryText: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)',
    primaryBorder: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
  };
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  const applyTheme = (theme: Theme) => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;
      
      // NUCLEAR OPTION: Force clear all classes
      html.className = '';
      
      // Add our theme class IMMEDIATELY
      html.classList.add(theme);
      
      // Force color-scheme on both html AND body with !important
      html.style.colorScheme = theme;
      html.style.setProperty('color-scheme', theme, 'important');
      body.style.colorScheme = theme;
      body.style.setProperty('color-scheme', theme, 'important');
      
      // Store in localStorage
      localStorage.setItem('theme', theme);
      
      // Add data attributes for additional targeting
      html.setAttribute('data-theme', theme);
      html.setAttribute('data-force-theme', 'true');
      html.setAttribute('data-theme-override', 'true');
      body.setAttribute('data-theme', theme);
      body.setAttribute('data-force-theme', 'true');
      
      // EXTREME MEASURE: Dynamic CSS injection with !important
      const forceStyleId = 'force-theme-override';
      let forceStyle = document.getElementById(forceStyleId) as HTMLStyleElement;
      
      if (!forceStyle) {
        forceStyle = document.createElement('style');
        forceStyle.id = forceStyleId;
        document.head.appendChild(forceStyle);
      }
      
      // AGGRESSIVE CSS with !important to override EVERYTHING
      forceStyle.textContent = `
        html, html[data-theme-override="true"] {
          color-scheme: ${theme} !important;
        }
        body, body[data-theme-override="true"] {
          color-scheme: ${theme} !important;
        }
        *, *[data-theme-override="true"] {
          color-scheme: ${theme} !important;
        }
        
        /* Override system preference media queries */
        @media (prefers-color-scheme: dark) {
          html[data-theme="light"], html[data-theme="light"] *,
          body[data-theme="light"], body[data-theme="light"] * {
            color-scheme: light !important;
          }
        }
        
        @media (prefers-color-scheme: light) {
          html[data-theme="dark"], html[data-theme="dark"] *,
          body[data-theme="dark"], body[data-theme="dark"] * {
            color-scheme: dark !important;
          }
        }
        
        /* Specific Tailwind dark mode overrides */
        html.dark {
          color-scheme: dark !important;
        }
        html.light {
          color-scheme: light !important;
        }
      `;
    }
  };

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  useEffect(() => {
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    setCurrentTheme(storedTheme);
    applyTheme(storedTheme);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  const contextValue: ThemeContextType = {
    theme: currentTheme,
    setTheme,
    resolvedTheme: currentTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}