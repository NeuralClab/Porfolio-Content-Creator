import React from 'react';
import type { NavLink, Tool, WorkflowStep, OptimizationPlatform, VideoItem } from './types';

export const navLinks: NavLink[] = [
  { name: 'Quién soy', href: '#quien-soy' },
  { name: 'Herramientas', href: '#herramientas' },
  { name: 'Cómo trabajo', href: '#como-trabajo' },
  { name: 'Galería', href: '#galeria-vertical' },
  { name: '¿Hablamos?', href: '#hablamos' },
];

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700 mb-4">
        {children}
    </div>
);

// Generic Icons
export const FilmoraIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></IconWrapper>;
export const CapcutIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></IconWrapper>;
export const InShotIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg></IconWrapper>;
export const AdobePremiereIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" /></svg></IconWrapper>;
export const ChatGptIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></IconWrapper>;
export const GeminiIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6.5 17.5l-3 3M17.5 6.5l3-3M21 5h-4M19 3v4M12 19a7 7 0 100-14 7 7 0 000 14z"></path></svg></IconWrapper>;
export const MidjourneyIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></IconWrapper>;
export const GenericAiIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></IconWrapper>;


export const editingTools: Tool[] = [
    { name: 'Filmora', icon: <FilmoraIcon /> },
    { name: 'Capcut', icon: <CapcutIcon /> },
    { name: 'InShot', icon: <InShotIcon /> },
    { name: 'Adobe Premiere', icon: <AdobePremiereIcon /> },
];

export const aiTools: Tool[] = [
    { name: 'ChatGPT Plus', icon: <ChatGptIcon /> },
    { name: 'Gemini', icon: <GeminiIcon /> },
    { name: 'OpusClip', icon: <GenericAiIcon /> },
    { name: 'RunWay', icon: <GenericAiIcon /> },
    { name: 'Leonardo AI', icon: <GenericAiIcon /> },
    { name: 'Midjourney', icon: <MidjourneyIcon /> },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'TARGET',
    description: 'Auditoría previa del target y keywords en TikTok, Youtube e Instagram para entender a la audiencia y sus intereses.',
  },
  {
    step: '02',
    title: 'TEMÁTICAS',
    description: 'Auditoría previa de temáticas de interés. Analizo tendencias y conversaciones para identificar oportunidades de contenido relevante.',
  },
  {
    step: '03',
    title: 'GUIÓN',
    description: 'Con las keywords y temáticas extraídas, procedo con la redacción de un guión optimizado y estructurado para enganchar desde el primer segundo.',
  },
];

export const optimizationPlatforms: OptimizationPlatform[] = [
    { name: 'YouTube', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
    { name: 'TikTok', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.94-2.1-4.48-1.6-6.84 1.1-5.12 5.55-9.28 10.74-9.75.12-.01.23-.02.35-.02z"/></svg> },
    { name: 'Instagram', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.01-4.717.067-2.61.12-3.832 1.34-3.951 3.951-.057 1.234-.067 1.6-.067 4.717s.01 3.483.067 4.717c.12 2.61 1.34 3.832 3.951 3.951 1.234.057 1.6.067 4.717.067s3.483-.01 4.717-.067c2.61-.12 3.832-1.34 3.951-3.951.057-1.234.067-1.6.067-4.717s-.01-3.483-.067-4.717c-.12-2.61-1.34-3.832-3.951-3.951C15.483 3.975 15.116 3.965 12 3.965zM12 6.848c-2.835 0-5.152 2.316-5.152 5.152s2.317 5.152 5.152 5.152 5.152-2.316 5.152-5.152-2.317-5.152-5.152-5.152zm0 8.498c-1.844 0-3.348-1.503-3.348-3.348s1.504-3.348 3.348-3.348 3.348 1.503 3.348 3.348-1.504 3.348-3.348 3.348zm5.468-6.402c-.783 0-1.418.635-1.418 1.418s.635 1.418 1.418 1.418 1.418-.635 1.418-1.418-.635-1.418-1.418-1.418z" /></svg> },
    { name: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg> },
];

export const verticalVideos: VideoItem[] = [
  {
    id: 1,
    thumbnailUrl: 'https://i.ytimg.com/vi/2LPZNJ4at-E/hq720.jpg',
    title: 'Mi Primer Short',
    videoUrl: 'https://www.youtube.com/embed/2LPZNJ4at-E',
  },
  {
    id: 2,
    thumbnailUrl: 'https://i.ytimg.com/vi/ftL7u0ubWnQ/hq720.jpg',
    title: 'Mi Segundo Short',
    videoUrl: 'https://www.youtube.com/embed/ftL7u0ubWnQ',
  },
  {
    id: 3,
    thumbnailUrl: 'https://i.ytimg.com/vi/so0_5EFDHJ4/hq720.jpg',
    title: 'Mi Tercer Short',
    videoUrl: 'https://www.youtube.com/embed/so0_5EFDHJ4',
  },
  {
    id: 4,
    thumbnailUrl: 'https://i.ytimg.com/vi/I09lyfyqVmc/hq720.jpg',
    title: 'Mi Cuarto Short',
    videoUrl: 'https://www.youtube.com/embed/I09lyfyqVmc',
  },
];


export const horizontalVideos: VideoItem[] = [
  {
    id: 1,
    thumbnailUrl: 'https://i.ytimg.com/vi/_ezS9eyHQNs/hq720.jpg',
    title: 'Este ERROR te está haciendo PERDER CLIENTES',
    videoUrl: 'https://www.youtube.com/embed/_ezS9eyHQNs',
  },
  {
    id: 2,
    thumbnailUrl: 'https://i.ytimg.com/vi/MPI_-BXi2tQ/hq720.jpg',
    title: 'Cómo EDITAR VÍDEOS con INTELIGENCIA ARTIFICIAL',
    videoUrl: 'https://www.youtube.com/embed/MPI_-BXi2tQ',
  },
  {
    id: 3,
    thumbnailUrl: 'https://i.ytimg.com/vi/s_4icXu047Q/hq720.jpg',
    title: '7 TRUCOS para GRABAR VÍDEOS con el MÓVIL',
    videoUrl: 'https://www.youtube.com/embed/s_4icXu047Q',
  },
  {
    id: 4,
    thumbnailUrl: 'https://i.ytimg.com/vi/wrIr9lkjdSQ/hq720.jpg',
    title: 'Cómo hacerte VIRAL en TIKTOK en 24 HORAS',
    videoUrl: 'https://www.youtube.com/embed/wrIr9lkjdSQ',
  },
];