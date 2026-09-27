const { spawn, exec, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const backendDir = path.join(rootDir, 'backend');
const frontendDir = path.join(rootDir, 'frontend');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

console.clear();
console.log('\x1b[36m%s\x1b[0m', '========================================================================');
console.log('\x1b[36m%s\x1b[0m', '  🏥 کلینیک تخصصی طب فیزیکی، توانبخشی و الکترودیاگنوز دکتر ناصح یوسفی');
console.log('\x1b[36m%s\x1b[0m', '  🚀 راه‌اندازی هوشمند و هم‌زمان بک‌اند (Express) و فرانت‌اند (Next.js)');
console.log('\x1b[36m%s\x1b[0m', '========================================================================\n');

// 1. Verify dependencies, env files & database
try {
  // Check backend .env
  const backendEnv = path.join(backendDir, '.env');
  const backendEnvExample = path.join(backendDir, '.env.example');
  if (!fs.existsSync(backendEnv) && fs.existsSync(backendEnvExample)) {
    fs.copyFileSync(backendEnvExample, backendEnv);
    console.log('\x1b[32m%s\x1b[0m', '✅ فایل تنظیمات بک‌اند (.env) بر اساس نمونه ساخته شد.');
  }

  // Check frontend .env.local
  const frontendEnv = path.join(frontendDir, '.env.local');
  const frontendEnvExample = path.join(frontendDir, '.env.example');
  if (!fs.existsSync(frontendEnv) && fs.existsSync(frontendEnvExample)) {
    fs.copyFileSync(frontendEnvExample, frontendEnv);
    console.log('\x1b[32m%s\x1b[0m', '✅ فایل تنظیمات فرانت‌اند (.env.local) بر اساس نمونه ساخته شد.');
  }

  // Check backend dependencies
  if (!fs.existsSync(path.join(backendDir, 'node_modules'))) {
    console.log('\x1b[33m%s\x1b[0m', '📦 پکیج‌های بک‌اند یافت نشد. در حال نصب خودکار وابستگی‌ها...');
    execSync(`${npmCmd} install`, { cwd: backendDir, stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', '✅ وابستگی‌های بک‌اند نصب شدند.');
  }

  // Check frontend dependencies
  if (!fs.existsSync(path.join(frontendDir, 'node_modules'))) {
    console.log('\x1b[33m%s\x1b[0m', '📦 پکیج‌های فرانت‌اند یافت نشد. در حال نصب خودکار وابستگی‌ها...');
    execSync(`${npmCmd} install`, { cwd: frontendDir, stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', '✅ وابستگی‌های فرانت‌اند نصب شدند.');
  }

  // Check database
  const dbFile = path.join(backendDir, 'prisma', 'dev.db');
  if (!fs.existsSync(dbFile)) {
    console.log('\x1b[33m%s\x1b[0m', '⚡ پایگاه داده اولیه یافت نشد. در حال پیکربندی و بذردهی اطلاعات مطب...');
    execSync(`${npmCmd} run db:push`, { cwd: backendDir, stdio: 'inherit' });
    execSync(`${npmCmd} run db:seed`, { cwd: backendDir, stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', '✅ پایگاه داده با موفقیت آماده شد.\n');
  }
} catch (err) {
  console.error('\x1b[31m%s\x1b[0m', '❌ خطا در آماده‌سازی خودکار پروژه:', err.message);
}

// 2. Start Backend Process
console.log('\x1b[36m%s\x1b[0m', '⏳ در حال شروع سرور بک‌اند (Port 5000)...');
const backendProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: backendDir,
  shell: true,
  env: { ...process.env, PORT: '5000' },
});

backendProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.log('\x1b[36m[بک‌اند]\x1b[0m ' + line);
    }
  });
});

backendProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.error('\x1b[33m[بک‌اند]\x1b[0m ' + line);
    }
  });
});

// 3. Start Frontend Process
console.log('\x1b[32m%s\x1b[0m', '⏳ در حال شروع وب‌سایت فرانت‌اند (Port 3000)...');
const frontendProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: frontendDir,
  shell: true,
  env: { ...process.env, PORT: '3000' },
});

frontendProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.log('\x1b[32m[فرانت‌اند]\x1b[0m ' + line);
    }
  });
});

frontendProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.error('\x1b[33m[فرانت‌اند]\x1b[0m ' + line);
    }
  });
});

// 4. Poll until Frontend (localhost:3000) is ready, then open browser
let browserOpened = false;

function checkFrontendReady() {
  if (browserOpened) return;

  const req = http.get('http://localhost:3000', (res) => {
    if (res.statusCode && !browserOpened) {
      browserOpened = true;
      console.log('\n\x1b[32m%s\x1b[0m', '========================================================================');
      console.log('\x1b[32m%s\x1b[0m', '  🎉 وب‌سایت کلینیک دکتر ناصح یوسفی با موفقیت بالا آمد و آماده است!');
      console.log('\x1b[32m%s\x1b[0m', '  🌐 در حال باز کردن سایت در مرورگر شما: http://localhost:3000');
      console.log('\x1b[32m%s\x1b[0m', '  ⚙️  آدرس وب‌سرویس بک‌اند:              http://localhost:5000/api/v1');
      console.log('\x1b[32m%s\x1b[0m', '========================================================================\n');

      if (process.platform === 'win32') {
        exec('start http://localhost:3000');
      } else if (process.platform === 'darwin') {
        exec('open http://localhost:3000');
      } else {
        exec('xdg-open http://localhost:3000');
      }
    }
  });

  req.on('error', () => {
    // Keep checking every 600ms until ready
    if (!browserOpened) {
      setTimeout(checkFrontendReady, 600);
    }
  });

  req.end();
}

// Start polling
setTimeout(checkFrontendReady, 1000);

// 5. Clean Exit Handlers
function cleanup() {
  console.log('\n\x1b[33m%s\x1b[0m', '🛑 در حال خاتمه دادن به سرویس‌های وب‌سایت...');

  if (process.platform === 'win32') {
    if (backendProcess.pid) {
      exec(`taskkill /pid ${backendProcess.pid} /T /F`, () => {});
    }
    if (frontendProcess.pid) {
      exec(`taskkill /pid ${frontendProcess.pid} /T /F`, () => {});
    }
  } else {
    if (backendProcess.pid) backendProcess.kill('SIGTERM');
    if (frontendProcess.pid) frontendProcess.kill('SIGTERM');
  }

  setTimeout(() => {
    process.exit(0);
  }, 500);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);
