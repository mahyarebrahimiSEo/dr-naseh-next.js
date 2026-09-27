/**
 * Automated Codebase Security & Architecture Audit Script (ESM)
 * Usage: node .agents/skills/project-architect-pro/scripts/security-audit.js
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
console.log('🛡️ در حال اجرای ممیزی امنیتی و معماری کدبیس (Security & Architecture Audit)...');

const ignoredDirs = new Set(['node_modules', 'dist', '.git', '.gemini', 'build', '.vscode', '.agents', '.agent']);

const findings = {
  critical: [],
  high: [],
  medium: [],
  low: [],
  passed: []
};

// الگوهای تشخیص اطلاعات محرمانه هاردکد شده
const secretPatterns = [
  { name: 'Private Key / PEM', regex: /-----BEGIN (RSA|EC|DSA|OPENSSH|PRIVATE) KEY-----/g, severity: 'critical' },
  { name: 'AWS Access Key ID', regex: /AKIA[0-9A-Z]{16}/g, severity: 'critical' },
  { name: 'Hardcoded Secret / Password', regex: /(api_?key|jwt_?secret|db_?password|private_?key)\s*[:=]\s*['"`][a-zA-Z0-9_\-!@#$%^&*]{8,}['"`]/gi, severity: 'high' },
  { name: 'Bearer Token Hardcoded', regex: /['"`]Bearer\s+[a-zA-Z0-9\-_.]+\.[a-zA-Z0-9\-_.]+\.[a-zA-Z0-9\-_.]+['"`]/g, severity: 'critical' },
];

// الگوهای کدهای ناامن
const insecurePatterns = [
  { name: 'Dangerous Eval', regex: /\beval\s*\(/g, severity: 'critical', desc: 'استفاده از eval() می‌تواند منجر به اجرای کدهای مخرب شود.' },
  { name: 'Unsafe HTML Injection (dangerouslySetInnerHTML)', regex: /dangerouslySetInnerHTML/g, severity: 'medium', desc: 'خطر حملات XSS در صورت عدم پاک‌سازی ورودی با DOMPurify.' },
  { name: 'Document.write / raw innerHTML', regex: /\b(document\.write|innerHTML\s*=)/g, severity: 'medium', desc: 'تزریق مستقیم HTML به DOM.' },
  { name: 'Unsafe Child Process Exec', regex: /child_process.*\.exec\s*\(/g, severity: 'high', desc: 'خطر Command Injection در صورت استفاده از پارامترهای کاربر.' },
];

let scannedFiles = 0;

function scanFile(filePath) {
  if (filePath.endsWith('-lock.json') || filePath.endsWith('.lock')) return;

  scannedFiles++;
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(projectRoot, filePath);

  // 1. بررسی نشت کلیدهای محرمانه
  secretPatterns.forEach(pat => {
    if (pat.regex.test(content)) {
      findings[pat.severity].push(`[${relPath}] نشت اطلاعات حساس: الگوی "${pat.name}" یافت شد.`);
    }
  });

  // 2. بررسی الگوهای کدهای آسیب‌پذیر
  insecurePatterns.forEach(pat => {
    if (pat.regex.test(content)) {
      findings[pat.severity].push(`[${relPath}] کد بالقوه ناامن: ${pat.name} - ${pat.desc}`);
    }
  });

  // 3. بررسی فایل‌های بیش از حد طولانی (God Files)
  const lineCount = content.split('\n').length;
  if (lineCount > 500 && !filePath.includes('min.')) {
    findings.low.push(`[${relPath}] فایل بسیار حجیم (${lineCount} خط). پیشنهاد تفکیک به ماژول‌های کوچک‌تر.`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx|json|html|py|go|env|yml|yaml)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  }
}

walkDir(projectRoot);

// 4. بررسی فایل‌های امنیتی ریشه
const gitignorePath = path.join(projectRoot, '.gitignore');
if (fs.existsSync(gitignorePath)) {
  const gitignore = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignore.includes('.env')) {
    findings.critical.push('[.gitignore] فایل .env در گیت‌ایگنور اضافه نشده است! خطر نشت متغیرهای محرمانه در مخزن.');
  } else {
    findings.passed.push('فایل .env به درستی در .gitignore محافظت شده است.');
  }
} else {
  findings.high.push('فایل .gitignore در ریشه پروژه یافت نشد (خطر کامیت فایل‌های حساس).');
}

if (!fs.existsSync(path.join(projectRoot, '.env.example'))) {
  findings.medium.push('فایل .env.example برای معرفی ساختار متغیرهای محیطی وجود ندارد.');
} else {
  findings.passed.push('فایل .env.example در ریشه پروژه قرار دارد.');
}

// چاپ گزارش نهایی
console.log('\n======================================================');
console.log(`📊 گزارش ممیزی امنیتی و معماری (${scannedFiles} فایل اسکن شد):`);
console.log('======================================================');

const totalIssues = findings.critical.length + findings.high.length + findings.medium.length + findings.low.length;

if (findings.critical.length > 0) {
  console.log(`\n🚨 موارد بحرانی (Critical) - [${findings.critical.length} مورد]:`);
  findings.critical.forEach(item => console.log(`  ❌ ${item}`));
}

if (findings.high.length > 0) {
  console.log(`\n⚠️  موارد با ریسک بالا (High) - [${findings.high.length} مورد]:`);
  findings.high.forEach(item => console.log(`  ⚠️  ${item}`));
}

if (findings.medium.length > 0) {
  console.log(`\n⚡ موارد متوسط (Medium) - [${findings.medium.length} مورد]:`);
  findings.medium.forEach(item => console.log(`  ⚡ ${item}`));
}

if (findings.low.length > 0) {
  console.log(`\n💡 پیشنهادات بهبود ساختار (Low) - [${findings.low.length} مورد]:`);
  findings.low.forEach(item => console.log(`  💡 ${item}`));
}

console.log('\n------------------------------------------------------');
if (totalIssues === 0) {
  console.log('🎉 امتیاز امنیت و ساختار: ۱۰۰/۱۰۰ - هیچ آسیب‌پذیری یا نقص ساختاری یافت نشد!');
} else {
  console.log(`📌 مجموع ایرادات شناسایی شده: ${totalIssues} مورد.`);
  console.log('💡 برای برطرف‌سازی، به راهنمای references/security-hardening.md مراجعه کنید.');
}
console.log('------------------------------------------------------\n');
