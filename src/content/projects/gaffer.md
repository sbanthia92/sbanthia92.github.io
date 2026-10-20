---
title: The Gaffer
summary: AI analyst for Fantasy Premier League, backed by live data, SQL over multi-season stats, and press-conference RAG.
order: 1
tags: [Python, FastAPI, Claude tool use, Text-to-SQL, Pinecone, React, AWS, Terraform]
links:
  - { label: Live site, url: "https://the-gaffer.io" }
  - { label: Source, url: "https://github.com/sbanthia92/Gaffer" }
cover: ../../assets/projects/gaffer/home.jpg
coverAlt: The Gaffer landing page with a starting XI card
gallery:
  - { src: ../../assets/projects/gaffer/chat.jpg, alt: The Gaffer answering which premium midfielder is worth the price, caption: "Verdict, data and reasoning: comparing premium midfielders on xPts, ownership and fixtures." }
---
Ask anything about your FPL squad and get a clear verdict backed by evidence. Every answer draws from three layers:

1. **Live data** via tools: squad, player stats, fixture difficulty, standings and odds.
2. **Historical database**: PostgreSQL with multiple seasons of per-gameweek stats. Claude writes read-only SQL to answer questions like how a player has done against a given opponent.
3. **News and press RAG**: match reports and injury updates ingested into Pinecone twice daily, so it knows about last night's press conference.

Responses follow a verdict, data, reasoning structure with full conversation history so follow-ups work.

## Under the hood

FastAPI backend with SSE streaming, a multi-turn Claude tool-use loop, React and TypeScript front end, a custom ETL pipeline, and deployment on EC2 behind nginx with CI/CD in GitHub Actions, secrets in AWS Secrets Manager, and X-Ray and CloudWatch for observability.
