'use client';

import { cn } from '@/lib/utils';
import { contactInfo } from '@/data/crepeloft/hours';
import { socialLinks } from '@/data/crepeloft/social';
import { Phone, Globe, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      id="contact"
      className={cn(
        'w-full',
        'bg-[#0A0303]',
        'py-8 md:py-10',
        'px-4 sm:px-6 lg:px-8',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            'flex flex-col md:flex-row',
            'items-center justify-between',
            'gap-6 md:gap-8',
          )}
        >
          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-white/85" />
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className={cn(
                'font-sans text-sm md:text-base',
                'text-white/85',
                'hover:text-white',
                'transition-colors duration-200',
              )}
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Website */}
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-white/85" />
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'font-sans text-sm md:text-base',
                'text-white/85',
                'hover:text-white',
                'transition-colors duration-200',
              )}
            >
              {contactInfo.website}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={cn(
                  'flex items-center justify-center',
                  'w-10 h-10 rounded-full',
                  'bg-primary-500',
                  'transition-all duration-200',
                  'hover:bg-primary-600',
                  'hover:scale-105',
                  'focus:outline-none focus:ring-2 focus:ring-primary-300/40 focus:ring-offset-2 focus:ring-offset-[#0A0303]',
                )}
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className={cn(
            'mt-8 pt-6',
            'border-t border-white/10',
            'text-center',
          )}
        >
          <p
            className={cn(
              'font-sans text-xs',
              'text-white/50',
            )}
          >
            &copy; {new Date().getFullYear()} CrepeLoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: 'facebook' | 'instagram' | 'pinterest';
}

const SocialIcon = ({ icon }: SocialIconProps) => {
  const iconClass = 'h-5 w-5 text-white';

  switch (icon) {
    case 'facebook':
      return <Facebook className={iconClass} />;
    case 'instagram':
      return <Instagram className={iconClass} />;
    case 'pinterest':
      return <PinterestIcon className={iconClass} />;
    default:
      return null;
  }
};

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="8" x2="12" y2="16" />
    <path d="M9 12c0-3 1.5-5 3-5s3 2 3 5-1.5 5-3 5c-1 0-1.5-.5-2-1" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
