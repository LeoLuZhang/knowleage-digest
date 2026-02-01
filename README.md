# knowledge-digest

A lightweight, automated workflow for turning reading into reusable knowledge.

This repository is **not** a note-taking system.  
It is an experiment in treating personal knowledge as a **pipeline**, not a habit.

---

## What is this?

`knowledge-digest` is a simple, end-to-end automated process that:

- takes an article link as input
- processes it using AI-powered knowledge skills
- outputs a structured, reviewable knowledge card
- stores it in GitHub as long-term memory

The human role is intentionally minimal.

> **Humans decide value.  
> AI handles everything else.**

---

## The problem

Reading good content is easy.  
Making it **reviewed, structured, searchable, and reusable over time** is hard.

Most knowledge systems fail because they require humans to:
- download and archive content
- summarize manually
- keep formats consistent
- remember where things are stored

This repo flips that model.

---

## Workflow

1. 📎 Discover a good article (WeChat / Web / Anywhere)
2. 🤖 Send the link to OpenClaw
3. 📥 OpenClaw fetches and stores the original content locally
4. 🧠 Custom Knowledge Skills:
   - extract key ideas
   - generate structured summaries
   - normalize metadata
5. 📚 Automatically commit and push to this GitHub repository

Each article becomes a **knowledge digest**:
- readable by humans
- reviewable before acceptance
- consistent in structure
- easy to reuse later

---

## Why GitHub?

GitHub is used deliberately as the storage layer:

- Version control instead of folders
- Commit history instead of memory
- PRs instead of manual review rules

GitHub provides:
- durability
- traceability
- a natural human review gate

---

## Design principles

- **Automation first**  
  AI does repetitive, mechanical work.

- **Human-in-the-loop**  
  Humans only make value judgments: keep or discard.

- **Low ceremony**  
  No heavy taxonomy, no complex tools.

- **Digest, not archive**  
  Focus on extracting what matters, not saving everything.

---

## What this is NOT

- ❌ A note-taking app
- ❌ A “second brain” framework
- ❌ A bookmark or link collection
- ❌ An AI that decides what you should keep

---

## Current status

- ✅ End-to-end automation working
- ✅ OpenClaw integrated for orchestration
- ✅ Custom knowledge skills in place
- ✅ GitHub as the final knowledge store
- ✅ Automated workflow from URL to structured knowledge digest
- ✅ Human review gate implemented

---

## Next steps

- 🔍 Cross-article comparison by topic
- 👤 Author-based synthesis
- 🧠 Knowledge reuse in downstream workflows
- 🤖 Agent-based querying and reasoning

---

## Philosophy

> Knowledge should not just be stored.  
> It should be **processed, reviewed, and reused**.

`knowledge-digest` treats personal knowledge
as an **engineering system**, not a collection of notes.

---

## License

Personal experiment.  
Reuse ideas freely.
