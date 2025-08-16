'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function CTA({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  children,
  icon = false,
  className = '',
  disabled = false,
}: CTAProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-primary hover:bg-primary/90 text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        external ? (
          <ExternalLink className="ml-2 w-4 h-4" />
        ) : (
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        )
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes} group`}
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link href={href} className={`${classes} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${classes} group`}
    >
      {content}
    </button>
  );
}

// Specialized CTA Components
export function PrimaryCTA({ children, ...props }: Omit<CTAProps, 'variant'>) {
  return (
    <CTA variant="primary" {...props}>
      {children}
    </CTA>
  );
}

export function SecondaryCTA({ children, ...props }: Omit<CTAProps, 'variant'>) {
  return (
    <CTA variant="secondary" {...props}>
      {children}
    </CTA>
  );
}

export function OutlineCTA({ children, ...props }: Omit<CTAProps, 'variant'>) {
  return (
    <CTA variant="outline" {...props}>
      {children}
    </CTA>
  );
}

// Section CTA Component for full-width sections
interface SectionCTAProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  className?: string;
}

export function SectionCTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className = '',
}: SectionCTAProps) {
  return (
    <section className={`py-16 bg-gray-900 dark:bg-[#040711] text-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryCTA
            href={primaryCTA.href}
            external={primaryCTA.external}
            size="lg"
            icon
          >
            {primaryCTA.text}
          </PrimaryCTA>
          {secondaryCTA && (
            <OutlineCTA
              href={secondaryCTA.href}
              external={secondaryCTA.external}
              size="lg"
              icon
            >
              {secondaryCTA.text}
            </OutlineCTA>
          )}
        </div>
      </div>
    </section>
  );
}
