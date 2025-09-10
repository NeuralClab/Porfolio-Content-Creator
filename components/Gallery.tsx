import React, { useState } from 'react';
import type { VideoItem } from '../types';
import Lightbox from './Lightbox';

interface GalleryProps {
  id: string;
  title: string;
  subtitle: string;
  videos: VideoItem[];
  isVertical: boolean;
}

const VideoCard: React.FC<{ video: VideoItem; isVertical: boolean; onClick: () => void }> = ({ video, isVertical, onClick }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
    <img
      src={video.thumbnailUrl}
      alt={video.title}
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd"></path></svg>
    </div>
  </div>
);

const Gallery: React.FC<GalleryProps> = ({ id, title, subtitle, videos, isVertical }) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const gridClasses = isVertical
    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
    : 'grid-cols-1 md:grid-cols-2';
  
  const openLightbox = (url: string) => {
    setSelectedVideoUrl(url);
  };

  const closeLightbox = () => {
    setSelectedVideoUrl(null);
  };

  return (
    <>
      <section id={id} className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="text-gray-400 mt-2">{subtitle}</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>

        <div className={`grid ${gridClasses} gap-4 md:gap-6`}>
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              isVertical={isVertical}
              onClick={() => openLightbox(video.videoUrl)}
            />
          ))}
        </div>
      </section>

      {selectedVideoUrl && <Lightbox videoUrl={selectedVideoUrl} onClose={closeLightbox} isVertical={isVertical} />}
    </>
  );
};

export default Gallery;