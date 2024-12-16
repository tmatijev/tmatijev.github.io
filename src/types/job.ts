export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'freelance';
  responsibilities: string[];
  technologies?: string[];
} 