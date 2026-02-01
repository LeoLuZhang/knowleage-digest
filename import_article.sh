#!/bin/bash

# Wrapper script for importing articles into the knowledge digest system
# Designed to work seamlessly with OpenClaw

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <URL> [optional_title]"
    echo "Processes an article URL and creates a structured knowledge digest"
    exit 1
fi

URL="$1"
TITLE_OVERRIDE="$2"

# Validate URL format
if [[ ! "$URL" =~ ^https?:// ]]; then
    echo "Error: Invalid URL format. Must start with http:// or https://"
    exit 1
fi

echo "Importing article: $URL"

# Use the main processing script
./process_link.sh "$URL"

echo ""
echo "Article import initiated successfully!"
echo "Next steps:"
echo "1. Review the generated file in knowledge_digested/"
echo "2. Complete the structured fields in the markdown file"
echo "3. Commit the changes when ready: git add . && git commit -m \"Add knowledge: [descriptive title]\""