'use client';

import { cn } from '@/lib/utils';
import { businessHours, contactInfo } from '@/data/crepeloft/hours';
import { MapPin } from 'lucide-react';

export const VisitCard = () => {
  return (
    <div
      id="visit"
      className={cn(
        'rounded-2xl',
        'bg-[#F8DFE3] dark:bg-[#1E1418]',
        'shadow-[0_10px_24px_rgba(67,48,46,0.12)]',
        'dark:shadow-[0_10px_24px_rgba(0,0,0,0.3)]',
        'p-6 md:p-8',
        'w-full',
      )}
    >
      {/* Title */}
      <h3
        className={cn(
          'font-cursive',
          'text-3xl md:text-4xl',
          'font-bold',
          'text-[#0A0303] dark:text-[#FFF5F7]',
          'mb-6',
        )}
      >
        Visit Us
      </h3>

      {/* Map Preview */}
      <div
        className={cn(
          'relative overflow-hidden',
          'rounded-xl',
          'border border-[#755D59]/20 dark:border-[#F8DFE3]/10',
          'aspect-video md:aspect-[16/10]',
          'mb-6',
        )}
      >
        {/* Map placeholder with styling */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-secondary-200 dark:bg-[#171013]',
          )}
        >
          <MapPlaceholder />
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3 mb-6">
        <MapPin
          className={cn(
            'h-5 w-5 mt-0.5 flex-shrink-0',
            'text-primary-500',
          )}
        />
        <p
          className={cn(
            'font-sans text-sm md:text-base',
            'text-[#827D70] dark:text-[#FFF5F7]/70',
          )}
        >
          {contactInfo.address}
        </p>
      </div>

      {/* Hours */}
      <div>
        <h4
          className={cn(
            'font-sans font-bold text-sm uppercase tracking-wide',
            'text-[#0A0303] dark:text-[#FFF5F7]',
            'mb-3',
          )}
        >
          Hours
        </h4>
        <ul className="space-y-2">
          {businessHours.map((item) => (
            <li
              key={item.day}
              className={cn(
                'flex justify-between',
                'font-sans text-sm',
                'text-[#827D70] dark:text-[#FFF5F7]/70',
              )}
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MapPlaceholder = () => (
  <div className="relative w-full h-full">
    {/* Map background pattern */}
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Streets grid */}
      <g className="stroke-[#755D59]/20 dark:stroke-[#F8DFE3]/10" strokeWidth="1">
        {/* Horizontal streets */}
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="140" x2="400" y2="140" />
        <line x1="0" y1="200" x2="400" y2="200" />
        {/* Vertical streets */}
        <line x1="100" y1="0" x2="100" y2="250" />
        <line x1="200" y1="0" x2="200" y2="250" />
        <line x1="300" y1="0" x2="300" y2="250" />
      </g>

      {/* Buildings/blocks */}
      <g className="fill-secondary-300/50 dark:fill-[#2A1A20]/50">
        <rect x="20" y="20" width="60" height="45" rx="2" />
        <rect x="120" y="20" width="60" height="45" rx="2" />
        <rect x="220" y="20" width="60" height="45" rx="2" />
        <rect x="320" y="20" width="60" height="45" rx="2" />
        <rect x="20" y="95" width="60" height="30" rx="2" />
        <rect x="120" y="95" width="60" height="30" rx="2" />
        <rect x="220" y="95" width="60" height="30" rx="2" />
        <rect x="320" y="95" width="60" height="30" rx="2" />
        <rect x="20" y="155" width="60" height="30" rx="2" />
        <rect x="120" y="155" width="60" height="30" rx="2" />
        <rect x="320" y="155" width="60" height="30" rx="2" />
      </g>

      {/* Location marker */}
      <g transform="translate(200, 125)">
        {/* Marker shadow */}
        <ellipse
          cx="0"
          cy="15"
          rx="8"
          ry="3"
          className="fill-[#0A0303]/20 dark:fill-[#FFF5F7]/10"
        />
        {/* Marker pin */}
        <path
          d="M0 -20C-11 -20 -20 -11 -20 0C-20 11 0 25 0 25C0 25 20 11 20 0C20 -11 11 -20 0 -20Z"
          className="fill-primary-500"
        />
        {/* Marker center dot */}
        <circle cx="0" cy="-2" r="7" className="fill-white" />
      </g>

      {/* Park/green space */}
      <rect
        x="220"
        y="155"
        width="60"
        height="30"
        rx="2"
        className="fill-[#047857]/20 dark:fill-[#047857]/10"
      />
    </svg>

    {/* Attribution text */}
    <div
      className={cn(
        'absolute bottom-2 right-2',
        'text-xs',
        'text-[#827D70]/60 dark:text-[#FFF5F7]/30',
      )}
    >
      Map preview
    </div>
  </div>
);
