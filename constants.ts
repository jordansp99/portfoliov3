
import { Project, BlogPost, Experience, Publication } from './types';
import sentinelLlmMd from './content/projects/sentinel-llm.md?raw';
import visionFlowMd from './content/projects/vision-flow.md?raw';
import futureMultimodalMd from './content/posts/future-of-multimodal.md?raw';
import optimizingInferenceMd from './content/posts/optimizing-inference.md?raw';

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

export const PROJECTS: Project[] = [
  {
    id: "sentinel-llm",
    title: "Sentinel LLM Guard",
    description: "An open-source security layer for Large Language Models to detect and mitigate prompt injection attacks.",
    tags: ["LLM", "Security", "Python", "React"],
    imageUrl: "https://picsum.photos/seed/sentinel/800/400",
    markdown: sentinelLlmMd
  },
  {
    id: "vision-flow",
    title: "VisionFlow",
    description: "Real-time edge processing for multi-camera stream analysis using TensorRT.",
    tags: ["Computer Vision", "C++", "TensorRT", "Edge Computing"],
    imageUrl: "https://picsum.photos/seed/vision/800/400",
    markdown: visionFlowMd
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "future-of-multimodal",
    title: "The Future of Multimodal Reasoning",
    date: "March 15, 2024",
    excerpt: "Exploring how the convergence of vision, audio, and text models is reshaping human-computer interaction.",
    tags: ["Research", "AI Trends", "Multimodal"],
    markdown: futureMultimodalMd
  },
  {
    id: "optimizing-inference",
    title: "Optimizing Inference: Tips from the Field",
    date: "February 10, 2024",
    excerpt: "Practical techniques for reducing VRAM usage and increasing throughput in production LLMs.",
    tags: ["Engineering", "LLM", "Optimization"],
    markdown: optimizingInferenceMd
  }
];
