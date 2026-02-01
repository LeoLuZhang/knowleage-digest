#!/usr/bin/env node

/**
 * Article Digest Skill
 * Transforms an article URL into a structured knowledge digest
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if URL is provided
if (process.argv.length < 3) {
    console.error('Usage: node index.js <URL>');
    process.exit(1);
}

const url = process.argv[2];

async function processArticle() {
    console.log(`Processing article: ${url}`);
    
    // Fetch the content from the URL
    console.log("Fetching content...");
    let title, content;
    
    try {
        // Try to get title using curl and grep
        const titleCmd = `curl -s -L "${url}" | grep -o '<title>.*</title>' | sed 's/<title>\\(.*\\)<\\/title>/\\1/' | sed 's/ *|.*$//' | sed 's/^ *//;s/ *$//'`;
        title = execSync(titleCmd, { encoding: 'utf-8' }).trim();
        
        if (!title || title.length === 0) {
            title = "Untitled Content";
        }
        
        // Get content using curl and pandoc
        const contentCmd = `curl -s -L "${url}" | pandoc -f html -t markdown`;
        content = execSync(contentCmd, { encoding: 'utf-8' });
    } catch (error) {
        console.error("Error fetching content:", error.message);
        title = "Error Processing Content";
        content = "Could not fetch content from the provided URL.";
    }
    
    // Create output directory
    const outputDir = "knowledge_digested";
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Sanitize title for filename
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9.-]/g, '_').substring(0, 100);
    const filename = `${outputDir}/${sanitizedTitle}_$(date +%Y%m%d_%H%M%S).md`.replace(/\$/g, '');
    const timestamp = new Date().toISOString().split('T')[0];
    
    // Create the knowledge digest using the NOTE_TEMPLATE.md structure
    const knowledgeDigest = `---
title: "${title}"
source_url: "${url}"
source_type: article
author: ""
date_published: "${timestamp}"
date_collected: "${timestamp}"
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
`;

    // Since we can't use date command in JS, we need to replace the placeholder
    const finalFilename = `${outputDir}/${sanitizedTitle}_${new Date().toISOString().replace(/[-:]/g, '').replace('T', '_').substring(0, 15)}.md`;
    
    // Write the file
    fs.writeFileSync(finalFilename, knowledgeDigest);
    
    console.log(`Created knowledge digest: ${finalFilename}`);
    console.log("");
    console.log("Next steps:");
    console.log(`1. Review the content in ${finalFilename}`);
    console.log("2. Fill in the structured fields");
    console.log("3. When ready, commit to the repository:");
    console.log(`   git add ${finalFilename}`);
    console.log(`   git commit -m "Add knowledge digest: ${title}"`);
    console.log("   git push origin main");
}

processArticle().catch(console.error);