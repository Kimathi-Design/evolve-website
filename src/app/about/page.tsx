'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Zap, Award, Target } from 'lucide-react';
import { TeamGrid } from '@/components/TeamCard';
import { PrimaryCTA, SectionCTA } from '@/components/CTA';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Story Timeline */}
      <StorySection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Careers CTA */}
      <CareersSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Evolve Link
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light">
            Born from a vision to transform how brands connect
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            We believe that in today&apos;s digital landscape, trust is the ultimate currency. 
            Our mission is to help brands build authentic connections that transcend traditional marketing 
            and create lasting relationships with their audiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            From a small team with big dreams to a trusted partner for leading brands
          </p>
        </motion.div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="opacity-90 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-[#121827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            The talented individuals behind Evolve Link&apos;s success
          </p>
        </motion.div>

        <TeamGrid members={teamMembers} variant="default" columns={4} />
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-primary-light mb-4">
            Where creativity creates magic
          </p>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            We&apos;re always looking for passionate, creative individuals who share our vision 
            of building authentic brand connections. If you&apos;re ready to make an impact 
            in the digital landscape, we&apos;d love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryCTA href="mailto:careers@evolve-link.com" size="lg" icon>
              Apply Here
            </PrimaryCTA>
            <PrimaryCTA href="/contact" size="lg" icon>
              Get In Touch
            </PrimaryCTA>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Data
const timeline = [
  {
    icon: Lightbulb,
    title: "Our Story",
    description: "Founded on the belief that authentic brand connections drive sustainable growth. We started as a small team with a big vision: to help businesses scale trust in an increasingly digital world."
  },
  {
    icon: Target,
    title: "Our Vision", 
    description: "To become the leading strategic partner for brands looking to build authentic, lasting relationships with their audiences through innovative marketing and brand building solutions."
  },
  {
    icon: Zap,
    title: "Our Mission",
    description: "Empowering businesses to scale trust through strategic brand building, creative execution, and data-driven optimization that creates meaningful connections and drives sustainable growth."
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We believe in pushing boundaries and thinking outside the box to create unique solutions that make brands stand out."
  },
  {
    icon: Zap,
    title: "Freedom",
    description: "We foster an environment where ideas flow freely, creativity thrives, and innovation is encouraged at every level."
  },
  {
    icon: Award,
    title: "Excellence", 
    description: "We maintain the highest standards in everything we do, from strategy development to creative execution and client service."
  },
  {
    icon: Target,
    title: "Originality",
    description: "We pride ourselves on creating original, authentic solutions that reflect each brand's unique identity and values."
  }
];

const teamMembers = [
  {
    id: "brian",
    name: "Brian Kimathi",
    role: "Brand Development Lead",
    image: "/images/team_brian.jpg",
    bio: "Strategic brand architect with over 8 years of experience building memorable brand identities and positioning strategies.",
    email: "brian@evolve-link.com",
    linkedin: "https://linkedin.com/in/brian-kimathi",
    skills: ["Brand Strategy", "Identity Design", "Market Research", "Creative Direction"]
  },
  {
    id: "theo",
    name: "Theo Mwangi", 
    role: "Growth Strategist",
    image: "/images/team_theo.jpg",
    bio: "Data-driven growth expert specializing in scaling businesses through strategic marketing and performance optimization.",
    email: "theo@evolve-link.com",
    linkedin: "https://linkedin.com/in/theo-mwangi",
    skills: ["Growth Hacking", "Analytics", "Conversion Optimization", "Performance Marketing"]
  },
  {
    id: "roy",
    name: "Roy Kinyua",
    role: "Events Director", 
    image: "/images/team_roy.jpg",
    bio: "Creative events producer with a passion for creating memorable brand experiences that leave lasting impressions.",
    email: "roy@evolve-link.com", 
    linkedin: "https://linkedin.com/in/roy-kinyua",
    skills: ["Event Production", "Logistics", "Vendor Management", "Creative Direction"]
  },
  {
    id: "beryl",
    name: "Beryl Otieno",
    role: "Influencer Campaign Manager",
    image: "/images/team_beryl.jpg",
    bio: "Relationship-building expert who connects brands with authentic creators to drive meaningful engagement and growth.",
    email: "beryl@evolve-link.com",
    linkedin: "https://linkedin.com/in/beryl-otieno", 
    skills: ["Influencer Relations", "Campaign Management", "Content Strategy", "Community Building"]
  }
];
