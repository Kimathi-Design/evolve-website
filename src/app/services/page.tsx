'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, 
  Target, 
  Users, 
  Share2, 
  Monitor, 
  Megaphone, 
  Camera, 
  BarChart, 
  Package,
  Handshake 
} from 'lucide-react';
import { PrimaryCTA, SectionCTA } from '@/components/CTA';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* CTA Section */}
      <SectionCTA
        title="Ready to Transform Your Brand?"
        description="Let's discuss how our comprehensive services can help scale your business and build lasting trust with your audience."
        primaryCTA={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Case Studies",
          href: "/case-studies"
        }}
      />
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions for <span className="text-accent font-semibold">modern brands</span>
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            From events management to digital infrastructure, we provide end-to-end services 
            that help businesses scale trust and achieve sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
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
            Everything You Need to Scale <span className="text-accent dark:text-primary">Trust</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            Our integrated approach ensures every touchpoint reinforces your brand message and builds authentic connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-white mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-white">
                    <span className="w-1.5 h-1.5 bg-accent dark:bg-primary rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
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
            Strategic <span className="text-accent dark:text-primary">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            We work with industry leaders to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-lg shadow-md flex items-center justify-center mx-auto hover:shadow-lg transition-shadow duration-300">
                <span className="text-sm font-bold text-gray-700 dark:text-white">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Data
const services = [
  {
    icon: Calendar,
    title: "Events Management",
    description: "End-to-end event production that creates memorable brand experiences and lasting connections.",
    features: [
      "Venue sourcing & logistics",
      "Custom decor & branding",
      "Merchandise design",
      "Sound & visual production",
      "Photography & videography",
      "Strategic partnerships",
      "Admittance management"
    ]
  },
  {
    icon: Target,
    title: "Brand Strategy & Identity",
    description: "Strategic positioning and visual identity that differentiates your brand and builds recognition.",
    features: [
      "Brand positioning & messaging",
      "Visual identity design",
      "Brand guidelines",
      "Competitive analysis",
      "Market research",
      "Brand architecture",
      "Identity implementation"
    ]
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Authentic partnerships with creators who align with your brand values and audience.",
    features: [
      "Influencer identification",
      "Campaign strategy",
      "Content collaboration",
      "Performance tracking",
      "Relationship management",
      "ROI optimization",
      "Crisis management"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Services",
    description: "Comprehensive social media management that builds communities and drives engagement.",
    features: [
      "Content strategy & creation",
      "Community management",
      "Social advertising",
      "Analytics & reporting",
      "Platform optimization",
      "Crisis response",
      "Growth strategies"
    ]
  },
  {
    icon: Monitor,
    title: "Digital Infrastructure",
    description: "Technical foundations that support your digital presence and customer experience.",
    features: [
      "Website development",
      "E-commerce solutions",
      "CRM integration",
      "Analytics setup",
      "SEO optimization",
      "Performance monitoring",
      "Security implementation"
    ]
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description: "Multi-channel advertising campaigns that reach your audience where they are most active.",
    features: [
      "Media planning & buying",
      "Creative development",
      "Campaign management",
      "A/B testing",
      "Performance optimization",
      "Cross-platform integration",
      "ROI tracking"
    ]
  },
  {
    icon: Camera,
    title: "Content Production",
    description: "High-quality content creation that tells your brand story across all channels.",
    features: [
      "Video production",
      "Photography",
      "Copywriting",
      "Graphic design",
      "Animation & motion graphics",
      "Content planning",
      "Multi-format optimization"
    ]
  },
  {
    icon: BarChart,
    title: "Market Intelligence",
    description: "Data-driven insights that inform strategy and optimize performance across all touchpoints.",
    features: [
      "Market research",
      "Competitive analysis",
      "Consumer insights",
      "Performance analytics",
      "Trend forecasting",
      "Custom reporting",
      "Strategic recommendations"
    ]
  },
  {
    icon: Package,
    title: "Custom Merchandizing",
    description: "Branded merchandise and promotional materials that extend your brand presence.",
    features: [
      "Product design & sourcing",
      "Custom printing & embroidery",
      "Packaging design",
      "Inventory management",
      "Quality control",
      "Distribution logistics",
      "Brand compliance"
    ]
  },
  {
    icon: Handshake,
    title: "Media Partnerships",
    description: "Strategic media relationships that amplify your message and expand your reach.",
    features: [
      "Media relationship building",
      "Press release distribution",
      "Interview coordination",
      "Event coverage",
      "Thought leadership",
      "Crisis communication",
      "Media monitoring"
    ]
  }
];

const partners = [
  "Firmbridge",
  "Influencers",
  "Allure Group", 
  "Forbes Crypto",
  "Kenyanwallstreet",
  "Mediapal"
];
