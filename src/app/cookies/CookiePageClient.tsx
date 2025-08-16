'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cookie, Eye, Settings, FileCheck, Mail, Phone, Shield, BarChart3, Zap, Target } from 'lucide-react';

const iconMap = {
  Shield,
  BarChart3,
  Zap,
  Target
};

interface CookieType {
  iconName: string;
  title: string;
  description: string;
  examples: string[];
  canDisable: boolean;
}

interface CookiePageClientProps {
  cookieTypes: CookieType[];
}

export default function CookiePageClient({ cookieTypes }: CookiePageClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mr-4">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Cookie Policy
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto mb-8"
          >
            Learn about how we use cookies to enhance your browsing experience, 
            provide personalized content, and improve our services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Last updated: January 25, 2025
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Cookie className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                What Are Cookies?
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-white leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
              
              <p className="text-gray-600 dark:text-white leading-relaxed">
                Cookies can be "persistent" (remaining on your device until deleted or expired) or "session" cookies 
                (deleted when you close your browser). They can be "first-party" (set by the website you're visiting) 
                or "third-party" (set by other services running on the website).
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            {cookieTypes.map((type, index) => {
              const IconComponent = iconMap[type.iconName as keyof typeof iconMap] || Shield;
              
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {type.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        type.canDisable 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {type.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                  {type.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Examples include:
                  </h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-white flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mt-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                How We Use Cookies
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Website Functionality
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  We use cookies to remember your preferences, such as language settings and theme choices, 
                  to provide a personalized browsing experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics & Performance
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  We analyze website usage patterns to improve our services, identify popular content, 
                  and optimize website performance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Security
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Cookies help us protect against fraudulent activity and ensure secure access to 
                  protected areas of our website.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Communication
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  We may use cookies to enhance contact forms and remember your preferences 
                  to provide better customer support and communication experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mt-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Managing Your Cookie Preferences
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cookie Consent Banner
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  When you first visit our website, you'll see a cookie consent banner where you can 
                  choose to accept all cookies, reject non-essential cookies, or customize your preferences.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Browser Settings
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can 
                  choose to accept or reject cookies, delete existing cookies, or be notified when 
                  cookies are being used.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Third-Party Opt-Out
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  For third-party analytics and advertising cookies, you can opt out directly through 
                  the respective service providers' websites, such as Google Analytics opt-out tools.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mt-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Updates to This Policy
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-white leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we make changes, we will update 
              the "Last updated" date at the top of this policy and may notify you through our website 
              or other appropriate means.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Questions About Our Cookie Policy?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-white">
                  privacy@evolvelink.co.ke
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-white">
                  +254 700 000 000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cookie, Eye, Settings, FileCheck, Mail, Phone, Shield, BarChart3, Zap, Target } from 'lucide-react';

const iconMap = {
  Shield,
  BarChart3,
  Zap,
  Target
};

interface CookieType {
  iconName: string;
  title: string;
  description: string;
  examples: string[];
  canDisable: boolean;
}

interface CookiePageClientProps {
  cookieTypes: CookieType[];
}

export default function CookiePageClient({ cookieTypes }: CookiePageClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mr-4">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Cookie Policy
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto mb-8"
          >
            Learn about how we use cookies to enhance your browsing experience, 
            provide personalized content, and improve our services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Last updated: January 25, 2025
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Cookie className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                What Are Cookies?
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-white leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
              
              <p className="text-gray-600 dark:text-white leading-relaxed">
                Cookies can be "persistent" (remaining on your device until deleted or expired) or "session" cookies 
                (deleted when you close your browser). They can be "first-party" (set by the website you're visiting) 
                or "third-party" (set by other services running on the website).
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            {cookieTypes.map((type, index) => {
              const IconComponent = iconMap[type.iconName as keyof typeof iconMap] || Shield;
              
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {type.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        type.canDisable 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {type.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                  {type.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Examples include:
                  </h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-white flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mt-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                How We Use Cookies
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Website Functionality
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  We use cookies to remember your preferences, such as language settings and theme choices, 
                  to provide a personalized browsing experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics & Performance
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  We analyze website usage patterns to improve our services, identify popular content, 
                  and optimize website performance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Security
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Cookies help us protect against fraudulent activity and ensure secure access to 
                  protected areas of our website.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Communication
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  We may use cookies to enhance contact forms and remember your preferences 
                  to provide better customer support and communication experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mt-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Managing Your Cookie Preferences
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cookie Consent Banner
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  When you first visit our website, you'll see a cookie consent banner where you can 
                  choose to accept all cookies, reject non-essential cookies, or customize your preferences.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Browser Settings
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can 
                  choose to accept or reject cookies, delete existing cookies, or be notified when 
                  cookies are being used.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Third-Party Opt-Out
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  For third-party analytics and advertising cookies, you can opt out directly through 
                  the respective service providers' websites, such as Google Analytics opt-out tools.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8 mt-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Updates to This Policy
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-white leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we make changes, we will update 
              the "Last updated" date at the top of this policy and may notify you through our website 
              or other appropriate means.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Questions About Our Cookie Policy?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-white">
                  privacy@evolvelink.co.ke
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-white">
                  +254 700 000 000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
