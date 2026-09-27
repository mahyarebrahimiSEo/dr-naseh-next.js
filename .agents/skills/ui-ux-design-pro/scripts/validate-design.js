/**
 * UI/UX Automated Audit Helper Script (ES Module)
 * Scans JSX/TSX/HTML files for basic UI/UX anti-patterns
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

console.log('🔍 Starting UI/UX & Frontend Audit...');

if (!fs.existsSync(srcDir)) {
  console.log('⚠️  src directory not found. Skipping code scanning.');
  process.exit(0);
}

const warnings = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(projectRoot, filePath);

  // Check 1: Icon buttons without aria-label
  if (/<button[^>]*>\s*<[A-Z][a-zA-Z0-9]*Icon[^>]*\/>\s*<\/button>/g.test(content) && !content.includes('aria-label')) {
    warnings.push(`[${relPath}] Button containing only an Icon should have an aria-label for accessibility.`);
  }

  // Check 2: Raw number concatenation without Intl or formatting
  if (/(\$|تومان|ریال)\s*\+\s*[a-zA-Z0-9_.]+/g.test(content)) {
    warnings.push(`[${relPath}] Detected raw currency string concatenation. Use formatCurrency() helper instead.`);
  }

  // Check 3: Outline none without focus ring
  if (/outline-none(?!\s.*ring)/g.test(content) && !content.includes('focus:ring') && !content.includes('focus-visible:ring')) {
    warnings.push(`[${relPath}] Found 'outline-none' without a replacement 'focus:ring' or 'focus-visible:ring'.`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        walkDir(fullPath);
      }
    } else if (/\.(jsx|tsx|html|js)$/.test(file)) {
      scanFile(fullPath);
    }
  }
}

walkDir(srcDir);

console.log('\n📊 Audit Summary:');
if (warnings.length === 0) {
  console.log('✅ All checked UI/UX automated rules passed cleanly!');
} else {
  console.log(`⚠️  Found ${warnings.length} potential UX/Accessibility improvements:`);
  warnings.forEach(w => console.log(`  - ${w}`));
}
