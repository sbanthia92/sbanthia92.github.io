---
title: fpl-context-mcp
summary: MCP server that gives any AI agent a queryable Premier League database plus live injury and availability flags.
order: 2
tags: [Python, MCP, PostgreSQL, Open source]
links:
  - { label: Source, url: "https://github.com/sbanthia92/fpl-context-mcp" }
---
A standalone [Model Context Protocol](https://modelcontextprotocol.io) server. It works in Claude Desktop, Claude Code, Cursor, VS Code Copilot, Windsurf, Gemini CLI and Codex, and can be hosted over HTTP for URL-only clients.

- `query_historical_stats`: read-only SQL against player, fixture and gameweek stats, including each player's status and injury news.
- `get_live_availability`: current FPL injury, suspension and availability flags, fetched live with no database needed.
- An ingestion job seeds and refreshes the database, with a `--check` command to verify connectivity.
