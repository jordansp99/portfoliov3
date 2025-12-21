
import { Project, BlogPost, Experience, Publication } from './types';

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
    markdown: `
# Sentinel LLM Guard

Sentinel is a security middleware designed to protect LLM-integrated applications.

## Key Features
- **Prompt Sanitization**: Automatically filters malicious patterns.
- **Output Validation**: Ensures model outputs adhere to safety guidelines.
- **Real-time Monitoring**: Dashboard for tracking security events.

## Technical Details
Built using **LangChain**, **FastAPI**, and **React**. The core engine uses a distilled BERT model to classify potential threats with 98.4% accuracy.
    `
  },
  {
    id: "vision-flow",
    title: "VisionFlow",
    description: "Real-time edge processing for multi-camera stream analysis using TensorRT.",
    tags: ["Computer Vision", "C++", "TensorRT", "Edge Computing"],
    imageUrl: "https://picsum.photos/seed/vision/800/400",
    markdown: `
# VisionFlow

High-throughput video stream analysis for smart city infrastructure.

## Performance
- **30 FPS** on NVIDIA Jetson Orin for 4 concurrent 4K streams.
- **< 50ms** end-to-end latency.

## Architecture
VisionFlow leverages a custom multi-threaded C++ pipeline to handle frame capture, decoding, and model inference without bottlenecks.
    `
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "future-of-multimodal",
    title: "The Future of Multimodal Reasoning",
    date: "March 15, 2024",
    excerpt: "Exploring how the convergence of vision, audio, and text models is reshaping human-computer interaction.",
    tags: ["Research", "AI Trends", "Multimodal"],
    markdown: `
# The Future of Multimodal Reasoning

Multimodal models are no longer just a research curiosity; they are becoming the backbone of intelligent systems.

## Why it matters
The ability for a model to "see" and "hear" provides a context that text alone cannot capture. This post dives into:
1. Architectural shifts from CLIP to GPT-4o.
2. The challenges of alignment across modalities.
3. Emerging applications in robotics.

Stay tuned as we navigate this exciting frontier.
    `
  },
  {
    id: "optimizing-inference",
    title: "Optimizing Inference: Tips from the Field",
    date: "February 10, 2024",
    excerpt: "Practical techniques for reducing VRAM usage and increasing throughput in production LLMs.",
    tags: ["Engineering", "LLM", "Optimization"],
    markdown: `
# Optimizing Inference: Tips from the Field

Deploying models is easy; deploying them efficiently is hard.

## My Checklist
- **FP16 vs INT8**: When to trade precision for speed.
- **Flash Attention**: A game-changer for long context.
- **Speculative Decoding**: How to make big models feel like small ones.

In this post, I share the exact configuration tweaks I use at NeuralCraft.
    `
  }
];
