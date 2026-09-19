import React from 'react';

interface GHLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'emerald';
}

export const GHLogo: React.FC<GHLogoProps> = ({
  className = "w-10 h-10",
  variant = "emerald"
}) => {
  // Variant colors
  const bgClasses = {
    emerald: "bg-emerald-900 text-emerald-100 border-emerald-800",
    dark: "bg-slate-900 text-slate-100 border-slate-800",
    light: "bg-white text-slate-900 border-slate-200 shadow-sm"
  }[variant];

  const fillClass = variant === 'light' ? 'fill-slate-900' : 'fill-amber-300';

  return (
    <div className={`${className} rounded-lg ${bgClasses} flex items-center justify-center p-1.5 border overflow-hidden`}>
      <svg
        viewBox="0 0 200 160"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GH Monogram Logo"
      >
        <g className={fillClass}>
          {/* Serif G and H Interlocking Monogram */}
          {/* G Outer Curve & Body */}
          <path d="M 85,35 C 75,22 55,22 38,36 C 20,52 14,78 18,102 C 22,126 42,142 66,142 C 84,142 98,130 102,112 L 102,96 L 70,96 L 70,110 L 87,110 C 84,122 75,128 64,128 C 48,128 32,115 30,95 C 28,73 40,48 60,40 C 72,35 84,40 88,48 L 98,38 Z" />
          
          {/* Diagonal Connector Bar from G to H */}
          <polygon points="56,96 128,52 128,68 62,108" />

          {/* H Left Vertical Stem */}
          <path d="M 115,35 L 140,35 L 140,135 L 115,135 L 115,124 L 126,124 L 126,46 L 115,46 Z" />

          {/* H Right Vertical Stem */}
          <path d="M 160,35 L 185,35 L 185,135 L 160,135 L 160,124 L 171,124 L 171,46 L 160,46 Z" />

          {/* H Horizontal Crossbar */}
          <rect x="126" y="80" width="46" height="14" />
        </g>
      </svg>
    </div>
  );
};
