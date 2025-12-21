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

![Optimization Diagram](https://picsum.photos/seed/optimize/800/400)

## My Checklist
- **FP16 vs INT8**: When to trade precision for speed.
- **Flash Attention**: A game-changer for long context.
- **Speculative Decoding**: How to make big models feel like small ones.

## Example Configuration

Here is how I configure the model loader for 4-bit quantization using `bitsandbytes`:

```python
import torch
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

def load_quantized_model(model_id):
    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.bfloat16
    )

    model = AutoModelForCausalLM.from_pretrained(
        model_id,
        quantization_config=bnb_config,
        device_map="auto"
    )
    return model
```

In this post, I share the exact configuration tweaks I use at NeuralCraft.
