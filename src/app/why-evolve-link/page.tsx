'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Users, 
  Target, 
  Handshake, 
  Award,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import { SectionCTA } from '@/components/CTA';

export default function WhyEvolveLinkPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* Differentiators Section */}
      <DifferentiatorsSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* CTA Section */}
      <SectionCTA
        title="Experience the Evolve Link Difference"
        description="Join the brands that have discovered what it means to truly scale trust and build lasting connections with their audiences."
        primaryCTA={{
          text: "Start Your Journey",
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
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose Evolve Link?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light">
            Your growth partner in the <span className="text-accent dark:text-primary font-semibold">digital landscape</span>
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            In a world where trust is the ultimate currency, we don&apos;t just build brands – 
            we craft lasting relationships that drive sustainable growth and meaningful connections.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
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
            The Evolve Link <span className="text-accent dark:text-primary">Advantage</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            We&apos;re not just another agency. We&apos;re your strategic partner in building authentic brand connections.
          </p>
        </motion.div>

        <div className="space-y-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className={`p-8 rounded-xl ${reason.bgColor}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white text-primary rounded-xl flex items-center justify-center mr-4">
                      <reason.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {reason.description}
                  </p>
                  <ul className="space-y-3">
                    {reason.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 text-accent dark:text-primary mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0 lg:w-80">
                <div className="w-full h-64 bg-gray-200 dark:bg-[#121827] dark:border dark:border-primary rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 dark:text-white">
                    {reason.imageAlt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
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
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            While others focus on tactics, we focus on transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-[#121827] dark:border dark:border-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
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
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            From discovery to delivery, every step is designed to maximize impact and ensure success
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-gray-950"></div>
                
                <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-gray-50 dark:bg-[#121827] dark:border dark:border-primary p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-accent mr-4">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-white leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Data
const reasons = [
  {
    icon: TrendingUp,
    title: "Platforming You for Sustainable Growth",
    description: "We don't just deliver campaigns – we build foundations for long-term success. Our strategic approach ensures that every initiative contributes to sustainable growth that compounds over time.",
    benefits: [
      "Long-term strategic planning",
      "Scalable systems and processes", 
      "Performance tracking and optimization",
      "Continuous improvement methodology"
    ],
    bgColor: "bg-gradient-to-br from-primary to-primary-dark",
    imageAlt: "Sustainable Growth Chart"
  },
  {
    icon: Zap,
    title: "Be Different – Bold Custom Strategies",
    description: "Cookie-cutter solutions don't build remarkable brands. We craft unique strategies tailored to your specific goals, audience, and market position.",
    benefits: [
      "Custom strategy development",
      "Creative differentiation",
      "Competitive advantage focus",
      "Brand positioning expertise"
    ],
    bgColor: "bg-gradient-to-br from-accent to-accent-dark",
    imageAlt: "Creative Strategy Workshop"
  },
  {
    icon: Users,
    title: "Experience Across Industries",
    description: "From fintech to sports, e-commerce to events – our diverse portfolio gives us unique insights that benefit every client we serve.",
    benefits: [
      "Cross-industry expertise",
      "Best practice application",
      "Market insight sharing", 
      "Proven methodology"
    ],
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    imageAlt: "Industry Experience Map"
  }
];

const differentiators = [
  {
    icon: Users,
    title: "Talented Cross-Disciplinary Team",
    description: "Our team brings together experts in strategy, creative, technology, and analytics to deliver comprehensive solutions."
  },
  {
    icon: Handshake,
    title: "Partnerships Layer of Value",
    description: "We leverage strategic partnerships to extend our capabilities and provide additional value to every project."
  },
  {
    icon: Target,
    title: "Results Driven Focus",
    description: "Every decision is guided by data and measured against your business objectives. We're accountable for your success."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Our portfolio speaks for itself – from startups to established brands, we've consistently delivered exceptional results."
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description: "We adapt quickly to changing market conditions and optimize strategies based on real-time performance data."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Every deliverable goes through rigorous quality checks to ensure it meets our high standards and your expectations."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business, goals, and challenges. Through comprehensive research and analysis, we develop a custom strategy that aligns with your objectives."
  },
  {
    number: "02", 
    title: "Creative Development",
    description: "Our creative team transforms strategy into compelling visuals, messaging, and experiences that resonate with your target audience and differentiate your brand."
  },
  {
    number: "03",
    title: "Implementation & Launch",
    description: "We execute the strategy across all relevant channels, ensuring consistent messaging and optimal performance from day one."
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Continuous monitoring and data-driven optimization ensure your campaigns perform at their best and deliver maximum ROI."
  },
  {
    number: "05",
    title: "Scale & Grow",
    description: "As we see what works, we scale successful initiatives and explore new opportunities to accelerate your growth."
  }
];
