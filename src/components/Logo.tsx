import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  showSubtitle = true,
}) => {
  const isForcedLightText = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 shadow-md shadow-blue-900/20 text-white shrink-0 ring-1 ring-white/20">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          aria-hidden="true"
        >
          {/* Smartphone outer bezel */}
          <rect
            x="9"
            y="6"
            width="22"
            height="28"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-white"
          />
          {/* Speaker slit */}
          <line
            x1="17"
            y1="9"
            x2="23"
            y2="9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-blue-300"
          />
          {/* Circuit trace and stylized 'R' in the center */}
          <path
            d="M15 26V14H20C22.2 14 23.5 15.2 23.5 17C23.5 18.6 22.4 19.7 20.8 19.9L24 26H21.2L18.4 20.2H17.2V26H15ZM17.2 18.2H20C21 18.2 21.5 17.7 21.5 17C21.5 16.2 21 15.8 20 15.8H17.2V18.2Z"
            fill="currentColor"
            className="text-white"
          />
          {/* Home indicator bar */}
          <line
            x1="16"
            y1="31"
            x2="24"
            y2="31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-blue-300"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-extrabold tracking-tight text-base sm:text-lg ${
            isForcedLightText
              ? 'text-white'
              : 'text-slate-950 dark:text-white'
          }`}
        >
          Richard <span className="text-blue-600 dark:text-blue-400">Phone Solutions</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-wider ${
              isForcedLightText
                ? 'text-slate-300'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Omega Richard Enterprise
          </span>
        )}
      </div>
    </div>
  );
};
