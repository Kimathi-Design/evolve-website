'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  image: string;
  challenge: string;
  result: string;
  metrics?: string;
  tags?: string[];
  href?: string;
}

interface CaseCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export default function CaseCard({ 
  caseStudy, 
  variant = 'default',
  className = '' 
}: CaseCardProps) {
  const {
    title,
    client,
    image,
    challenge,
    result,
    metrics,
    tags,
    href
  } = caseStudy;

  if (variant === 'compact') {
    return (
      <div className={`bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden ${className}`}>
        <div className="relative h-40">
          <Image
            src={image}
            alt={`${client} case study`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-semibold text-sm">{client}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 dark:text-white mb-2">{challenge}</p>
          <p className="text-sm font-medium text-accent">{result}</p>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group ${className}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={`${client} case study`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{client}</h3>
            <p className="text-sm opacity-90">{title}</p>
          </div>
          {tags && (
            <div className="absolute top-4 right-4">
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/90 text-white text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {challenge}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {result}
              </p>
              {metrics && (
                <div className="flex items-center text-accent font-medium text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {metrics}
                </div>
              )}
            </div>
          </div>
          
          {href && (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={href}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors group"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={`${client} case study`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-bold">{client}</h3>
          {title && <p className="text-sm opacity-90">{title}</p>}
        </div>
        {tags && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-primary/90 text-white text-xs rounded-full">
              {tags[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="space-y-3">
          <div>
            <p className="text-gray-600 dark:text-white text-sm leading-relaxed">
              <span className="font-medium text-gray-900 dark:text-white">Challenge:</span> {challenge}
            </p>
          </div>
          
          <div>
            <p className="text-gray-600 dark:text-white text-sm leading-relaxed">
              <span className="font-medium text-gray-900 dark:text-white">Results:</span> {result}
            </p>
            {metrics && (
              <div className="flex items-center text-accent font-medium text-sm mt-2">
                <TrendingUp className="w-4 h-4 mr-1" />
                {metrics}
              </div>
            )}
          </div>
        </div>
        
        {href && (
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <a
              href={href}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Grid component for displaying multiple case studies
interface CaseGridProps {
  cases: CaseStudy[];
  variant?: 'default' | 'featured' | 'compact';
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function CaseGrid({ 
  cases, 
  variant = 'default',
  columns = 3,
  className = '' 
}: CaseGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {cases.map((caseStudy) => (
        <CaseCard 
          key={caseStudy.id} 
          caseStudy={caseStudy} 
          variant={variant}
        />
      ))}
    </div>
  );
}
