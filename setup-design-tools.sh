#!/bin/bash

# KCW v.2 Design Tools Setup Script
# This script installs all necessary dependencies and verifies the setup

echo "🚀 Starting KCW v.2 Design Tools Setup..."
echo "========================================="

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for Node.js
echo -e "\n📦 Checking Node.js installation..."
if command_exists node; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js is installed: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check for npm
echo -e "\n📦 Checking npm installation..."
if command_exists npm; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓ npm is installed: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm is not installed. Please install npm first.${NC}"
    exit 1
fi

# Clean install (optional)
echo -e "\n🧹 Would you like to clean install? (y/n)"
read -r CLEAN_INSTALL
if [[ $CLEAN_INSTALL =~ ^[Yy]$ ]]; then
    echo "Removing node_modules and package-lock.json..."
    rm -rf node_modules package-lock.json
    echo -e "${GREEN}✓ Cleaned previous installation${NC}"
fi

# Install dependencies
echo -e "\n📦 Installing dependencies..."
echo "This may take a few minutes..."

# Core dependencies
npm install

# Install additional packages if not already in package.json
echo -e "\n📦 Installing design tool packages..."
npm install chart.js react-chartjs-2 lottie-react gsap @gsap/react framer-motion

# Install DaisyUI and Tailwind properly
echo -e "\n🎨 Setting up Tailwind CSS and DaisyUI..."
npm install -D tailwindcss postcss autoprefixer daisyui

# Install type definitions
echo -e "\n📝 Installing TypeScript definitions..."
npm install -D @types/react @types/react-dom

# Create necessary directories if they don't exist
echo -e "\n📁 Ensuring directory structure..."
mkdir -p components/animations 2>/dev/null
mkdir -p components/charts 2>/dev/null
mkdir -p components/ui 2>/dev/null
mkdir -p hooks 2>/dev/null
mkdir -p public 2>/dev/null

echo -e "${GREEN}✓ Directory structure verified${NC}"

# Build CSS
echo -e "\n🎨 Building CSS..."
npx tailwindcss -i ./index.css -o ./dist/output.css 2>/dev/null || true

# Verify installation
echo -e "\n✅ Verifying installation..."
MISSING_DEPS=()

# Check for required packages
REQUIRED_PACKAGES=("react" "react-dom" "framer-motion" "gsap" "chart.js" "lottie-react" "tailwindcss" "daisyui")

for package in "${REQUIRED_PACKAGES[@]}"; do
    if npm list "$package" --depth=0 >/dev/null 2>&1; then
        echo -e "${GREEN}✓ $package is installed${NC}"
    else
        echo -e "${YELLOW}⚠ $package might be missing${NC}"
        MISSING_DEPS+=("$package")
    fi
done

# Final status
echo -e "\n========================================="
if [ ${#MISSING_DEPS[@]} -eq 0 ]; then
    echo -e "${GREEN}🎉 Setup completed successfully!${NC}"
    echo -e "\nYou can now run:"
    echo -e "  ${YELLOW}npm run dev${NC} - Start development server"
    echo -e "  ${YELLOW}npm run build${NC} - Build for production"
    echo -e "\n📖 Check DESIGN_TOOLS_IMPLEMENTATION.md for usage guide"
else
    echo -e "${YELLOW}⚠ Setup completed with warnings${NC}"
    echo -e "Some packages might need manual installation:"
    printf '%s\n' "${MISSING_DEPS[@]}"
    echo -e "\nTry running: ${YELLOW}npm install${NC} again"
fi

echo -e "\n🌟 Visit http://localhost:5173/about to see the enhanced About page!"
echo "========================================="