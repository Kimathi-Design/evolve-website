'use client';

import React from 'react';
// import Image from 'next/image';
import { Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  skills?: string[];
}

interface TeamCardProps {
  member: TeamMember;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export default function TeamCard({ 
  member, 
  variant = 'default',
  className = '' 
}: TeamCardProps) {
  const {
    name,
    role,
    image,
    bio,
    email,
    linkedin,
    twitter,
    skills
  } = member;

  if (variant === 'compact') {
    return (
      <div className={`bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-lg shadow-md overflow-hidden text-center ${className}`}>
        <div className="relative w-16 h-16 mx-auto mt-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{name}</h3>
          <p className="text-primary text-xs">{role}</p>
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-primary-light">{role}</p>
          </div>
        </div>
        
        <div className="p-6">
          {bio && (
            <p className="text-gray-600 dark:text-white text-sm leading-relaxed mb-4">
              {bio}
            </p>
          )}
          
          {skills && skills.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Expertise
              </h4>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-[#040711] text-gray-700 dark:text-white text-xs rounded-full border-0 dark:border dark:border-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-lg shadow-lg overflow-hidden text-center hover:shadow-xl transition-shadow duration-300 group ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-primary font-medium mb-3">
          {role}
        </p>
        
        {bio && (
          <p className="text-gray-600 dark:text-white text-sm leading-relaxed mb-4">
            {bio.length > 100 ? `${bio.substring(0, 100)}...` : bio}
          </p>
        )}
        
        {skills && skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap justify-center gap-1">
              {skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-[#040711] text-gray-700 dark:text-white text-xs rounded-full border-0 dark:border dark:border-primary"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-[#040711] dark:border dark:border-primary text-gray-700 dark:text-white text-xs rounded-full">
                  +{skills.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Grid component for displaying multiple team members
interface TeamGridProps {
  members: TeamMember[];
  variant?: 'default' | 'compact' | 'detailed';
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function TeamGrid({ 
  members, 
  variant = 'default',
  columns = 4,
  className = '' 
}: TeamGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {members.map((member) => (
        <TeamCard 
          key={member.id} 
          member={member} 
          variant={variant}
        />
      ))}
    </div>
  );
}
