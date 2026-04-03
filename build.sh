#!/bin/bash
set -e
npm run build
# Copy static HTML fallbacks for unconverted pages into dist/
cp legacy/*.html dist/
cp style.css dist/
cp motion.js dist/
echo "Build complete — $(ls dist/*.html | wc -l) static HTML fallbacks in dist/"
