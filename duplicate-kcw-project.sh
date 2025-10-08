#!/bin/bash

# Script to duplicate kcw-v.2-main to a new version
# Usage: ./duplicate-kcw-project.sh

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Source and destination directories
SOURCE_DIR="kcw-v.2-main"
DEST_DIR="kcw-v.3-main"
DESKTOP_PATH="/Users/oogwayuzumaki/Desktop"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}KCW Project Duplication Script${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Navigate to Desktop
cd "$DESKTOP_PATH" || exit 1

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory $SOURCE_DIR not found!${NC}"
    exit 1
fi

# Ask user if they want to remove existing incomplete copy
if [ -d "$DEST_DIR" ]; then
    echo -e "${YELLOW}Warning: $DEST_DIR already exists.${NC}"
    read -p "Do you want to remove it and create a fresh copy? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Removing existing $DEST_DIR...${NC}"
        rm -rf "$DEST_DIR"
    else
        # Ask for alternative name
        read -p "Enter a new name for the destination directory: " NEW_DEST
        DEST_DIR="$NEW_DEST"
    fi
fi

echo -e "${GREEN}Starting duplication process...${NC}"
echo ""

# Step 1: Create complete copy
echo -e "${GREEN}Step 1: Copying all files from $SOURCE_DIR to $DEST_DIR...${NC}"
cp -R "$SOURCE_DIR" "$DEST_DIR"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Files copied successfully${NC}"
else
    echo -e "${RED}✗ Error during copy operation${NC}"
    exit 1
fi

# Step 2: Navigate to new directory
cd "$DEST_DIR" || exit 1

# Step 3: Clean up unnecessary files
echo ""
echo -e "${GREEN}Step 2: Cleaning up unnecessary files...${NC}"

# Remove node_modules if it exists (will reinstall fresh)
if [ -d "node_modules" ]; then
    echo "  Removing node_modules..."
    rm -rf node_modules
fi

# Remove any build artifacts
if [ -d "dist" ]; then
    echo "  Removing dist folder..."
    rm -rf dist
fi

if [ -d "build" ]; then
    echo "  Removing build folder..."
    rm -rf build
fi

# Remove package-lock.json for fresh install
if [ -f "package-lock.json" ]; then
    echo "  Removing package-lock.json for fresh dependency install..."
    rm package-lock.json
fi

echo -e "${GREEN}✓ Cleanup complete${NC}"

# Step 4: Update configuration files
echo ""
echo -e "${GREEN}Step 3: Updating configuration files...${NC}"

# Check if vite.config.ts exists and update the port
if [ -f "vite.config.ts" ]; then
    echo "  Checking vite.config.ts for port configuration..."
    
    # Check if port is already configured
    if grep -q "port:" vite.config.ts; then
        echo "  Port configuration found. You may want to change it manually to avoid conflicts."
    else
        # Add port configuration to vite.config.ts
        # This will add port 3001 to the server configuration
        echo "  Adding port 3001 to vite configuration..."
        sed -i '' 's/defineConfig({/defineConfig({\
  server: {\
    port: 3001\
  },/' vite.config.ts 2>/dev/null || \
        sed -i 's/defineConfig({/defineConfig({\n  server: {\n    port: 3001\n  },/' vite.config.ts
    fi
fi

# Update package.json name if needed
if [ -f "package.json" ]; then
    echo "  Updating package.json project name..."
    # Update the name field in package.json
    sed -i '' 's/"name": "kcw-v.2-main"/"name": "kcw-v.3-main"/' package.json 2>/dev/null || \
    sed -i 's/"name": "kcw-v.2-main"/"name": "kcw-v.3-main"/' package.json
fi

echo -e "${GREEN}✓ Configuration updates complete${NC}"

# Step 5: Verify the copy
echo ""
echo -e "${GREEN}Step 4: Verifying the duplicated project...${NC}"

# Count files and directories
FILE_COUNT=$(find . -type f -not -path "./node_modules/*" -not -path "./.git/*" | wc -l)
DIR_COUNT=$(find . -type d -not -path "./node_modules/*" -not -path "./.git/*" | wc -l)

echo "  Total files copied: $FILE_COUNT"
echo "  Total directories: $DIR_COUNT"

# Check for critical files
echo ""
echo "  Checking for critical files:"
CRITICAL_FILES=(
    "package.json"
    "vite.config.ts"
    "tsconfig.json"
    "tailwind.config.js"
    "index.html"
    "App.tsx"
    "index.tsx"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "    ${GREEN}✓${NC} $file"
    else
        echo -e "    ${RED}✗${NC} $file (MISSING!)"
    fi
done

# Check for critical directories
echo ""
echo "  Checking for critical directories:"
CRITICAL_DIRS=(
    "components"
    "pages"
    "services"
    "public"
    "hooks"
    "lib"
    "config"
)

for dir in "${CRITICAL_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "    ${GREEN}✓${NC} $dir/"
    else
        echo -e "    ${RED}✗${NC} $dir/ (MISSING!)"
    fi
done

# Step 6: Install dependencies
echo ""
echo -e "${GREEN}Step 5: Installing dependencies...${NC}"
echo -e "${YELLOW}This may take a few minutes...${NC}"

npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
else
    echo -e "${RED}✗ Error installing dependencies${NC}"
    echo -e "${YELLOW}You may need to run 'npm install' manually${NC}"
fi

# Final summary
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Project duplication complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your new project is located at: ${DESKTOP_PATH}/${DEST_DIR}"
echo ""
echo "Next steps:"
echo "  1. cd ${DEST_DIR}"
echo "  2. npm run dev (to start the development server on port 3001)"
echo ""
echo "The original project (v.2) can still run on the default port (usually 3000)"
echo "The new project (v.3) will run on port 3001"
echo ""
echo -e "${YELLOW}Note: Both projects can run simultaneously on different ports${NC}"
