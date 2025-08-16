'use client';

import React, { useEffect, useState, createContext, useContext } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  resolvedTheme: string;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  resolvedTheme: 'light',
});

export const useTheme = () => useContext(ThemeContext);

// Helper hook for components to get inline styles as fallback
export const useThemeStyles = () => {
  const { theme } = useTheme();
  
  return {
    // Background styles
    primaryBg: theme === 'dark' ? 'rgb(4, 7, 17)' : '#ffffff',
    secondaryBg: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)',
    transparentBg: theme === 'dark' ? 'rgba(4, 7, 17, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    
    // Text styles
    primaryText: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)',
    secondaryText: theme === 'dark' ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
    
    // Border styles
    primaryBorder: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
    secondaryBorder: theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(209, 213, 219)',
    
    // Component-specific styles
    cardBg: theme === 'dark' ? 'rgb(18, 24, 39)' : '#ffffff',
    buttonBg: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)',
    
    // Get style object for any element
    getStyles: (type: 'card' | 'button' | 'nav' | 'text' | 'border') => {
      switch (type) {
        case 'card':
          return {
            backgroundColor: theme === 'dark' ? 'rgb(18, 24, 39)' : '#ffffff',
            borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'button':
          return {
            backgroundColor: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)',
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'nav':
          return {
            backgroundColor: theme === 'dark' ? 'rgba(4, 7, 17, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'text':
          return {
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'border':
          return {
            borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)'
          };
        default:
          return {};
      }
    }
  };
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  const applyTheme = (theme: string) => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;
      
      // NUCLEAR OPTION: Force clear all classes
      html.className = '';
      
      // Add our theme class IMMEDIATELY
      html.classList.add(theme);
      
      // Force color-scheme override on both html and body
      html.style.colorScheme = theme;
      html.style.setProperty('color-scheme', theme, 'important');
      body.style.setProperty('color-scheme', theme, 'important');
      
      // Store in localStorage
      localStorage.setItem('evolve-link-theme', theme);
      
      // Add aggressive override attributes
      html.setAttribute('data-theme', theme);
      html.setAttribute('data-force-theme', theme);
      body.setAttribute('data-theme', theme);
      
      // Force Tailwind to recognize the theme change
      html.setAttribute('class', theme);
      
      // Inject super aggressive style override
      let styleEl = document.getElementById('force-theme-override');
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'force-theme-override';
        document.head.appendChild(styleEl);
      }
      
      const oppositeTheme = theme === 'dark' ? 'light' : 'dark';
      
      styleEl.textContent = `
        /* Force immediate theme application */
        html { color-scheme: ${theme} !important; }
        html.${theme} { color-scheme: ${theme} !important; }
        body { color-scheme: ${theme} !important; }
        
        /* Force Tailwind dark mode */
        ${theme === 'dark' ? `
          .dark\\:bg-\\[\\#040711\\]\\/90 { background-color: rgba(4, 7, 17, 0.9) !important; }
          .dark\\:bg-\\[\\#040711\\] { background-color: rgb(4, 7, 17) !important; }
          .dark\\:bg-\\[\\#121827\\] { background-color: rgb(18, 24, 39) !important; }
          .dark\\:text-white { color: rgb(255, 255, 255) !important; }
          .dark\\:border-primary { border-color: #4fa58c !important; }
          .dark\\:hover\\:bg-primary\\/20:hover { background-color: rgba(79, 165, 140, 0.2) !important; }
          .dark\\:hover\\:text-primary:hover { color: #4fa58c !important; }
        ` : `
          .bg-white\\/90 { background-color: rgba(255, 255, 255, 0.9) !important; }
          .text-gray-900 { color: rgb(17, 24, 39) !important; }
          .border-gray-200 { border-color: rgb(229, 231, 235) !important; }
          .bg-gray-100 { background-color: rgb(243, 244, 246) !important; }
          .hover\\:bg-gray-200:hover { background-color: rgb(229, 231, 235) !important; }
        `}
        
        /* Override system preferences completely */
        @media (prefers-color-scheme: dark) {
          html:not(.dark) { color-scheme: light !important; }
        }
        @media (prefers-color-scheme: light) {
          html.dark { color-scheme: dark !important; }
        }
        
        /* Force all elements to respect our theme */
        * { color-scheme: ${theme} !important; }
      `;
      
      // Force a reflow to apply changes immediately
      html.offsetHeight;
      
      // Trigger a small delay to ensure Tailwind picks up the changes
      setTimeout(() => {
        html.setAttribute('data-theme-applied', theme);
      }, 10);
    }
  };

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  useEffect(() => {
    // Get initial theme
    const storedTheme = localStorage.getItem('evolve-link-theme') || 'light';
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

    secondaryBg: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)',
    transparentBg: theme === 'dark' ? 'rgba(4, 7, 17, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    
    // Text styles
    primaryText: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)',
    secondaryText: theme === 'dark' ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
    
    // Border styles
    primaryBorder: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
    secondaryBorder: theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(209, 213, 219)',
    
    // Component-specific styles
    cardBg: theme === 'dark' ? 'rgb(18, 24, 39)' : '#ffffff',
    buttonBg: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)',
    
    // Get style object for any element
    getStyles: (type: 'card' | 'button' | 'nav' | 'text' | 'border') => {
      switch (type) {
        case 'card':
          return {
            backgroundColor: theme === 'dark' ? 'rgb(18, 24, 39)' : '#ffffff',
            borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'button':
          return {
            backgroundColor: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)',
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'nav':
          return {
            backgroundColor: theme === 'dark' ? 'rgba(4, 7, 17, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)',
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'text':
          return {
            color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)'
          };
        case 'border':
          return {
            borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)'
          };
        default:
          return {};
      }
    }
  };
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  const applyTheme = (theme: string) => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;
      
      // NUCLEAR OPTION: Force clear all classes
      html.className = '';
      
      // Add our theme class IMMEDIATELY
      html.classList.add(theme);
      
      // Force color-scheme override on both html and body
      html.style.colorScheme = theme;
      html.style.setProperty('color-scheme', theme, 'important');
      body.style.setProperty('color-scheme', theme, 'important');
      
      // Store in localStorage
      localStorage.setItem('evolve-link-theme', theme);
      
      // Add aggressive override attributes
      html.setAttribute('data-theme', theme);
      html.setAttribute('data-force-theme', theme);
      body.setAttribute('data-theme', theme);
      
      // Force Tailwind to recognize the theme change
      html.setAttribute('class', theme);
      
      // Inject super aggressive style override
      let styleEl = document.getElementById('force-theme-override');
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'force-theme-override';
        document.head.appendChild(styleEl);
      }
      
      const oppositeTheme = theme === 'dark' ? 'light' : 'dark';
      
      styleEl.textContent = `
        /* Force immediate theme application */
        html { color-scheme: ${theme} !important; }
        html.${theme} { color-scheme: ${theme} !important; }
        body { color-scheme: ${theme} !important; }
        
        /* Force Tailwind dark mode */
        ${theme === 'dark' ? `
          .dark\\:bg-\\[\\#040711\\]\\/90 { background-color: rgba(4, 7, 17, 0.9) !important; }
          .dark\\:bg-\\[\\#040711\\] { background-color: rgb(4, 7, 17) !important; }
          .dark\\:bg-\\[\\#121827\\] { background-color: rgb(18, 24, 39) !important; }
          .dark\\:text-white { color: rgb(255, 255, 255) !important; }
          .dark\\:border-primary { border-color: #4fa58c !important; }
          .dark\\:hover\\:bg-primary\\/20:hover { background-color: rgba(79, 165, 140, 0.2) !important; }
          .dark\\:hover\\:text-primary:hover { color: #4fa58c !important; }
        ` : `
          .bg-white\\/90 { background-color: rgba(255, 255, 255, 0.9) !important; }
          .text-gray-900 { color: rgb(17, 24, 39) !important; }
          .border-gray-200 { border-color: rgb(229, 231, 235) !important; }
          .bg-gray-100 { background-color: rgb(243, 244, 246) !important; }
          .hover\\:bg-gray-200:hover { background-color: rgb(229, 231, 235) !important; }
        `}
        
        /* Override system preferences completely */
        @media (prefers-color-scheme: dark) {
          html:not(.dark) { color-scheme: light !important; }
        }
        @media (prefers-color-scheme: light) {
          html.dark { color-scheme: dark !important; }
        }
        
        /* Force all elements to respect our theme */
        * { color-scheme: ${theme} !important; }
      `;
      
      // Force a reflow to apply changes immediately
      html.offsetHeight;
      
      // Trigger a small delay to ensure Tailwind picks up the changes
      setTimeout(() => {
        html.setAttribute('data-theme-applied', theme);
      }, 10);
    }
  };

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  useEffect(() => {
    // Get initial theme
    const storedTheme = localStorage.getItem('evolve-link-theme') || 'light';
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
