
import fm from 'front-matter';
import { Project, BlogPost, Experience, Publication } from './types';

// Helper to load content dynamically
const loadContent = <T>(files: Record<string, any>, type: 'project' | 'blog'): T[] => {
  return Object.entries(files).map(([path, mod]) => {
    const id = path.split('/').pop()?.replace('.md', '') || '';
    const content = mod.default as string;
    const parsed = fm<any>(content);
    
    return {
      id,
      ...parsed.attributes,
      markdown: parsed.body
    } as T;
  });
};

// Load Projects
const projectFiles = import.meta.glob('./content/projects/*.md', { eager: true, query: '?raw' });
export const PROJECTS: Project[] = loadContent<Project>(projectFiles, 'project');

// Load Blog Posts
const blogFiles = import.meta.glob('./content/posts/*.md', { eager: true, query: '?raw' });
export const BLOG_POSTS: BlogPost[] = loadContent<BlogPost>(blogFiles, 'blog');

export const EXPERIENCES: Experience[] = [
  {
    company: "NeuralCraft AI",
    role: "Senior AI Engineer",
    period: "2022 - Present",
    description: [
      "Leading the development of multi-modal RAG systems for enterprise knowledge bases.",
      "Optimized inference latency by 40% through quantization and custom CUDA kernels.",
      "Managed a team of 4 engineers focusing on vision-language models."
    ]
  },
  {
    company: "DataVizion Inc.",
    role: "Machine Learning Engineer",
    period: "2020 - 2022",
    description: [
      "Deployed real-time object detection systems for industrial quality control.",
      "Built automated data labeling pipelines using active learning strategies.",
      "Collaborated with cross-functional teams to integrate ML models into production React apps."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Latent Space Optimization for Real-time Multi-modal Alignment",
    authors: "Speight, J., Chen, L., et al.",
    venue: "NeurIPS 2023 Workshop on Generative AI",
    year: "2023",
    link: "#"
  },
  {
    title: "Sparse Attention Mechanisms in Edge Computing Environments",
    authors: "Speight, J.",
    venue: "International Journal of Computer Vision",
    year: "2022",
    link: "#"
  },
  {
    title: "Automating Qualitative Labeling for Industrial Vision Systems",
    authors: "Speight, J., Miller, P.",
    venue: "CVPR Technical Reports",
    year: "2021"
  }
];

