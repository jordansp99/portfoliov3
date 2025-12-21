---
title: Neural Style Transfer for Design
order: 3
description: A tool for designers to apply artistic styles to product prototypes using VGG-19 based optimization.
tags:
  - Computer Vision
  - PyTorch
  - Design Tools
imageUrl: https://picsum.photos/seed/style/800/400
---

# Neural Style Transfer for Design

Bridging the gap between fine art and industrial design.

## Overview
This project implements a neural style transfer algorithm based on the [Gatys et al. paper](https://arxiv.org/abs/1508.06576), optimised for high-resolution output suitable for print media.

## Implementation
Here is a snippet of the style loss calculation:

```python
def calc_style_loss(gen, style):
    gen_features = model(gen)
    style_features = model(style)
    loss = 0
    for gf, sf in zip(gen_features, style_features):
        loss += torch.mean((gram_matrix(gf) - gram_matrix(sf)) ** 2)
    return loss
```

## Results
We achieved real-time performance using a feed-forward network.

![Style Transfer Example](https://picsum.photos/seed/result/800/400)