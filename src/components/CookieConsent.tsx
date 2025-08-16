'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import Link from 'next/link';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onAccept?.();
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onReject?.();
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onAccept?.();
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#121827] border-t border-gray-200 dark:border-primary shadow-lg"
      >
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {!showSettings ? (
            // Main consent banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    We use cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    <Link href="/cookies" className="text-primary hover:underline ml-1">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Cookie preferences settings
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Necessary Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Essential for website functionality and cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-6 bg-primary rounded-full flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className="ml-4"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.analytics ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-5 ml-1' : 'ml-1'
                      }`}></div>
                    </div>
                  </button>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Functional Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('functional')}
                    className="ml-4"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.functional ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.functional ? 'translate-x-5 ml-1' : 'ml-1'
                      }`}></div>
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Marketing Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Used to track visitors and display relevant advertisements.
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className="ml-4"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.marketing ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-5 ml-1' : 'ml-1'
                      }`}></div>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import Link from 'next/link';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onAccept?.();
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onReject?.();
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onAccept?.();
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#121827] border-t border-gray-200 dark:border-primary shadow-lg"
      >
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {!showSettings ? (
            // Main consent banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    We use cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    <Link href="/cookies" className="text-primary hover:underline ml-1">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Cookie preferences settings
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Necessary Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Essential for website functionality and cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-6 bg-primary rounded-full flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className="ml-4"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.analytics ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-5 ml-1' : 'ml-1'
                      }`}></div>
                    </div>
                  </button>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Functional Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('functional')}
                    className="ml-4"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.functional ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.functional ? 'translate-x-5 ml-1' : 'ml-1'
                      }`}></div>
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Marketing Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Used to track visitors and display relevant advertisements.
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className="ml-4"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.marketing ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-5 ml-1' : 'ml-1'
                      }`}></div>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
