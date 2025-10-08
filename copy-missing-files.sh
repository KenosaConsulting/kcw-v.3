#!/bin/bash

# Quick script to copy ONLY missing files to existing kcw-v.3-main
# Use this if you want to keep your current kcw-v.3-main and just add missing files

echo "Copying missing files and directories to kcw-v.3-main..."

cd /Users/oogwayuzumaki/Desktop

# Copy missing directories
echo "Copying directories..."
cp -R kcw-v.2-main/components kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/pages kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/services kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/hooks kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/lib kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/data kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/public kcw-v.3-main/ 2>/dev/null
cp -R kcw-v.2-main/kcw-v.2 kcw-v.3-main/ 2>/dev/null

# Copy missing configuration files
echo "Copying configuration files..."
cp kcw-v.2-main/package.json kcw-v.3-main/
cp kcw-v.2-main/vite.config.ts kcw-v.3-main/
cp kcw-v.2-main/tsconfig.json kcw-v.3-main/
cp kcw-v.2-main/.gitignore kcw-v.3-main/
cp kcw-v.2-main/postcss.config.js kcw-v.3-main/
cp kcw-v.2-main/index.css kcw-v.3-main/
cp kcw-v.2-main/constants.ts kcw-v.3-main/
cp kcw-v.2-main/types.ts kcw-v.3-main/

# Copy documentation files
echo "Copying documentation files..."
cp kcw-v.2-main/README.md kcw-v.3-main/ 2>/dev/null
cp kcw-v.2-main/DESIGN_TOOLS_IMPLEMENTATION.md kcw-v.3-main/ 2>/dev/null
cp kcw-v.2-main/ABOUT_PAGE_IMPLEMENTATION.md kcw-v.3-main/ 2>/dev/null
cp kcw-v.2-main/metadata.json kcw-v.3-main/ 2>/dev/null
cp kcw-v.2-main/setup-design-tools.sh kcw-v.3-main/ 2>/dev/null
cp kcw-v.2-main/*.pdf kcw-v.3-main/ 2>/dev/null

echo "Done! Now run:"
echo "  cd kcw-v.3-main"
echo "  npm install"
echo "  npm run dev"
