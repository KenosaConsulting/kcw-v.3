#!/bin/bash

# IMPROVED Script to duplicate kcw-v.2-main to a new version
# This version EXCLUDES node_modules from the copy operation

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
echo -e "${GREEN}KCW Project Duplication Script (v2)${NC}"
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

# Step 1: Create destination directory
mkdir -p "$DEST_DIR"

# Step 2: Copy all files EXCEPT node_modules, dist, and build
echo -e "${GREEN}Step 1: Copying project files (excluding node_modules)...${NC}"
echo "  This should only take a few seconds..."

# Use rsync for better control (if available) or find + cp
if command -v rsync &> /dev/null; then
    # Use rsync - much better for this task
    rsync -av --progress \
        --exclude 'node_modules' \
        --exclude 'dist' \
        --exclude 'build' \
        --exclude '.git' \
        "$SOURCE_DIR/" "$DEST_DIR/"
else
    # Fallback to manual copying
    echo "  Using manual copy (rsync not found)..."
    
    # Copy all files and directories except the excluded ones
    cd "$SOURCE_DIR"
    for item in *; do
        if [[ "$item" != "node_modules" && "$item" != "dist" && "$item" != "build" ]]; then
            cp -R "$item" "../$DEST_DIR/"
        fi
    done
    
    # Don't forget hidden files
    for item in .[^.]*; do
        if [[ "$item" != ".git" && -e "$item" ]]; then
            cp -R "$item" "../$DEST_DIR/"
        fi
    done
    
    cd "$DESKTOP_PATH"
fi

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Files copied successfully (node_modules excluded)${NC}"
else
    echo -e "${RED}✗ Error during copy operation${NC}"
    exit 1
fi

# Step 3: Navigate to new directory
cd "$DEST_DIR" || exit 1

# Step 4: Remove package-lock.json for fresh install
if [ -f "package-lock.json" ]; then
    echo ""
    echo -e "${GREEN}Step 2: Preparing for fresh dependency install...${NC}"
    rm package-lock.json
    echo -e "${GREEN}✓ Removed old package-lock.json${NC}"
fi

# Step 5: Update configuration files
echo ""
echo -e "${GREEN}Step 3: Updating configuration files...${NC}"

# Check if vite.config.ts exists and update the port
if [ -f "vite.config.ts" ]; then
    echo "  Updating vite.config.ts to use port 3001..."
    
    # Check if server config exists
    if grep -q "server:" vite.config.ts; then
        # Server config exists, update port if it exists or add it
        if grep -q "port:" vite.config.ts; then
            # Port exists, update it
            sed -i '' 's/port: [0-9]*/port: 3001/' vite.config.ts 2>/dev/null || \
            sed -i 's/port: [0-9]*/port: 3001/' vite.config.ts
        else
            # Add port to existing server config
            sed -i '' '/server: {/a\
    port: 3001,' vite.config.ts 2>/dev/null || \
            sed -i '/server: {/a\    port: 3001,' vite.config.ts
        fi
    else
        # No server config, add it after defineConfig
        sed -i '' 's/defineConfig({/defineConfig({\
  server: {\
    port: 3001\
  },/' vite.config.ts 2>/dev/null || \
        sed -i 's/defineConfig({/defineConfig({\n  server: {\n    port: 3001\n  },/' vite.config.ts
    fi
fi

# Update package.json name
if [ -f "package.json" ]; then
    echo "  Updating package.json project name..."
    sed -i '' 's/"name": ".*"/"name": "kcw-v.3-main"/' package.json 2>/dev/null || \
    sed -i 's/"name": ".*"/"name": "kcw-v.3-main"/' package.json
fi

echo -e "${GREEN}✓ Configuration updates complete${NC}"

# Step 6: Verify the copy
echo ""
echo -e "${GREEN}Step 4: Verifying the duplicated project...${NC}"

# Check for critical files
echo "  Checking for critical files:"
CRITICAL_FILES=(
    "package.json"
    "vite.config.ts"
    "tsconfig.json"
    "tailwind.config.js"
    "index.html"
    "App.tsx"
)

ALL_GOOD=true
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "    ${GREEN}✓${NC} $file"
    else
        echo -e "    ${RED}✗${NC} $file (MISSING!)"
        ALL_GOOD=false
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
)

for dir in "${CRITICAL_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "    ${GREEN}✓${NC} $dir/"
    else
        echo -e "    ${YELLOW}⚠${NC} $dir/ (Not found, may be okay)"
    fi
done

# Step 7: Install dependencies
echo ""
echo -e "${GREEN}Step 5: Installing dependencies...${NC}"
echo -e "${YELLOW}This will take 3-5 minutes...${NC}"

# Check if npm is available
if command -v npm &> /dev/null; then
    npm install
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
    else
        echo -e "${RED}✗ Error installing dependencies${NC}"
        echo -e "${YELLOW}Try running 'npm install' manually${NC}"
    fi
else
    echo -e "${RED}npm not found! Please install Node.js first${NC}"
fi

# Final summary
echo ""
echo -e "${GREEN}========================================${NC}"
if [ "$ALL_GOOD" = true ]; then
    echo -e "${GREEN}✅ Project duplication complete!${NC}"
else
    echo -e "${YELLOW}⚠️  Project duplicated with warnings${NC}"
fi
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your new project is located at: ${DESKTOP_PATH}/${DEST_DIR}"
echo ""
echo "Next steps:"
echo "  1. cd ${DESKTOP_PATH}/${DEST_DIR}"
echo "  2. npm run dev"
echo ""
echo "Ports:"
echo "  • Original (v.2): http://localhost:3000"
echo "  • New (v.3): http://localhost:3001"
echo ""
echo -e "${GREEN}Both projects can run simultaneously!${NC}"
