---
title: Why Do People Live Here?
summary: Automated X pipeline that researches obscure remote settlements and posts a daily explainer.
order: 4
tags: [Python, LLM pipeline, PostgreSQL, X API]
links:
  - { label: Source, url: "https://github.com/sbanthia92/why-do-people-live-here" }
---
Each post is grounded in source-verified facts, passed through two yes/no editorial gates, and rotated across regions and settlement categories to keep the feed varied.

1. **Candidate selection** from Wikipedia categories and hand-picked lists, with a cheap structural filter before any LLM call.
2. **Research**: the full article plus concurrent web searches become a brief where every claim is tagged with its sources.
3. **Assessment**: an editor step asks whether the answer has an independent source and whether there is a real story.
4. **Generation** with a code-level length check and a separate fact check; failing drafts are sent back up to twice.
5. **Publishing** to X with a map card and a source reply.
