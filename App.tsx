import React, { useState, useMemo } from 'react';
import { photobookData } from './constants';
import PhotoCard from './components/PhotoCard';

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline-block text-purple-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = useMemo(() => photobookData.length + 2, []); // Cover + Pages + End

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-screen h-screen bg-fuchsia-50 font-sans text-gray-800 overflow-hidden">
      {/* Pages Container */}
      <main
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}vw)` }}
      >
        {/* Cover Page */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            AbdulHameeds: One year with you
          </h1>
          <p className="mt-6 text-xl text-purple-600" style={{ fontFamily: "'Merriweather', serif" }}>
            A look back at the moments that made our love story.
          </p>
          <div className="mt-8">
            <HeartIcon />
          </div>
        </div>

        {/* Photo Pages */}
        {photobookData.map((entry, index) => (
          <PhotoCard
            key={entry.id}
            imageUrl={entry.imageUrl}
            message={entry.message}
            isEven={(index + 1) % 2 === 0}
          />
        ))}

        {/* End Page */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center text-center p-8 bg-white">
           <p className="text-2xl text-purple-600" style={{ fontFamily: "'Merriweather', serif" }}>To many more years of love, laughter, and adventure.</p>
           <p className="mt-4 text-4xl font-bold text-purple-500" style={{ fontFamily: "'Playfair Display', serif" }}>I Love You</p>
        </div>
      </main>

      {/* Navigation */}
      {currentPage > 0 && (
        <button
          onClick={goToPrevPage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          onClick={goToNextPage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Next page"
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};

export default App;
