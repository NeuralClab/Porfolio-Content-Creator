import React, { useEffect } from 'react';

interface LightboxProps {
  videoUrl: string;
  onClose: () => void;
  isVertical?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ videoUrl, onClose, isVertical }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const getAutoplayUrl = (url: string) => {
    try {
      const urlObject = new URL(url);
      urlObject.searchParams.set('autoplay', '1');
      urlObject.searchParams.set('origin', window.location.origin);
      return urlObject.toString();
    } catch (error) {
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}autoplay=1&origin=${window.location.origin}`;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes zoom-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
            animation: zoom-in 0.3s ease-out;
        }
      `}</style>
      <div
        className={`relative bg-black rounded-lg w-full shadow-xl overflow-hidden animate-zoom-in ${isVertical ? 'max-w-sm' : 'max-w-4xl'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white transition-transform transform hover:scale-110"
          aria-label="Cerrar vídeo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className={isVertical ? 'aspect-[9/16]' : 'aspect-video'}>
          <iframe
            src={getAutoplayUrl(videoUrl)}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;