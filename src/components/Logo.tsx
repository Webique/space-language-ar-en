import React from 'react';
import logoImage from '@/assets/logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <img
      src={logoImage}
      alt="Space Language Logo"
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
};

export default Logo;
