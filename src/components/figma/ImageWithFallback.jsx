import React, { useState } from 'react';

export function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  // Si une erreur survient lors du chargement de l'image originale
  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle overflow-hidden ${className || ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img 
            /* On pointe directement vers le fichier dans le dossier public */
            src="/unnamed.webp" 
            alt="Erreur de chargement" 
            className="max-w-full max-h-full object-contain opacity-50"
            {...rest} 
          />
        </div>
      </div>
    );
  }

  // Sinon, on affiche l'image normale
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError} 
    />
  );
}