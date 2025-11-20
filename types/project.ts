export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date?: string;
}
