#!/usr/bin/env node

// Verification script to check for external dependencies
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function checkExternalImports(dir, rootDir = dir) {
  const files = fs.readdirSync(dir);
  const issues = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && file !== 'node_modules' && file !== 'dist') {
      issues.push(...checkExternalImports(filePath, rootDir));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        // Check for imports going outside new-screens folder
        if (line.includes('import') && line.includes('../../..')) {
          issues.push({
            file: path.relative(rootDir, filePath),
            line: index + 1,
            content: line.trim(),
            issue: 'Import goes outside new-screens folder'
          });
        }

        // Check for react-router imports
        if (line.includes('import') && line.includes('react-router') && !line.includes('_internal')) {
          issues.push({
            file: path.relative(rootDir, filePath),
            line: index + 1,
            content: line.trim(),
            issue: 'Direct react-router import (should use _internal/router/Link)'
          });
        }
      });
    }
  }

  return issues;
}

const issues = checkExternalImports(__dirname);

if (issues.length === 0) {
  console.log('✅ All imports are self-contained within new-screens package!');
  console.log('📦 Package is ready for standalone export.');
} else {
  console.log('❌ Found external dependency issues:');
  issues.forEach(issue => {
    console.log(`  ${issue.file}:${issue.line} - ${issue.issue}`);
    console.log(`    ${issue.content}`);
  });
}

export { checkExternalImports };