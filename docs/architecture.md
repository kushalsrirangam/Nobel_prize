# Laureate Lens — architecture and refactoring roadmap

## Current
The React/TypeScript app lives under `nobel-app/src/`. The Express backend under `nobel-app/server/` uses a local JSON dataset, simple text matching and an OpenAI chat completion fallback.

## Future structure (proposal only)
```text
frontend/                # Move nobel-app/src and frontend configs together
backend/                 # Express routes, data lookup service, provider adapters
  src/
    api/
    data/
    llm/                 # Existing OpenAI integration after repair
datasets/                # Document data provenance and preprocessing
docs/
tests/
```

## Refactoring order
1. Establish npm install, lint and build baseline; run backend separately.
2. Fix relative dataset loading paths and server dependency/configuration issues.
3. Make frontend API base URL environment-configurable instead of localhost hardcoding.
4. Split Express endpoint into input validation, dataset lookup, LLM client and response formatting.
5. Add tests for missing dataset, invalid prompts, API errors and provider timeouts.
6. Only after tests, migrate folders gradually and update scripts/imports.
7. Add a separate retrieval service if implementing embeddings/RAG; do not document current substring search as RAG.

No agent orchestration was observed in the reviewed backend.
