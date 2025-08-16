'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Globe } from 'lucide-react';
import { PrimaryCTA, SectionCTA } from '@/components/CTA';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Who We Are Section */}
      <WhoWeAreSection />
      
      {/* Trusted By Section */}
      <TrustedBySection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Final CTA Section */}
      <SectionCTA
        title="Ready to Scale Trust and Grow Your Brand?"
        description="Join the brands that have transformed their market presence with Evolve Link's strategic approach to building lasting connections."
        primaryCTA={{
          text: "Get In Touch With Us",
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
        <Image
          src="/images/hero_placeholder.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
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
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function WhoWeAreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Crafting <span className="text-accent dark:text-primary">Trust</span> Through Strategic Brand Building
          </h2>
          <p className="text-xl text-gray-600 dark:text-white max-w-4xl mx-auto leading-relaxed">
            We believe in a multi-channel strategic approach to scaling trust. Our methodology focuses on building authentic connections between brands and their audiences, creating sustainable growth through strategic positioning, creative execution, and data-driven optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
                      <p className="text-lg text-gray-600 dark:text-white mb-8">
            Our focus on <span className="text-accent dark:text-primary font-semibold">strategy</span>, <span className="text-accent dark:text-primary font-semibold">trust</span>, and <span className="text-accent dark:text-primary font-semibold">growth</span> sets us apart in delivering measurable results.
          </p>
          <Link 
            href="/why-evolve-link"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors group"
          >
            Learn more about our approach
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-[#121827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted By Leading Brands
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            We&apos;ve had the privilege of working with innovative companies across various industries
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll-x space-x-12 items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
              >
                <span className="text-xl font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Results That Speak
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our strategic approach delivers measurable impact across all aspects of brand growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
    </div>
    </section>
  );
}

// Data
const features = [
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    description: "Data-driven strategies that create sustainable growth and market positioning for long-term success."
  },
  {
    icon: Users,
    title: "Audience Connection",
    description: "Building authentic relationships between brands and their target audiences through strategic communication."
  },
  {
    icon: Award,
    title: "Excellence Delivered",
    description: "Creative solutions backed by industry expertise and a commitment to delivering exceptional results."
  }
];

const clients = [
  "YellowCard",
  "Tether", 
  "Circle",
  "Expeditions Maasai Safaris",
  "UN Sacco",
  "Blocks",
  "ATS Travels",
  "BitLipa",
  "Jukwaa Sports",
  "Quatrix Global"
];

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Growth"
  },
  {
    icon: Users,
    value: "50+",
    label: "Brands Transformed"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Reached"
  }
];
