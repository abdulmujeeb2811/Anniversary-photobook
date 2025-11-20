import React from 'react';

interface PhotoCardProps {
  imageUrl: string;
  message: string;
  isEven: boolean;
}

const CornerFlourish: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-12 h-12 text-purple-200/70 ${className}`} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 50V0H50C50 27.6142 27.6142 50 0 50Z" />
    </svg>
);


const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl, message, isEven }) => {
  const cardLayoutClasses = isEven ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`w-screen h-screen flex-shrink-0 p-4 md:p-8 bg-white flex flex-col ${cardLayoutClasses} gap-4 md:gap-8 items-center justify-center`}>
      {/* Image Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4">
        <img 
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl" 
          src={imageUrl} 
          alt="Anniversary memory" 
        />
      </div>

      {/* Message Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className="relative p-8 md:p-12">
            <CornerFlourish className="absolute top-0 left-0" />
            <CornerFlourish className="absolute top-0 right-0 transform -scale-x-100" />
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center" style={{ fontFamily: "'Merriweather', serif" }}>
                "{message}"
            </p>

            <CornerFlourish className="absolute bottom-0 left-0 transform -scale-y-100" />
            <CornerFlourish className="absolute bottom-0 right-0 transform -scale-x-100 -scale-y-100" />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
