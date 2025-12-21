---
title: VisionFlow
description: Real-time edge processing for multi-camera stream analysis using TensorRT.
tags:
  - Computer Vision
  - C++
  - TensorRT
  - Edge Computing
imageUrl: https://picsum.photos/seed/vision/800/400
---

# VisionFlow

High-throughput video stream analysis for smart city infrastructure.

## Performance
- **30 FPS** on NVIDIA Jetson Orin for 4 concurrent 4K streams.
- **< 50ms** end-to-end latency.

## Architecture
VisionFlow leverages a custom multi-threaded C++ pipeline to handle frame capture, decoding, and model inference without bottlenecks.