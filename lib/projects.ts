export type Project = {
  name: string;
  description: string;
  direction: string;
  outcomes: string[];
  technologies: string[];
  status: string;
  updatedAt?: string;
  stars?: number;
  forks?: number;
  isFork?: boolean;
  links: Array<{
    label: string;
    href: string;
  }>;
};

// Add your real projects here. The home page and /projects page
// will render whatever is in this array.
export const projects: Project[] = [];
