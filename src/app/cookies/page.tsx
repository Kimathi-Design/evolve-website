import React from 'react';
import CookiePageClient from './CookiePageClient';

export const metadata = {
  title: 'Cookie Policy - Evolve Link',
  description: 'Learn about how Evolve Link uses cookies to enhance your browsing experience and provide personalized services.',
  keywords: 'cookies, privacy, data protection, web analytics, user experience',
  openGraph: {
    title: 'Cookie Policy - Evolve Link',
    description: 'Learn about how Evolve Link uses cookies to enhance your browsing experience.',
    type: 'website',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function CookiePage() {
  const cookieTypes = [
    {
      iconName: "Shield",
      title: "Necessary Cookies",
      description: "These cookies are essential for the website to function properly. They enable basic functionality such as page navigation and access to secure areas.",
      examples: [
        "Session management cookies",
        "Authentication cookies", 
        "Security cookies",
        "Load balancing cookies"
      ],
      canDisable: false
    },
    {
      iconName: "BarChart3",
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring"
      ],
      canDisable: true
    },
    {
      iconName: "Zap",
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing customized content.",
      examples: [
        "Language preferences",
        "Theme settings (dark/light mode)",
        "Chat widget settings",
        "Form auto-fill preferences"
      ],
      canDisable: true
    },
    {
      iconName: "Target",
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant advertisements and marketing campaigns.",
      examples: [
        "Social media tracking",
        "Advertising targeting",
        "Conversion tracking",
        "Remarketing campaigns"
      ],
      canDisable: true
    }
  ];

  return <CookiePageClient cookieTypes={cookieTypes} />;
}

export const metadata = {
  title: 'Cookie Policy - Evolve Link',
  description: 'Learn about how Evolve Link uses cookies to enhance your browsing experience and provide personalized services.',
  keywords: 'cookies, privacy, data protection, web analytics, user experience',
  openGraph: {
    title: 'Cookie Policy - Evolve Link',
    description: 'Learn about how Evolve Link uses cookies to enhance your browsing experience.',
    type: 'website',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function CookiePage() {
  const cookieTypes = [
    {
      iconName: "Shield",
      title: "Necessary Cookies",
      description: "These cookies are essential for the website to function properly. They enable basic functionality such as page navigation and access to secure areas.",
      examples: [
        "Session management cookies",
        "Authentication cookies", 
        "Security cookies",
        "Load balancing cookies"
      ],
      canDisable: false
    },
    {
      iconName: "BarChart3",
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring"
      ],
      canDisable: true
    },
    {
      iconName: "Zap",
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing customized content.",
      examples: [
        "Language preferences",
        "Theme settings (dark/light mode)",
        "Chat widget settings",
        "Form auto-fill preferences"
      ],
      canDisable: true
    },
    {
      iconName: "Target",
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant advertisements and marketing campaigns.",
      examples: [
        "Social media tracking",
        "Advertising targeting",
        "Conversion tracking",
        "Remarketing campaigns"
      ],
      canDisable: true
    }
  ];

  return <CookiePageClient cookieTypes={cookieTypes} />;
}