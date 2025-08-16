'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Globe } from 'lucide-react';
import { PrimaryCTA, SectionCTA } from '@/components/CTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <TrustedBySection />
      <SectionCTA 
        title="Ready to Scale Your Trust?"
        description="Join successful brands that have transformed their market presence with our proven strategies."
        primaryCTA={{
          text: "Start Your Journey",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Services",
          href: "/services"
        }}
      />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_placeholder.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Evolve Link
          </h1>
          
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl mb-4 text-primary-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            scaling trust.
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building brands that connect. Growing businesses that last.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <PrimaryCTA href="/contact" size="lg" icon>
              Get In Touch With Us
            </PrimaryCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with proven track records in scaling businesses across industries."
    },
    {
      icon: Award,
      title: "Proven Results", 
      description: "Award-winning campaigns and measurable growth for our client partners."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International expertise with local market insights for maximum impact."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            We&apos;re not just another agency. We&apos;re <span className="text-accent dark:text-primary font-semibold">growth partners</span> who understand that trust is the foundation of every successful business relationship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary rounded-xl"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clients = [
    { name: "YellowCard", logo: "/images/case_yellowcard.jpg" },
    { name: "Tether", logo: "/images/case_tether.jpg" },
    { name: "BitLipa", logo: "/images/case_bitlipa.jpg" },
    { name: "ATS Travels", logo: "/images/case_ats.jpg" },
    { name: "Jukwaa", logo: "/images/case_jukwaa.jpg" },
    { name: "Masinga", logo: "/images/case_masinga.jpg" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted By <span className="text-accent dark:text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            From fintech pioneers to travel innovators, we&apos;ve helped brands across industries scale their trust and achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white dark:bg-[#121827] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
