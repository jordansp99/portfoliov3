
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
export const PROJECTS: Project[] = loadContent<Project>(projectFiles, 'project')
  .sort((a, b) => {
    const orderA = a.order ? Number(a.order) : 999;
    const orderB = b.order ? Number(b.order) : 999;
    return orderA - orderB;
  });

// Load Blog Posts
const blogFiles = import.meta.glob('./content/posts/*.md', { eager: true, query: '?raw' });
export const BLOG_POSTS: BlogPost[] = loadContent<BlogPost>(blogFiles, 'blog')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const EXPERIENCES: Experience[] = [
  {
    company: "NeuralCraft AI",
    role: "Senior AI Engineer",
    period: "2022 - Present",
    description: [
      "Leading the development of multi-modal RAG systems for enterprise knowledge bases.",
      "Optimised inference latency by 40% through quantisation and custom CUDA kernels.",
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
    title: "Adapting Whisper for Regional Dialects: Enhancing Public Services for Vulnerable Populations in the United Kingdom",
    authors: "Torgbi, M., Clayman, A., Speight, J.J. and Madabushi, H.T.",
    venue: "arXiv preprint arXiv:2501.08502",
    year: "2025",
    link: "https://arxiv.org/abs/2501.08502"
  },
  {
    title: "Inclusive ASR for Critical Public Services: Debiasing with Actor-Simulated Speech",
    authors: "Torgbi, M., Clayman, A., Speight, J., Hirst, J. and Madabushi, H.T.",
    venue: "International Conference on Text, Speech, and Dialogue",
    year: "2025",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-02548-7_28"
  }
];

