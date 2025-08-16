'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Download, ExternalLink } from 'lucide-react';
import { PrimaryCTA } from '@/components/CTA';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Contact Form Section */}
      <ContactFormSection />
      
      {/* Scale Trust Section */}
      <ScaleTrustSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light">
            Ready to scale trust and grow your brand?
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re launching a new product, expanding into new markets, or looking to strengthen 
            your brand presence, we&apos;re here to help you achieve your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-white mb-8 leading-relaxed">
              Ready to start your project? We&apos;d love to hear from you. Send us a message and 
              we&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-gray-600 dark:text-white hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a message
            </h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! We&apos;ve received your message and will get back to you within 24 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Something went wrong. Please try again or contact us directly at admin@evolve-link.com
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input w-full"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input w-full"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ScaleTrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="scale-trust" ref={ref} className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scale <span className="text-accent">Trust</span> with Us
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to take the next step? Choose how you&apos;d like to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scaleTrustOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-sm opacity-90 mb-4">{option.description}</p>
              <a
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center text-accent hover:text-accent-light font-medium transition-colors"
              >
                {option.cta}
                {option.external ? (
                  <ExternalLink className="w-4 h-4 ml-1" />
                ) : (
                  <div className="w-4 h-4 ml-1" />
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'admin@evolve-link.com',
    href: 'mailto:admin@evolve-link.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 713 136 670',
    href: 'tel:+254713136670'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#'
  }
];

const scaleTrustOptions = [
  {
    icon: Calendar,
    title: 'Book a Consultation',
    description: 'Schedule a call to discuss your project and goals',
    cta: 'Schedule Now',
    href: 'https://calendly.com/evolve-link',
    external: true
  },
  {
    icon: ExternalLink,
    title: 'Project Kickoff Form',
    description: 'Tell us about your project requirements and timeline',
    cta: 'Get Started',
    href: 'https://form.typeform.com/evolve-link-kickoff',
    external: true
  },
  {
    icon: Download,
    title: 'Strategy Pack',
    description: 'Download our free brand strategy guide and templates',
    cta: 'Download',
    href: '/downloads/evolve-link-strategy-pack.pdf',
    external: false
  },
  {
    icon: Mail,
    title: 'Direct Email',
    description: 'Send us an email with your project details',
    cta: 'Email Us',
    href: 'mailto:admin@evolve-link.com?subject=New Project Inquiry',
    external: false
  }
];
