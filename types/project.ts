export interface Project {
  name: string;
  slug: string;
  description: string;
  images: string[];
  technologies: string[];
  duration: string;
  category: string;
  featured: boolean;
  url?: string;
}