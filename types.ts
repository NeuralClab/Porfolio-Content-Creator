
import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Tool {
  name: string;
  icon: React.ReactNode;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface OptimizationPlatform {
    name: string;
    icon: React.ReactNode;
}

export interface VideoItem {
  id: number;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
}