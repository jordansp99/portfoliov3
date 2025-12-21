---
title: Optimizing Inference: Tips from the Field
date: February 10, 2024
excerpt: Practical techniques for reducing VRAM usage and increasing throughput in production LLMs.
tags:
  - Engineering
  - LLM
  - Optimization
---

# Optimizing Inference: Tips from the Field

Deploying models is easy; deploying them efficiently is hard.

## My Checklist
- **FP16 vs INT8**: When to trade precision for speed.
- **Flash Attention**: A game-changer for long context.
- **Speculative Decoding**: How to make big models feel like small ones.

In this post, I share the exact configuration tweaks I use at NeuralCraft.