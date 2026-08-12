import React from 'react';

interface ZealLogoProps {
  className?: string;
  variant?: 'full' | 'iconOnly' | 'darkHeader';
  height?: number;
}

export const ZealLogo: React.FC<ZealLogoProps> = ({
  className = '',
  variant = 'full',
  height = 48,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG rendering of the Zeal Construction Logo */}
      <svg
        height={height}
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-auto max-h-[56px] drop-shadow-sm transition-transform duration-200 hover:scale-[1.02] rounded-md"
        aria-label="Zeal Construction Logo"
      >
        {/* Background rounded subtle box for crisp visibility */}
        <rect width="200" height="160" rx="8" fill="#FFFFFF" />

        {/* Outer Z with horizontal stripe pattern */}
        <defs>
          <pattern
            id="stripesPattern"
            width="200"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <rect width="200" height="2.5" fill="#1E3A8A" />
            <rect y="2.5" width="200" height="2.5" fill="#FFFFFF" />
          </pattern>
        </defs>

        <g>
          {/* Main Z Shape filled with navy horizontal stripes */}
          <rect x="25" y="18" width="150" height="18" fill="url(#stripesPattern)" />
          
          <polygon
            points="175,36 125,36 30,105 30,120 170,120 170,105 75,105"
            fill="url(#stripesPattern)"
          />

          <text
            x="96"
            y="102"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="36"
            fill="#1E3A8A"
            letterSpacing="-1"
          >
            EAL
          </text>

          <rect x="10" y="112" width="180" height="10" fill="url(#stripesPattern)" />

          <rect x="10" y="122" width="180" height="26" fill="#1E3A8A" rx="2" />
          <text
            x="100"
            y="141"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            fill="#FFFFFF"
            textAnchor="middle"
            letterSpacing="2.5"
          >
            CONSTRUCTION
          </text>
        </g>
      </svg>

      {variant !== 'iconOnly' && (
        <div className="hidden sm:flex flex-col text-left leading-tight">
          <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
            ZEAL <span className="text-amber-400">CONSTRUCTION</span>
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
            Water Proofing, Engineers & Contractors
          </span>
        </div>
      )}
    </div>
  );
};
