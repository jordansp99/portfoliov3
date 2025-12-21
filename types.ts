
export interface Project {
  id: string;
  title: string;
  order?: number;
  description: string;
  tags: string[];
  imageUrl: string;
  markdown: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  markdown: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}
