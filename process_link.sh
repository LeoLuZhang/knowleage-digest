#!/bin/bash

# Script to process a URL and create a knowledge digest following the defined workflow
# Usage: ./process_link.sh <URL>

set -e  # Exit on any error

if [ $# -ne 1 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

URL="$1"
OUTPUT_DIR="knowledge_digested"

echo "Processing URL: $URL"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Step 1: Fetch the content from the URL
echo "Fetching content..."
TITLE=$(curl -s -L "$URL" | grep -o '<title>.*</title>' | sed 's/<title>\(.*\)<\/title>/\1/' | sed 's/ *|.*$//' | sed 's/^ *//;s/ *$//')
CONTENT=$(curl -s -L "$URL" | pandoc -f html -t markdown)

if [ -z "$TITLE" ]; then
    TITLE="Untitled Content"
fi

# Sanitize title for filename
FILENAME=$(echo "$TITLE" | sed 's/[^a-zA-Z0-9.-]/_/g' | cut -c1-100)
FILENAME="${OUTPUT_DIR}/${FILENAME}_$(date +%Y%m%d_%H%M%S).md"

echo "Creating knowledge digest for: $TITLE"

# Step 2: Create the knowledge digest using the NOTE_TEMPLATE.md structure
cat > "$FILENAME" << EOF
---
title: "$TITLE"
source_url: "$URL"
source_type: article
author: ""
date_published: "$(date -I)"
date_collected: "$(date -I)"
topics: []
tags: []
confidence: medium
---

# TL;DR
> One-sentence summary of why this is worth reading.

- 
- 
- 
- 
- 

---

## Key ideas

1. **Idea 1**
   - Explanation in plain language

2. **Idea 2**
   - Explanation in plain language

3. **Idea 3 (if any)**
   - Explanation in plain language

---

## Why this matters (for me / for us)

Describe **when and where** this knowledge could be useful.

Examples:
- design discussions
- technical decision making
- pushing automation / AI adoption
- explaining concepts to others

---

## Actionable takeaways

Concrete things that can be reused later.

- [ ] 
- [ ] 
- [ ] 

---

## Notable quotes / evidence (optional)

> Quote or reference from the original source that supports a key idea.

---

## Related topics / notes (optional)

- 
- 

---

## Review notes

- What is strong or insightful?
- What might be missing or unclear?
- Any doubts about accuracy or context?

EOF

echo "Created knowledge digest: $FILENAME"
echo ""
echo "Next steps:"
echo "1. Review the content in $FILENAME"
echo "2. Fill in the structured fields"
echo "3. When ready, commit to the repository:"
echo "   git add $FILENAME"
echo "   git commit -m \"Add knowledge digest: $TITLE\""
echo "   git push origin main"