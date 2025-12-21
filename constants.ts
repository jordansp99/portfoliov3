
import { Project, BlogPost, Experience, Publication } from './types';

// Simple Frontmatter Parser to avoid heavy dependencies and polyfill issues
const parseFrontmatter = (text: string) => {
  // Match YAML block between ---
  const pattern = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = text.match(pattern);
  
  if (!match) {
    // If no frontmatter, return empty attributes and full text
    return { attributes: {} as any, body: text };
  }

  const yaml = match[1];
  const body = match[2].trim();
  const attributes: any = {};
  
  let currentKey: string | null = null;

  yaml.split('\n').forEach(line => {
    // Skip empty lines
    if (!line.trim()) return;
    
    // Handle list items (e.g., tags)
    if (line.trim().startsWith('- ')) {
      if (currentKey && Array.isArray(attributes[currentKey])) {
        attributes[currentKey].push(line.trim().substring(2));
      }
      return;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      
      if (value === '') {
        // Start of a list (e.g., "tags:")
        currentKey = key;
        attributes[key] = [];
      } else {
        // Simple key-value
        currentKey = null;
        attributes[key] = value;
      }
    }
  });

  return { attributes, body };
};

// Helper to load content dynamically
const loadContent = <T>(files: Record<string, any>, type: 'project' | 'blog'): T[] => {
  return Object.entries(files).map(([path, mod]) => {
    const id = path.split('/').pop()?.replace('.md', '') || '';
    const content = mod.default as string;
    const parsed = parseFrontmatter(content);
    
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

