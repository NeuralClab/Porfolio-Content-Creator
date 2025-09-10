import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Workflow from './components/Workflow';
import Optimization from './components/Optimization';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { verticalVideos, horizontalVideos } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Tools />
        <Workflow />
        <Optimization />
        <Gallery 
          id="galeria-vertical" 
          title="Contenidos verticales" 
          subtitle="TikTok, Reels & Shorts" 
          videos={verticalVideos} 
          isVertical={true} 
        />
        <Gallery 
          id="galeria-horizontal" 
          title="Vídeos horizontales" 
          subtitle="Proyectos en YouTube" 
          videos={horizontalVideos} 
          isVertical={false} 
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;