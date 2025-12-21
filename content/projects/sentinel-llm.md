---
title: Sentinel LLM Guard
description: An open-source security layer for Large Language Models to detect and mitigate prompt injection attacks.
tags: 
  - LLM
  - Security
  - Python
  - React
imageUrl: https://picsum.photos/seed/sentinel/800/400
---

# Sentinel LLM Guard

Sentinel is a security middleware designed to protect LLM-integrated applications.

## Key Features
- **Prompt Sanitization**: Automatically filters malicious patterns.
- **Output Validation**: Ensures model outputs adhere to safety guidelines.
- **Real-time Monitoring**: Dashboard for tracking security events.

## Technical Details
Built using **LangChain**, **FastAPI**, and **React**. The core engine uses a distilled BERT model to classify potential threats with 98.4% accuracy.