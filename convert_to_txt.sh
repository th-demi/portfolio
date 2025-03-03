#!/bin/bash

# Define the source directory (where your src folder is)
SRC_DIR="src"

# Output file where all content will be stored
OUTPUT_FILE="code_to_text.txt"

# Clear the previous output file if it exists
> "$OUTPUT_FILE"

# Function to convert .jsx and .css files to a single .txt file with directory structure
convert_files() {
  # Find all .jsx and .css files under the src directory
  find "$SRC_DIR" -type f \( -name "*.jsx" -o -name "*.css" \) | while read file; do
    # Append the directory structure to the output file
    echo -e "\n\n==== $file ====" >> "$OUTPUT_FILE"
    
    # Append the content of each file to the output file
    cat "$file" >> "$OUTPUT_FILE"
  done
}

# Call the function to start the conversion
convert_files

echo "All .jsx and .css files have been converted and saved in $OUTPUT_FILE"
