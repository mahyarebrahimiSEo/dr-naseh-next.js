/**
 * Project Architecture & Structure Analyzer CLI (ESM)
 * Usage: node .agents/skills/project-architect-pro/scripts/analyze-structure.js
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

console.log('🔍 در حال تحلیل و ممیزی ساختار پوشه‌ها و معماری پروژه...');

const ignoredDirs = new Set(['node_modules', 'dist', '.git', '.gemini', 'build']);

let totalFiles = 0;
let totalDirs = 0;
const dirFileCounts = {};
const warnings = [];

function scan(dir, depth = 0) {
  totalDirs++;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (depth > 6) {
        warnings.push(`⚠️  تودرتویی بسیار عمیق (Deep Nesting): ${path.relative(projectRoot, fullPath)}`);
      }
      scan(fullPath, depth + 1);
    } else {
      totalFiles++;
      files.push(entry.name);
    }
  }

  const rel = path.relative(projectRoot, dir) || '.';
  dirFileCounts[rel] = files.length;
  
  // هشدار پوشه پرجمعیت و شلوغ (Bloated Directory)
  if (files.length > 20 && !rel.includes('public') && !rel.includes('assets')) {
    warnings.push(`📁 پوشه شلوغ و نامنظم (بیش از ۲۰ فایل در یک سطح): ${rel} (${files.length} فایل) -> پیشنهاد تفکیک به ماژول‌های کوچک‌تر`);
  }
}

scan(projectRoot);

// بررسی فایل‌های استاندارد ریشه
const essentialFiles = [
  { name: '.gitignore', label: 'فایل چشم‌پوشی گیت (.gitignore)' },
  { name: 'README.md', label: 'مستندات ریشه (README.md)' },
  { name: '.env.example', label: 'نمونه متغیرهای محیطی (.env.example)' }
];

essentialFiles.forEach(f => {
  if (!fs.existsSync(path.join(projectRoot, f.name))) {
    warnings.push(`📄 فایل استاندارد وجود ندارد: ${f.label}`);
  }
});

console.log('\n========================================');
console.log(`📊 خلاصه وضعیت ساختار پروژه:`);
console.log(`  - تعداد کل فایل‌های کد: ${totalFiles}`);
console.log(`  - تعداد کل پوشه‌ها: ${totalDirs}`);
console.log('========================================');

if (warnings.length === 0) {
  console.log('🎉 امتیاز معماری: ۱۰۰/۱۰۰ - ساختار پروژه کاملاً تمیز، منظم و استاندارد است.');
} else {
  console.log(`⚠️  موارد نیازمند بهبود و بازآرایی (${warnings.length} مورد):`);
  warnings.forEach(w => console.log(`  ${w}`));
}
