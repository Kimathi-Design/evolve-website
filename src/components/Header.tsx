'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Force re-render when theme changes
  useEffect(() => {
    setForceUpdate(prev => prev + 1);
  }, [theme]);

  // Simple theme toggle - let ThemeProvider handle all the complex logic
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Force immediate re-render
    setTimeout(() => setForceUpdate(prev => prev + 1), 50);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Evolve Link', href: '/why-evolve-link' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  // Force inline styles as backup for theme
  const headerStyle = theme === 'dark' ? {
    backgroundColor: 'rgba(4, 7, 17, 0.9)',
    borderColor: '#4fa58c',
    color: '#ffffff'
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: 'rgb(229, 231, 235)',
    color: 'rgb(17, 24, 39)'
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#040711]/90 backdrop-blur-md border-b border-gray-200 dark:border-primary"
      style={headerStyle}
      data-theme={theme}
      key={`header-${theme}-${forceUpdate}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {mounted && (
                <Image
                  src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
                  alt="Evolve Link"
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              )}
              {!mounted && (
                <span className="text-2xl font-bold text-primary">
                  Evolve Link
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                  style={{ color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
                                {/* Dark Mode Toggle */}
                    {mounted && (
                      <button
                        onClick={handleThemeToggle}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#121827] hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors duration-200"
                        style={{ backgroundColor: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)' }}
                        aria-label="Toggle dark mode"
                      >
                        {theme === 'dark' ? (
                          <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <Moon className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    )}

            {/* Get in Touch Button */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
                                <div className="md:hidden">
                      <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#121827] hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors duration-200"
                        style={{ backgroundColor: theme === 'dark' ? 'rgb(18, 24, 39)' : 'rgb(243, 244, 246)' }}
                        aria-label="Toggle menu"
                      >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
                  {isMenuOpen && (
            <div className="md:hidden">
              <div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-[#040711] border-t border-gray-200 dark:border-primary"
                style={{ 
                  backgroundColor: theme === 'dark' ? 'rgb(4, 7, 17)' : '#ffffff',
                  borderColor: theme === 'dark' ? '#4fa58c' : 'rgb(229, 231, 235)'
                }}
              >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  style={{ color: theme === 'dark' ? '#ffffff' : 'rgb(17, 24, 39)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Get in Touch Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 mx-3 mt-4 px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-200 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
