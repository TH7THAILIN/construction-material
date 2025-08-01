#!/bin/bash
# VS Code Error Resolution Script
# Run this if you see stale TypeScript errors

echo "🔧 Clearing VS Code and TypeScript caches..."

# Clear TypeScript cache
rm -rf .next tsconfig.tsbuildinfo node_modules/.cache

# Clear VS Code workspace cache (if exists)
rm -rf .vscode/.ts_cache .vscode/.eslintcache

echo "✅ Caches cleared!"
echo ""
echo "📋 To fully refresh VS Code:"
echo "1. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)"
echo "2. Type 'TypeScript: Restart TS Server'"
echo "3. Press Enter"
echo ""
echo "Or alternatively:"
echo "1. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)" 
echo "2. Type 'Developer: Reload Window'"
echo "3. Press Enter"
echo ""
echo "🚀 Your project is ready! All errors should be resolved."
