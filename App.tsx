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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="bg-gray-900 relative">
        {/* Separador de onda */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
            <svg
                className="relative block w-full h-[100px] sm:h-[150px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    className="fill-slate-950"
                ></path>
            </svg>
        </div>
        <main className="max-w-7xl mx-auto px-6 lg:px-8">
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
      </div>
      <Footer />
    </div>
  );
};

export default App;