#!/bin/bash
echo "Fixing vite permissions..."
chmod +x node_modules/.bin/vite || true

echo "Running vite build..."
npx vite build

echo "Listing output..."
ls -la
