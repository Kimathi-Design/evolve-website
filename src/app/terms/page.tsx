'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Users, CreditCard, AlertTriangle, XCircle, Scale, UserCheck, Copyright, Mail, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Terms Content */}
      <TermsContent />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-accent to-accent-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Our commitment to transparent service
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            These terms govern your use of Evolve Link&apos;s services and website. Please read them carefully.
          </p>
          <p className="text-sm opacity-80 mt-6">
            Last updated: January 17, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TermsContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement",
          text: "By accessing and using Evolve Link's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the new terms."
        }
      ]
    },
    {
      icon: Users,
      title: "Services Description",
      content: [
        {
          subtitle: "Digital Marketing Services",
          text: "Evolve Link provides digital marketing, brand strategy, events management, influencer marketing, social media management, and related consulting services to businesses and organizations."
        },
        {
          subtitle: "Service Scope",
          text: "The specific scope of services will be defined in individual service agreements or proposals. These terms apply to all services unless specifically modified in writing."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted service but do not guarantee that our services or website will be available at all times. We may suspend or discontinue services for maintenance or other reasons."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        {
          subtitle: "Fees and Payment",
          text: "Service fees are as agreed upon in individual contracts or proposals. Payment terms, including due dates and accepted payment methods, will be specified in your service agreement."
        },
        {
          subtitle: "Late Payments",
          text: "Late payments may result in suspension of services and may incur additional fees as specified in your service agreement."
        },
        {
          subtitle: "Refunds",
          text: "Refund policies vary by service type and will be outlined in your specific service agreement. Generally, refunds are not provided for services already rendered."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        {
          subtitle: "No Guarantees",
          text: "While we strive for excellence, we cannot guarantee specific results from our marketing and branding services. Results may vary based on market conditions, industry factors, and client cooperation."
        },
        {
          subtitle: "Third-Party Services",
          text: "Our services may involve third-party platforms and tools. We are not responsible for the availability, functionality, or terms of service of third-party providers."
        },
        {
          subtitle: "Limitation of Liability",
          text: "Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, special, consequential, or punitive damages."
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
                <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
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

          {/* Client Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Client Responsibilities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cooperation
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients must provide necessary information, materials, and cooperation required for service delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Accuracy
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  All information provided to us must be accurate, complete, and up-to-date.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Compliance
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients must ensure their business practices comply with all applicable laws and regulations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Payment
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients are responsible for timely payment according to agreed terms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Copyright className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Intellectual Property
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Our Work Product
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Upon full payment, clients receive rights to use work product created specifically for them. We retain the right to use general methodologies, processes, and know-how.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Client Materials
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients grant us necessary rights to use their materials, content, and information for the purpose of providing services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Third-Party Rights
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Both parties must respect third-party intellectual property rights and obtain necessary permissions for use of such materials.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Termination
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Termination Rights
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Either party may terminate services with appropriate notice as specified in the service agreement. Immediate termination may occur for breach of contract, non-payment, or other material violations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Post-Termination Obligations
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Upon termination, clients remain responsible for payment of services rendered, and both parties must return confidential information belonging to the other party.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Governing Law and Disputes
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Governing Jurisdiction
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  These terms are governed by the laws of Kenya. Any disputes will be resolved through negotiation first, and if necessary, through binding arbitration or the courts of Kenya.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Severability
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full effect.
                </p>
              </div>
            </div>
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
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-[#121827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact us before using our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:admin@evolve-link.com"
              className="flex items-center text-accent dark:text-primary hover:text-accent/80 dark:hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              admin@evolve-link.com
            </a>
            <a
              href="tel:+254713136670"
              className="flex items-center text-accent dark:text-primary hover:text-accent/80 dark:hover:text-primary/80 font-semibold text-lg transition-colors"
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
import { FileText, Users, CreditCard, AlertTriangle, XCircle, Scale, UserCheck, Copyright, Mail, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Terms Content */}
      <TermsContent />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-accent to-accent-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Our commitment to transparent service
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            These terms govern your use of Evolve Link&apos;s services and website. Please read them carefully.
          </p>
          <p className="text-sm opacity-80 mt-6">
            Last updated: January 17, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TermsContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement",
          text: "By accessing and using Evolve Link's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the new terms."
        }
      ]
    },
    {
      icon: Users,
      title: "Services Description",
      content: [
        {
          subtitle: "Digital Marketing Services",
          text: "Evolve Link provides digital marketing, brand strategy, events management, influencer marketing, social media management, and related consulting services to businesses and organizations."
        },
        {
          subtitle: "Service Scope",
          text: "The specific scope of services will be defined in individual service agreements or proposals. These terms apply to all services unless specifically modified in writing."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted service but do not guarantee that our services or website will be available at all times. We may suspend or discontinue services for maintenance or other reasons."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        {
          subtitle: "Fees and Payment",
          text: "Service fees are as agreed upon in individual contracts or proposals. Payment terms, including due dates and accepted payment methods, will be specified in your service agreement."
        },
        {
          subtitle: "Late Payments",
          text: "Late payments may result in suspension of services and may incur additional fees as specified in your service agreement."
        },
        {
          subtitle: "Refunds",
          text: "Refund policies vary by service type and will be outlined in your specific service agreement. Generally, refunds are not provided for services already rendered."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        {
          subtitle: "No Guarantees",
          text: "While we strive for excellence, we cannot guarantee specific results from our marketing and branding services. Results may vary based on market conditions, industry factors, and client cooperation."
        },
        {
          subtitle: "Third-Party Services",
          text: "Our services may involve third-party platforms and tools. We are not responsible for the availability, functionality, or terms of service of third-party providers."
        },
        {
          subtitle: "Limitation of Liability",
          text: "Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, special, consequential, or punitive damages."
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
                <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
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

          {/* Client Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Client Responsibilities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cooperation
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients must provide necessary information, materials, and cooperation required for service delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Accuracy
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  All information provided to us must be accurate, complete, and up-to-date.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Compliance
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients must ensure their business practices comply with all applicable laws and regulations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Payment
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients are responsible for timely payment according to agreed terms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Copyright className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Intellectual Property
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Our Work Product
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Upon full payment, clients receive rights to use work product created specifically for them. We retain the right to use general methodologies, processes, and know-how.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Client Materials
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Clients grant us necessary rights to use their materials, content, and information for the purpose of providing services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Third-Party Rights
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Both parties must respect third-party intellectual property rights and obtain necessary permissions for use of such materials.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Termination
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Termination Rights
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Either party may terminate services with appropriate notice as specified in the service agreement. Immediate termination may occur for breach of contract, non-payment, or other material violations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Post-Termination Obligations
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Upon termination, clients remain responsible for payment of services rendered, and both parties must return confidential information belonging to the other party.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent dark:bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Governing Law and Disputes
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Governing Jurisdiction
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  These terms are governed by the laws of Kenya. Any disputes will be resolved through negotiation first, and if necessary, through binding arbitration or the courts of Kenya.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Severability
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full effect.
                </p>
              </div>
            </div>
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
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-[#121827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact us before using our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:admin@evolve-link.com"
              className="flex items-center text-accent dark:text-primary hover:text-accent/80 dark:hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              admin@evolve-link.com
            </a>
            <a
              href="tel:+254713136670"
              className="flex items-center text-accent dark:text-primary hover:text-accent/80 dark:hover:text-primary/80 font-semibold text-lg transition-colors"
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
