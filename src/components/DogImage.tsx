import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';

interface DogImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const DogImage: React.FC<DogImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-[#F4EFE6] to-[#EAE0D2] flex flex-col items-center justify-center text-[#8C5E3C] p-4 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <PawPrint className="w-8 h-8 mb-2 opacity-50 text-[#8C5E3C]" />
        <span className="text-xs font-medium text-[#6E5D53] line-clamp-2">
          {fallbackText || alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#F4EFE6] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE6] via-[#EFE6D8] to-[#F4EFE6] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
