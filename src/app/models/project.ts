export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  category: string;
  featured: boolean;
  startDate: Date;
  endDate: Date | null;
  status: 'completed' | 'in-progress' | 'planned';
}