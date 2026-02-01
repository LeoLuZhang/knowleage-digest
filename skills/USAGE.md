# Using Knowledge Skills

This document explains how to use the implemented knowledge management workflow.

## End-to-End Workflow

### Option 1: Using the Import Script (Recommended)

1. **Prepare the environment**
   ```bash
   # Navigate to the repository
   cd knowleage-digest
   
   # Ensure dependencies are available
   which curl pandoc
   ```

2. **Process an article**
   ```bash
   ./import_article.sh <URL_OF_ARTICLE>
   ```
   
   Example:
   ```bash
   ./import_article.sh https://example.com/article
   ```

3. **Review the generated digest**
   - The script creates a new file in the `knowledge_digested/` directory
   - Review and fill in the structured sections
   - Verify the content is accurate and valuable

4. **Commit to the repository**
   ```bash
   git add knowledge_digested/<generated_file>.md
   git commit -m "Add knowledge digest: <Title of Article>"
   git push origin main
   ```

### Option 2: Using the Low-Level Processing Script

1. **Direct usage**
   ```bash
   ./process_link.sh <URL_OF_ARTICLE>
   ```
   
   This is the underlying script that import_article.sh uses.

### Option 2: Using the Node.js Skill

1. **Prepare the environment**
   ```bash
   # Navigate to the skill directory
   cd knowleage-digest/skills/article-digest
   ```

2. **Run the skill**
   ```bash
   node index.js <URL_OF_ARTICLE>
   ```

3. **Follow the same review and commit steps as above**

## Integration with OpenClaw

To fully automate the workflow as shown in the WeChat post, you can integrate with OpenClaw by:

1. **Adding the skill to OpenClaw's configuration**
2. **Setting up a webhook or direct command to trigger the skill**
3. **Configuring automatic commits back to GitHub**

### Example OpenClaw Integration

When you receive a URL in any chat (like WeChat), you can process it automatically:

```
User sends: "https://example.com/interesting-article"
OpenClaw runs: ./process_link.sh "https://example.com/interesting-article"
Result: Creates structured knowledge digest in knowledge_digested/ directory
```

## Review Process

After the automation creates a draft:

1. **Check the generated content** for accuracy
2. **Complete the structured sections**:
   - Fill in the TL;DR
   - Extract key ideas
   - Describe why it matters
   - Add actionable takeaways
3. **Assign appropriate topics and tags**
4. **Set the confidence level** based on content quality
5. **Commit to GitHub** when satisfied

## Directory Structure

- `skills/` - Contains all knowledge processing skills
- `knowledge_digested/` - Generated knowledge digests (created automatically)
- `NOTE_TEMPLATE.md` - Template for all knowledge digests
- `PROCESS` - Detailed workflow documentation
- `PR_TEMPLATE` - Template for reviewing changes

## Dependencies

The workflow requires:
- `curl` - For fetching web content
- `pandoc` - For converting HTML to markdown
- `git` - For version control and committing changes
- `node` - For running JavaScript skills (optional)

Install on macOS:
```bash
brew install curl pandoc git node
```

Install on Ubuntu/Debian:
```bash
sudo apt-get install curl pandoc git nodejs npm
```

## Troubleshooting

- If `pandoc` is not found: Install it using your package manager
- If `curl` fails: Check network connectivity and URL validity
- If git operations fail: Ensure proper authentication with GitHub