# Sentinel LLM Guard

Sentinel is a security middleware designed to protect LLM-integrated applications.

## Key Features
- **Prompt Sanitization**: Automatically filters malicious patterns.
- **Output Validation**: Ensures model outputs adhere to safety guidelines.
- **Real-time Monitoring**: Dashboard for tracking security events.

## Technical Details
Built using **LangChain**, **FastAPI**, and **React**. The core engine uses a distilled BERT model to classify potential threats with 98.4% accuracy.
