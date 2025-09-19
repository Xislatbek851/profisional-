import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'text';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'full' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const LogoIcon = () => (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle with Gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      
      {/* Main Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        className="dark:hidden"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradientDark)"
        className="hidden dark:block"
      />
      
      {/* Inner Design - Abstract Code Symbol */}
      <g transform="translate(25, 25)">
        {/* Code Brackets */}
        <path
          d="M15 10 L5 25 L15 40"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M35 10 L45 25 L35 40"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Central Dot */}
        <circle
          cx="25"
          cy="25"
          r="3"
          fill="white"
        />
        
        {/* Connecting Lines */}
        <line
          x1="18"
          y1="25"
          x2="22"
          y2="25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="25"
          x2="32"
          y2="25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  const LogoText = () => (
    <span className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent ${textSizes[size]} ${className}`}>
      XA
    </span>
  );

  const FullLogo = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon />
      <div className="flex flex-col">
        <span className={`font-bold text-gray-900 dark:text-white ${textSizes[size]}`}>
          Xislatbek
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium -mt-1">
          Developer
        </span>
      </div>
    </div>
  );

  switch (variant) {
    case 'icon':
      return <LogoIcon />;
    case 'text':
      return <LogoText />;
    case 'full':
    default:
      return <FullLogo />;
  }
};

export default Logo;
