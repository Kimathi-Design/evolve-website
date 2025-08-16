'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function DarkModeToggle({ 
  className = '', 
  size = 'md' 
}: DarkModeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className={`
          ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}
          bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse
          ${className}
        `}
      />
    );
  }

  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`
        ${sizeClasses[size]}
        bg-gray-100 dark:bg-gray-800 
        hover:bg-gray-200 dark:hover:bg-gray-700 
        border border-gray-300 dark:border-gray-600
        rounded-lg 
        transition-all duration-200 
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${className}
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className={`${iconSizes[size]} text-yellow-500`} />
      ) : (
        <Moon className={`${iconSizes[size]} text-gray-600 dark:text-gray-300`} />
      )}
    </button>
  );
}

// Alternative compact toggle with sliding animation
export function SlidingDarkModeToggle({ 
  className = '' 
}: Pick<DarkModeToggleProps, 'className'>) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-14 h-7 bg-gray-200 rounded-full animate-pulse ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${isDark ? 'bg-gray-700' : 'bg-gray-300'}
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div
        className={`
          absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-transform duration-200 flex items-center justify-center
          ${isDark ? 'translate-x-7 bg-gray-800' : 'translate-x-0.5 bg-white'}
        `}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-yellow-500" />
        ) : (
          <Sun className="w-3 h-3 text-gray-600" />
        )}
      </div>
    </button>
  );
}
