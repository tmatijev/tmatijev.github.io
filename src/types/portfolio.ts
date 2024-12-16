export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'fulltime' | 'freelance';
  responsibilities: string[];
  technologies?: string[];
} 