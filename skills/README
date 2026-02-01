# Knowledge Skills

This directory contains the **Knowledge Skills** used by `knowledge-digest`.

Skills define *how raw content is transformed into structured knowledge*.
They are deterministic, reusable, and intentionally limited in scope.

---

## What are Knowledge Skills?

Knowledge Skills are **AI-assisted processing units** that perform
repeatable, mechanical tasks in the knowledge pipeline.

They do **not** decide what is valuable.
They do **not** replace human judgment.

> Skills transform content.  
> Humans decide whether it matters.

---

## Responsibilities of Skills

Each Knowledge Skill is responsible for:

- Fetching or processing source content
- Extracting key ideas from the source
- Structuring output using `NOTE_TEMPLATE.md`
- Normalizing metadata (author, dates, topics, tags)
- Explicitly stating uncertainty or missing information
- Assigning a confidence level to the output

The output of a skill is always a **draft**, never a final truth.

---

## What Skills deliberately do NOT do

To avoid overreach and hallucination, skills must NOT:

- Decide whether a piece of content is worth keeping
- Filter content based on “importance”
- Invent facts or fill gaps silently
- Optimize for style over accuracy
- Replace the human review step

If a skill cannot confidently infer something from the source,
it must say so explicitly.

---

## Skill lifecycle

Raw input → Skill processing → Draft knowledge digest → Human review


Once a skill finishes execution:
- the result is stored as a draft
- a human review is always required before committing

---

## Typical skill outputs

A Knowledge Skill typically produces:

- A markdown file following `NOTE_TEMPLATE.md`
- Structured sections:
  - TL;DR
  - Key ideas
  - Why this matters
  - Actionable takeaways
- Normalized metadata in frontmatter
- A confidence assessment

Skills may also generate:
- suggested commit messages
- review checklists
- related topic hints

---

## Design principles

All Knowledge Skills follow these principles:

### 1. Deterministic structure
Same input shape → same output shape.

This keeps knowledge digests:
- reviewable
- comparable
- reusable

---

### 2. Explicit uncertainty
If something is unclear:
- say it
- lower confidence

Silence is worse than incompleteness.

---

### 3. Human-first judgment
Skills assist cognition.
They do not replace judgment.

The keep/discard decision always belongs to humans.

---

### 4. Reusability over cleverness
Skills are designed to be:
- composable
- reusable
- boring in the best possible way

If a skill is impressive but fragile, it is not acceptable.

---

## Example skills (conceptual)

- `article-digest`
  - Turns an article URL into a structured knowledge note

- `metadata-normalizer`
  - Cleans up author, date, and topic information

- `review-assist`
  - Generates a lightweight review checklist for humans

These are examples of *roles*, not strict implementations.

---

## Why Skills matter

Without skills:
- knowledge collection becomes manual
- formats drift
- quality becomes inconsistent

With skills:
- structure is enforced automatically
- humans focus on meaning, not mechanics
- knowledge becomes cumulative instead of chaotic

---

## Guiding belief

> Knowledge work scales only when
> judgment and repetition are cleanly separated.

Knowledge Skills exist to protect that boundary.


