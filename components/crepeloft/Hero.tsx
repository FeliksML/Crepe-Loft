'use client';

import { cn } from '@/lib/utils';
import { CTAButton } from './CTAButton';
import { ParisIllustration } from './ParisIllustration';

export const Hero = () => {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        'bg-secondary-100 dark:bg-[#120B0D]',
        'min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh]',
        'flex items-center justify-center',
        'px-4 sm:px-6 lg:px-8',
        'py-16 md:py-24 lg:py-32',
      )}
    >
      {/* Paris Illustration Background */}
      <ParisIllustration />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Headline */}
        <h1
          className={cn(
            'font-cursive',
            'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
            'font-bold leading-tight',
            'text-[#0A0303] dark:text-[#FFF5F7]',
            'mb-4 md:mb-6',
          )}
        >
          Sweet moments
          <span className="block">of joy</span>
        </h1>

        {/* Subheadline */}
        <p
          className={cn(
            'font-sans',
            'text-base sm:text-lg md:text-xl',
            'text-[#827D70] dark:text-[#FFF5F7]/70',
            'mb-8 md:mb-10',
            'max-w-lg mx-auto',
          )}
        >
          Authentic Parisian Crepes & Belgian Waffles
        </p>

        {/* CTA Button */}
        <CTAButton href="#menu">View Our Menu</CTAButton>
      </div>

      {/* Decorative gradient at bottom for smooth transition */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-24',
          'bg-gradient-to-t from-secondary-100 to-transparent',
          'dark:from-[#120B0D] dark:to-transparent',
          'pointer-events-none',
        )}
      />
    </section>
  );
};
