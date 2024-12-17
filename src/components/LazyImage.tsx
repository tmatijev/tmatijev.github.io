import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      setTimeout(() => setBlur(false), 50);
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`absolute inset-0 bg-gray-200 animate-pulse ${
          blur ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
      />
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          loaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
        loading="lazy"
      />
    </div>
  );
} 