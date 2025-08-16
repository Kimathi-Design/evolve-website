'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CaseGrid } from '@/components/CaseCard';
import { SectionCTA } from '@/components/CTA';

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Case Studies Grid */}
      <CaseStudiesGrid />
      
      {/* CTA Section */}
      <SectionCTA
        title="Ready to Create Your Success Story?"
        description="Join the brands that have transformed their market presence with our strategic approach to building lasting connections."
        primaryCTA={{
          text: "Start Your Project",
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
    <section className="relative py-20 bg-gradient-to-br from-accent to-accent-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Proven Results
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Real brands, real growth, real impact
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover how we&apos;ve helped leading brands scale trust, build authentic connections, 
            and achieve remarkable growth through strategic marketing and brand building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesGrid() {
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
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            From startups to established enterprises, see how our strategic approach drives measurable results
          </p>
        </motion.div>

        <CaseGrid cases={caseStudies} variant="featured" columns={2} />
      </div>
    </section>
  );
}

// Data
const caseStudies = [
  {
    id: "yellowcard",
    title: "Digital Payment Revolution",
    client: "YellowCard",
    image: "/images/case_yellowcard.jpg",
    challenge: "Expanding into new African markets while building trust in digital payments",
    result: "Achieved 300% user growth and established market presence in 5 new countries",
    metrics: "300% user growth, 5 new markets",
    tags: ["Fintech", "Brand Strategy", "Market Expansion"],
    href: "/case-studies/yellowcard"
  },
  {
    id: "tether",
    title: "Stablecoin Leadership",
    client: "Tether",
    image: "/images/case_tether.jpg",
    challenge: "Reinforcing market position and building institutional trust in cryptocurrency",
    result: "Strengthened brand authority and increased institutional adoption by 150%",
    metrics: "150% institutional growth",
    tags: ["Cryptocurrency", "Institutional Marketing", "Trust Building"],
    href: "/case-studies/tether"
  },
  {
    id: "bitlipa",
    title: "Mobile Payment Innovation",
    client: "BitLipa",
    image: "/images/case_bitlipa.jpg", 
    challenge: "Launching a new mobile payment solution in competitive East African market",
    result: "Achieved 50,000 active users within first 6 months of launch",
    metrics: "50K users in 6 months",
    tags: ["Mobile Payments", "Product Launch", "User Acquisition"],
    href: "/case-studies/bitlipa"
  },
  {
    id: "jukwaa-sports",
    title: "Sports Community Platform",
    client: "Jukwaa Sports",
    image: "/images/case_jukwaa.jpg",
    challenge: "Building East Africa&apos;s leading sports community and engagement platform",
    result: "Created the largest sports community platform with 100K+ active members",
    metrics: "100K+ community members",
    tags: ["Community Building", "Sports Marketing", "Platform Growth"],
    href: "/case-studies/jukwaa-sports"
  },
  {
    id: "masinga-yellowcard",
    title: "Strategic Partnership Campaign",
    client: "Masinga TT x YellowCard",
    image: "/images/case_masinga.jpg",
    challenge: "Creating a successful brand partnership that benefits both sports and fintech audiences",
    result: "Generated 2M+ impressions and 25% increase in brand awareness for both partners",
    metrics: "2M+ impressions, 25% awareness boost",
    tags: ["Partnership Marketing", "Sports Sponsorship", "Brand Collaboration"],
    href: "/case-studies/masinga-yellowcard"
  },
  {
    id: "africa-touch-safaris",
    title: "Corporate Travel Market Leadership", 
    client: "ATS Travels",
    image: "/images/case_ats.jpg",
    challenge: "Increase brand awareness and recognizability to compete with the top three business and corporate travel agencies in the market",
    result: "Won World Travel Awards, enhanced brand credibility through exclusive networking events, and established strong market position in corporate travel sector",
    metrics: "Won WTA award, enhanced brand visibility",
    tags: ["Brand Strategy", "Travel Industry", "Award Campaigns", "Corporate Networking"],
    href: "/case-studies/africa-touch-safaris"
  }
];

    title: "Corporate Travel Market Leadership", 
    client: "ATS Travels",
    image: "/images/case_ats.jpg",
    challenge: "Increase brand awareness and recognizability to compete with the top three business and corporate travel agencies in the market",
    result: "Won World Travel Awards, enhanced brand credibility through exclusive networking events, and established strong market position in corporate travel sector",
    metrics: "Won WTA award, enhanced brand visibility",
    tags: ["Brand Strategy", "Travel Industry", "Award Campaigns", "Corporate Networking"],
    href: "/case-studies/africa-touch-safaris"
  }
];
