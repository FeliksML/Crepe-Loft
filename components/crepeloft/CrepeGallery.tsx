'use client';

import { cn } from '@/lib/utils';
import { signatureCrepes } from '@/data/crepeloft/crepes';

export const CrepeGallery = () => {
  return (
    <div
      className={cn(
        'grid gap-4 md:gap-6',
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
      )}
    >
      {signatureCrepes.map((crepe, index) => (
        <CrepeCard key={crepe.id} crepe={crepe} index={index} />
      ))}
    </div>
  );
};

interface CrepeCardProps {
  crepe: (typeof signatureCrepes)[0];
  index: number;
}

const CrepeCard = ({ crepe, index }: CrepeCardProps) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        'rounded-2xl',
        'shadow-[0_10px_20px_rgba(67,48,46,0.16)]',
        'dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)]',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1',
        'hover:shadow-[0_14px_28px_rgba(67,48,46,0.22)]',
        'dark:hover:shadow-[0_14px_28px_rgba(0,0,0,0.5)]',
        'aspect-square',
      )}
    >
      {/* Image placeholder with gradient */}
      <div
        className={cn(
          'absolute inset-0',
          'bg-gradient-to-br',
          index === 0 && 'from-[#5E1F36] via-[#862D4D] to-secondary-400',
          index === 1 && 'from-secondary-400 via-[#B89E62] to-[#957C48]',
          index === 2 && 'from-primary-300 via-primary-400 to-primary-600',
          'dark:from-[#1E1418] dark:via-[#2A1A20] dark:to-[#171013]',
        )}
      />

      {/* Crepe illustration placeholder */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <CrepePlaceholder variant={index} />
      </div>

      {/* Hover overlay with name */}
      <div
        className={cn(
          'absolute inset-0',
          'bg-gradient-to-t from-[#0A0303]/60 via-transparent to-transparent',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
        )}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            className={cn(
              'font-sans font-medium text-sm',
              'text-white',
            )}
          >
            {crepe.name}
          </p>
        </div>
      </div>
    </div>
  );
};

const CrepePlaceholder = ({ variant }: { variant: number }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full opacity-70"
  >
    {/* Plate */}
    <ellipse
      cx="60"
      cy="100"
      rx="55"
      ry="12"
      className="fill-white/20"
    />
    <ellipse
      cx="60"
      cy="98"
      rx="50"
      ry="10"
      className="fill-white/30"
    />

    {/* Crepe base - folded triangle */}
    <path
      d="M20 85 L60 25 L100 85 Z"
      className="fill-secondary-300/80 dark:fill-secondary-500/60"
    />
    <path
      d="M25 82 L60 30 L95 82 Z"
      className="fill-secondary-200/90 dark:fill-secondary-400/50"
    />

    {/* Toppings based on variant */}
    {variant === 0 && (
      <>
        {/* Chocolate drizzle */}
        <path
          d="M35 50 Q50 60 45 75 Q55 65 65 75 Q75 60 85 70"
          className="stroke-[#5E1F36] dark:stroke-primary-700"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Strawberries */}
        <circle cx="40" cy="55" r="6" className="fill-primary-500" />
        <circle cx="55" cy="45" r="5" className="fill-primary-400" />
        <circle cx="70" cy="55" r="6" className="fill-primary-500" />
      </>
    )}

    {variant === 1 && (
      <>
        {/* Banana slices */}
        <ellipse cx="40" cy="55" rx="8" ry="5" className="fill-secondary-300" />
        <ellipse cx="55" cy="50" rx="7" ry="4" className="fill-secondary-400" />
        <ellipse cx="70" cy="55" rx="8" ry="5" className="fill-secondary-300" />
        <ellipse cx="62" cy="65" rx="7" ry="4" className="fill-secondary-400" />
        {/* Chocolate dots */}
        <circle cx="45" cy="70" r="3" className="fill-[#5E1F36]" />
        <circle cx="60" cy="75" r="2.5" className="fill-[#5E1F36]" />
        <circle cx="75" cy="70" r="3" className="fill-[#5E1F36]" />
      </>
    )}

    {variant === 2 && (
      <>
        {/* Mixed berries */}
        <circle cx="35" cy="55" r="5" className="fill-primary-600" />
        <circle cx="45" cy="48" r="4" className="fill-[#7C3AED]" />
        <circle cx="55" cy="52" r="5" className="fill-primary-500" />
        <circle cx="65" cy="45" r="4" className="fill-[#7C3AED]" />
        <circle cx="75" cy="52" r="5" className="fill-primary-400" />
        <circle cx="50" cy="62" r="4" className="fill-primary-600" />
        <circle cx="65" cy="60" r="3" className="fill-[#7C3AED]" />
        {/* Powdered sugar dots */}
        <circle cx="40" cy="70" r="1.5" className="fill-white/60" />
        <circle cx="55" cy="72" r="1" className="fill-white/60" />
        <circle cx="70" cy="68" r="1.5" className="fill-white/60" />
        <circle cx="80" cy="75" r="1" className="fill-white/60" />
      </>
    )}

    {/* Whipped cream */}
    <ellipse
      cx="60"
      cy="40"
      rx="10"
      ry="6"
      className="fill-white/80"
    />
    <ellipse
      cx="58"
      cy="38"
      rx="6"
      ry="4"
      className="fill-white/90"
    />
  </svg>
);
