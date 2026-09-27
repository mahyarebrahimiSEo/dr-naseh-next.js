# 🔐 شیت تقلب تنظیمات امنیتی سیستم‌ها (Security Hardening Cheatsheet)

این سند حاوی تکه کدهای آماده و سریع برای ایمن‌سازی فوری لایه‌های مختلف نرم‌افزار در استک‌های مختلف است.

---

## ۱. ایمن‌سازی بک‌اند در Node.js / Express

```javascript
// src/middlewares/security.js
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

export const configureSecurity = (app) => {
  // 1. هدرهای امنیتی
  app.use(helmet());

  // 2. محدودسازی نرخ درخواست عمومی
  const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use('/api', generalLimiter);

  // 3. تنظیمات CORS
  const whitelist = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'];
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS'));
      }
    },
    credentials: true,
  }));
};
```

---

## ۲. ایمن‌سازی Next.js با Middleware

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // افزودن هدرهای امنیتی سخت‌گیرانه
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  );
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' data: https:;"
  );

  return response;
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
```

---

## ۳. ایمن‌سازی پایتون (Python FastAPI)

```python
# app/core/security.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
import os

def setup_security(app: FastAPI):
    # 1. دامنه های مجاز (CORS)
    origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH"],
        allow_headers=["*"],
    )

    # 2. محافظت Host Header Injection
    app.add_middleware(
        TrustedHostMiddleware, 
        allowed_hosts=["localhost", "127.0.0.1", "*.yourdomain.com"]
    )
```

---

## ۴. ایمن‌سازی کلاینت و فرانت‌اند (React / Vite)

```javascript
// src/utils/sanitize.js
import DOMPurify from 'dompurify';

export const sanitizeHTML = (dirtyContent) => {
  return DOMPurify.sanitize(dirtyContent, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
};
```
