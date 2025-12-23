'use client';

import { cn } from '@/lib/utils';

interface ParisIllustrationProps {
  className?: string;
}

export const ParisIllustration = ({ className }: ParisIllustrationProps) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Dusty rose skyline wash */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-1/2',
          'bg-gradient-to-t from-[#E8BBC2]/40 via-[#E8BBC2]/20 to-transparent',
          'dark:from-primary-900/25 dark:via-primary-900/10 dark:to-transparent',
        )}
      />

      {/* SVG Illustration */}
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Eiffel Tower - Left Side */}
        <g className="stroke-[#755D59] dark:stroke-[#F8DFE3]/55" strokeWidth="2" fill="none">
          {/* Tower base */}
          <path d="M180 580 L220 380 L260 580" />
          <path d="M195 580 L220 420 L245 580" />
          {/* Tower middle section */}
          <path d="M205 380 L220 280 L235 380" />
          <path d="M210 380 L220 300 L230 380" />
          {/* Tower top */}
          <path d="M215 280 L220 180 L225 280" />
          <path d="M220 180 L220 150" />
          {/* Cross beams */}
          <line x1="185" y1="520" x2="255" y2="520" />
          <line x1="195" y1="460" x2="245" y2="460" />
          <line x1="205" y1="380" x2="235" y2="380" />
          <line x1="210" y1="340" x2="230" y2="340" />
          {/* Decorative arches */}
          <path d="M190 580 Q220 550 250 580" />
          {/* Platform details */}
          <rect x="200" y="375" width="40" height="8" rx="1" />
        </g>

        {/* Paris Buildings - Right Side */}
        <g className="stroke-[#755D59] dark:stroke-[#F8DFE3]/55" strokeWidth="1.5" fill="none">
          {/* Building 1 - Haussmann style */}
          <rect x="1050" y="380" width="80" height="200" rx="2" />
          <path d="M1050 380 L1090 340 L1130 380" />
          {/* Windows */}
          <rect x="1060" y="400" width="15" height="25" rx="1" />
          <rect x="1085" y="400" width="15" height="25" rx="1" />
          <rect x="1110" y="400" width="15" height="25" rx="1" />
          <rect x="1060" y="440" width="15" height="25" rx="1" />
          <rect x="1085" y="440" width="15" height="25" rx="1" />
          <rect x="1110" y="440" width="15" height="25" rx="1" />
          <rect x="1060" y="480" width="15" height="25" rx="1" />
          <rect x="1085" y="480" width="15" height="25" rx="1" />
          <rect x="1110" y="480" width="15" height="25" rx="1" />
          {/* Door */}
          <rect x="1080" y="530" width="25" height="50" rx="1" />

          {/* Building 2 */}
          <rect x="1140" y="350" width="70" height="230" rx="2" />
          <path d="M1140 350 L1175 310 L1210 350" />
          {/* Chimney */}
          <rect x="1165" y="295" width="12" height="20" />
          {/* Windows */}
          <rect x="1150" y="370" width="12" height="20" rx="1" />
          <rect x="1170" y="370" width="12" height="20" rx="1" />
          <rect x="1190" y="370" width="12" height="20" rx="1" />
          <rect x="1150" y="405" width="12" height="20" rx="1" />
          <rect x="1170" y="405" width="12" height="20" rx="1" />
          <rect x="1190" y="405" width="12" height="20" rx="1" />
          <rect x="1150" y="440" width="12" height="20" rx="1" />
          <rect x="1170" y="440" width="12" height="20" rx="1" />
          <rect x="1190" y="440" width="12" height="20" rx="1" />
          {/* Door */}
          <rect x="1165" y="530" width="20" height="50" rx="8" />

          {/* Building 3 - Taller */}
          <rect x="1220" y="320" width="90" height="260" rx="2" />
          <path d="M1220 320 L1265 270 L1310 320" />
          {/* Windows - larger building */}
          <rect x="1230" y="340" width="18" height="28" rx="1" />
          <rect x="1258" y="340" width="18" height="28" rx="1" />
          <rect x="1286" y="340" width="18" height="28" rx="1" />
          <rect x="1230" y="385" width="18" height="28" rx="1" />
          <rect x="1258" y="385" width="18" height="28" rx="1" />
          <rect x="1286" y="385" width="18" height="28" rx="1" />
          <rect x="1230" y="430" width="18" height="28" rx="1" />
          <rect x="1258" y="430" width="18" height="28" rx="1" />
          <rect x="1286" y="430" width="18" height="28" rx="1" />
          {/* Balconies */}
          <line x1="1225" y1="383" x2="1315" y2="383" />
          <line x1="1225" y1="428" x2="1315" y2="428" />
          {/* Door */}
          <rect x="1250" y="520" width="30" height="60" rx="2" />
          <circle cx="1275" cy="550" r="2" />

          {/* Building 4 - Small cafe */}
          <rect x="1320" y="420" width="60" height="160" rx="2" />
          <path d="M1315 420 L1350 390 L1385 420" />
          {/* Awning */}
          <path d="M1320 460 Q1350 480 1380 460" />
          {/* Windows */}
          <rect x="1330" y="430" width="40" height="25" rx="1" />
          {/* Door */}
          <rect x="1340" y="510" width="20" height="70" rx="1" />
          {/* Cafe sign */}
          <rect x="1325" y="485" width="50" height="15" rx="2" />
        </g>

        {/* Decorative elements - Small details */}
        <g className="stroke-[#755D59] dark:stroke-[#F8DFE3]/55" strokeWidth="1" fill="none">
          {/* Street lamp left */}
          <line x1="320" y1="580" x2="320" y2="480" />
          <circle cx="320" cy="470" r="10" />
          <path d="M310 470 L330 470" />

          {/* Street lamp right */}
          <line x1="980" y1="580" x2="980" y2="500" />
          <circle cx="980" cy="490" r="8" />

          {/* Birds */}
          <path d="M400 200 Q410 190 420 200" />
          <path d="M430 180 Q440 170 450 180" />
          <path d="M900 150 Q910 140 920 150" />

          {/* Clouds - subtle */}
          <path d="M600 120 Q620 100 650 110 Q680 90 710 110 Q740 100 750 120" strokeWidth="1" opacity="0.5" />
          <path d="M150 100 Q170 85 190 95 Q210 80 230 100" strokeWidth="1" opacity="0.4" />
        </g>

        {/* Ground line */}
        <line
          x1="0"
          y1="580"
          x2="1440"
          y2="580"
          className="stroke-[#755D59]/30 dark:stroke-[#F8DFE3]/20"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
