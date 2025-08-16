'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Eye, Users, Database, Settings, FileCheck, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Privacy Policy Content */}
      <PolicyContent />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Your privacy matters to us
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            This policy explains how Evolve Link collects, uses, and protects your personal information when you use our services.
          </p>
          <p className="text-sm opacity-80 mt-6">
            Last updated: January 17, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PolicyContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when contacting us or using our services."
        },
        {
          subtitle: "Usage Information", 
          text: "We automatically collect certain information about your device and usage of our website, including IP address, browser type, pages visited, and time spent on our site."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar technologies to enhance your experience, analyze website traffic, and improve our services."
        }
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our digital marketing and brand strategy services."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to respond to your inquiries, send you updates about our services, and provide customer support."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data to understand how our website and services are used and to make improvements."
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or to protect our rights, safety, and property."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        }
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law."
        },
        {
          subtitle: "International Transfers",
          text: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place."
        }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#040711]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-white leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Your Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Your Rights and Choices
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Access and Update
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can request access to your personal information and ask us to correct or update any inaccurate information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Deletion
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can request that we delete your personal information, subject to certain legal obligations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Opt-Out
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can opt out of receiving marketing communications from us at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cookies
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can control cookies through your browser settings, though this may affect website functionality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Policy Updates
              </h2>
            </div>
            <p className="text-gray-600 dark:text-white leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-lg text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, please don&apos;t hesitate to contact us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:admin@evolve-link.com"
              className="flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              admin@evolve-link.com
            </a>
            <a
              href="tel:+254713136670"
              className="flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +254 713 136 670
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Eye, Users, Database, Settings, FileCheck, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Privacy Policy Content */}
      <PolicyContent />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Your privacy matters to us
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            This policy explains how Evolve Link collects, uses, and protects your personal information when you use our services.
          </p>
          <p className="text-sm opacity-80 mt-6">
            Last updated: January 17, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PolicyContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when contacting us or using our services."
        },
        {
          subtitle: "Usage Information", 
          text: "We automatically collect certain information about your device and usage of our website, including IP address, browser type, pages visited, and time spent on our site."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar technologies to enhance your experience, analyze website traffic, and improve our services."
        }
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our digital marketing and brand strategy services."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to respond to your inquiries, send you updates about our services, and provide customer support."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data to understand how our website and services are used and to make improvements."
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or to protect our rights, safety, and property."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        }
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law."
        },
        {
          subtitle: "International Transfers",
          text: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place."
        }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#040711]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-white leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Your Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Your Rights and Choices
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Access and Update
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can request access to your personal information and ask us to correct or update any inaccurate information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Deletion
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can request that we delete your personal information, subject to certain legal obligations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Opt-Out
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can opt out of receiving marketing communications from us at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cookies
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  You can control cookies through your browser settings, though this may affect website functionality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Policy Updates
              </h2>
            </div>
            <p className="text-gray-600 dark:text-white leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-lg text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, please don&apos;t hesitate to contact us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:admin@evolve-link.com"
              className="flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              admin@evolve-link.com
            </a>
            <a
              href="tel:+254713136670"
              className="flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +254 713 136 670
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
