#!/bin/bash

echo "======================================"
echo "KCW v.3 Site Health Check"
echo "======================================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules not found. Running npm install..."
    npm install
else
    echo "✅ node_modules exists"
fi

# Check for required dependencies
echo ""
echo "Checking key dependencies:"
deps=("react" "react-dom" "react-router-dom" "@vitejs/plugin-react")
for dep in "${deps[@]}"; do
    if [ -d "node_modules/$dep" ]; then
        echo "✅ $dep installed"
    else
        echo "❌ $dep missing"
    fi
done

# Check for duplicate files
echo ""
echo "Checking for duplicate files:"
duplicates=$(find . -name "* 2.*" -o -name "*2.html" -o -name "*2.tsx" 2>/dev/null | grep -v node_modules | grep -v backup)
if [ -z "$duplicates" ]; then
    echo "✅ No duplicate files found"
else
    echo "⚠️  Found duplicate files:"
    echo "$duplicates"
fi

echo ""
echo "======================================"
echo "Starting development server..."
echo "======================================"
npm run dev
