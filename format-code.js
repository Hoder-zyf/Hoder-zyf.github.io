#!/usr/bin/env node

/**
 * Format code with Prettier
 * Usage: node format-code.js [check|fix]
 */

const { execSync } = require('child_process');
const path = require('path');

const mode = process.argv[2] || 'check';

// Files that we commonly modify and want to format
const targetFiles = [
  '_includes/selected_papers.liquid',
  '_includes/news.liquid',
  '_pages/publications.md',
  '_config.yml'
];

const command = mode === 'fix' 
  ? `npx prettier --write ${targetFiles.join(' ')}`
  : `npx prettier --check ${targetFiles.join(' ')}`;

console.log(`Running: ${command}`);

try {
  execSync(command, { stdio: 'inherit' });
  console.log('✅ Code formatting completed successfully!');
} catch (error) {
  if (mode === 'check') {
    console.log('❌ Code formatting issues found. Run "node format-code.js fix" to fix them.');
  } else {
    console.log('❌ Error occurred during formatting.');
  }
  process.exit(1);
}