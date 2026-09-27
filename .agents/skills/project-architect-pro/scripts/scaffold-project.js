/**
 * Project Scaffolder CLI (ESM)
 * Usage: node .agents/skills/project-architect-pro/scripts/scaffold-project.js <template-name>
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const schemasPath = path.join(projectRoot, '.agents', 'skills', 'project-architect-pro', 'examples', 'template-schemas.json');

const schemas = JSON.parse(fs.readFileSync(schemasPath, 'utf8')).templates;

const args = process.argv.slice(2);
const templateName = args[0] || 'react-feature';

if (!schemas[templateName]) {
  console.log(`\n❌ قالب معماری "${templateName}" یافت نشد.`);
  console.log('📋 قالب‌های در دسترس:');
  Object.keys(schemas).forEach(k => console.log(`  - ${k}: ${schemas[k].name}`));
  process.exit(1);
}

const template = schemas[templateName];
console.log(`\n🚀 در حال ساختاردهی و ایجاد پوشه‌های معماری: ${template.name}...`);

let createdCount = 0;
template.directories.forEach(dirRel => {
  const fullPath = path.join(projectRoot, dirRel);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    createdCount++;
  }
});

// ایجاد فایل‌های پیکربندی استاندارد در صورت عدم وجود
const standardFiles = [
  { name: '.env.example', content: '# پیکربندی متغیرهای محیطی\nVITE_APP_TITLE=HesabYar\nVITE_API_URL=http://localhost:3000/api\n' },
  { name: 'docs/ARCHITECTURE.md', content: `# معماری سیستم (${template.name})\n\nاین پروژه بر مبنای الگوی استاندارد ${template.name} ساختاربندی شده است.\n` }
];

standardFiles.forEach(file => {
  const filePath = path.join(projectRoot, file.name);
  const parentDir = path.dirname(filePath);
  if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true });
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file.content, 'utf8');
  }
});

console.log(`✅ ساختاربندی با موفقیت پایان یافت. (${createdCount} پوشه جدید ساخته شد)`);
