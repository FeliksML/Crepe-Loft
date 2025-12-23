'use client';

import { cn } from '@/lib/utils';
import { CTAButton } from './CTAButton';
import Image from 'next/image';

export const StorySection = () => {
  return (
    <section
      id="story"
      className={cn(
        'w-full',
        'bg-[#F8DFE3] dark:bg-[#1A1013]',
        'py-16 md:py-24 lg:py-32',
        'px-4 sm:px-6 lg:px-8',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            'grid gap-8 md:gap-12 lg:gap-16',
            'md:grid-cols-2',
            'items-center',
          )}
        >
          {/* Photo Card */}
          <div className="relative">
            <div
              className={cn(
                'relative overflow-hidden',
                'rounded-2xl',
                'shadow-[0_10px_20px_rgba(67,48,46,0.16)]',
                'dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)]',
                'aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5]',
              )}
            >
              {/* Placeholder image with gradient background */}
              <div
                className={cn(
                  'absolute inset-0',
                  'bg-gradient-to-br from-secondary-200 via-secondary-300 to-secondary-400',
                  'dark:from-[#1E1418] dark:via-[#2A1A20] dark:to-[#1E1418]',
                )}
              />
              {/* Chef illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ChefIllustration className="w-3/4 h-3/4 opacity-60 dark:opacity-40" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start md:items-start text-center md:text-left">
            <h2
              className={cn(
                'font-cursive',
                'text-4xl sm:text-5xl md:text-6xl',
                'font-bold',
                'text-[#0A0303] dark:text-[#FFF5F7]',
                'mb-4 md:mb-6',
                'w-full md:w-auto',
              )}
            >
              Our Story
            </h2>

            <p
              className={cn(
                'font-sans',
                'text-base md:text-lg',
                'text-[#827D70] dark:text-[#FFF5F7]/70',
                'leading-relaxed',
                'mb-6 md:mb-8',
                'max-w-md',
              )}
            >
              Founded in the heart of California with a passion for authentic
              French cuisine, CrepeLoft brings the timeless art of crepe-making
              to your neighborhood. Each crepe is crafted with love, using
              recipes passed down through generations.
            </p>

            <p
              className={cn(
                'font-sans',
                'text-base md:text-lg',
                'text-[#827D70] dark:text-[#FFF5F7]/70',
                'leading-relaxed',
                'mb-8 md:mb-10',
                'max-w-md',
              )}
            >
              From the bustling streets of Paris to your table, we promise an
              experience that transports you to a charming Parisian café.
            </p>

            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <CTAButton href="#menu">Explore Our Menu</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChefIllustration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Chef hat */}
    <ellipse
      cx="100"
      cy="50"
      rx="40"
      ry="25"
      className="fill-primary-200 dark:fill-primary-800"
    />
    <rect
      x="70"
      y="45"
      width="60"
      height="30"
      rx="4"
      className="fill-primary-200 dark:fill-primary-800"
    />
    <circle cx="85" cy="40" r="12" className="fill-primary-100 dark:fill-primary-700" />
    <circle cx="100" cy="35" r="14" className="fill-primary-100 dark:fill-primary-700" />
    <circle cx="115" cy="40" r="12" className="fill-primary-100 dark:fill-primary-700" />

    {/* Face */}
    <ellipse
      cx="100"
      cy="95"
      rx="35"
      ry="30"
      className="fill-secondary-300 dark:fill-secondary-600"
    />
    {/* Eyes */}
    <circle cx="88" cy="90" r="3" className="fill-[#0A0303] dark:fill-[#FFF5F7]" />
    <circle cx="112" cy="90" r="3" className="fill-[#0A0303] dark:fill-[#FFF5F7]" />
    {/* Smile */}
    <path
      d="M90 105 Q100 115 110 105"
      className="stroke-[#0A0303] dark:stroke-[#FFF5F7]"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Body/apron */}
    <path
      d="M65 125 L70 180 L130 180 L135 125 Q100 140 65 125Z"
      className="fill-primary-100 dark:fill-primary-900"
    />

    {/* Arms */}
    <ellipse
      cx="55"
      cy="145"
      rx="15"
      ry="10"
      className="fill-secondary-300 dark:fill-secondary-600"
    />
    <ellipse
      cx="145"
      cy="145"
      rx="15"
      ry="10"
      className="fill-secondary-300 dark:fill-secondary-600"
    />

    {/* Pan */}
    <ellipse
      cx="155"
      cy="150"
      rx="25"
      ry="8"
      className="fill-[#827D70] dark:fill-[#F8DFE3]/50"
    />
    <rect
      x="175"
      y="147"
      width="20"
      height="6"
      rx="2"
      className="fill-[#5E1F36] dark:fill-primary-700"
    />

    {/* Crepe in pan */}
    <ellipse
      cx="155"
      cy="148"
      rx="18"
      ry="5"
      className="fill-secondary-400 dark:fill-secondary-500"
    />
  </svg>
);
