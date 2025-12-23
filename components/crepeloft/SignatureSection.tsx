'use client';

import { cn } from '@/lib/utils';
import { CrepeGallery } from './CrepeGallery';
import { VisitCard } from './VisitCard';

export const SignatureSection = () => {
  return (
    <section
      id="menu"
      className={cn(
        'w-full',
        'bg-secondary-100 dark:bg-[#120B0D]',
        'py-16 md:py-24 lg:py-32',
        'px-4 sm:px-6 lg:px-8',
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2
          className={cn(
            'font-cursive',
            'text-4xl sm:text-5xl md:text-6xl',
            'font-bold text-center',
            'text-[#0A0303] dark:text-[#FFF5F7]',
            'mb-10 md:mb-16',
          )}
        >
          Signature Crepes
        </h2>

        {/* Content Grid: Gallery + Visit Card */}
        <div
          className={cn(
            'grid gap-8 lg:gap-12',
            'lg:grid-cols-[1fr,380px]',
            'items-start',
          )}
        >
          {/* Gallery - stacks on top on mobile, left side on desktop */}
          <div className="order-1">
            <CrepeGallery />
          </div>

          {/* Visit Card - stacks below on mobile, right side on desktop */}
          <div className="order-2">
            <VisitCard />
          </div>
        </div>
      </div>
    </section>
  );
};
