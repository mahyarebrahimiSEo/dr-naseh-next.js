# 🏷️ استانداردهای نام‌گذاری و قواعد اکسپورت (Naming Conventions & Exports)

رعایت استانداردهای یکدست نام‌گذاری فایل‌ها و مدیریت اکسپورت‌ها، خوانایی و پیمایش پروژه را تضمین می‌کند.

---

## ۱. قواعد نام‌گذاری فایل‌ها و پوشه‌ها (File & Directory Naming)

| نوع عنصر | قاعده نام‌گذاری | مثال صحیح | مثال نادرست |
| :--- | :--- | :--- | :--- |
| **پوشه‌ها (Directories)** | `kebab-case` | `user-profile`, `data-table`, `invoice-reports` | `UserProfile`, `invoiceReports` |
| **کامپوننت‌های React** | `PascalCase` | `TransactionModal.jsx`, `StatCard.tsx` | `transaction-modal.jsx`, `statCard.js` |
| **هوک‌های سفارشی (Hooks)** | `camelCase` با پیشوند `use` | `useTransactions.js`, `usePersianCalendar.ts` | `UseTransactions.js`, `use-transactions.js` |
| **توابع کمکی و ابزارها (Utils)** | `camelCase` یا `kebab-case` | `formatCurrency.js`, `date-utils.ts` | `FormatCurrency.js` |
| **فایل‌های استور (Stores)** | `camelCase` با پسوند `Store` | `authStore.js`, `cartStore.ts` | `auth_store.js` |
| **فایل‌های تست (Tests)** | هم‌نام با فایل اصلی + `.test` | `StatCard.test.jsx`, `formatCurrency.spec.js` | `test-stat-card.js` |
| **فایل‌های تایپ (Types)** | هم‌نام با دامنه + `.types` | `transaction.types.ts`, `auth.types.ts` | `types.ts` (در ریشه) |

---

## ۲. استفاده بهینه از Barrel Files (`index.js` / `index.ts`)

- **هدف**: ایجاد دروازه ورودی تمیز (Public API) برای هر ماژول تا ایمپورت‌های بیرونی کوتاه شوند:
  ```javascript
  // در src/features/transactions/index.js
  export { default as TransactionTable } from './components/TransactionTable';
  export { default as TransactionModal } from './components/TransactionModal';
  export { useTransactions } from './hooks/useTransactions';
  ```
- **هشدار مهم (پیشگیری از وابستگی‌های چرخه‌ای - Circular Dependencies)**:
  - هرگز داخل همان ماژول یا ساب‌کامپوننت‌های داخلی از `index.js` ریشه ماژول ایمپورت نکنید؛ از مسیرهای نسبی داخلی استفاده کنید.
  - فایل‌های `index.js` را بیش از حد سنگین نکنید تا Tree-shaking کدهای باندل به درستی انجام شود.

---

## ۳. تنظیم مسیرهای میانبر (Path Aliases)

همیشه از `@/` به جای مسیرهای طولانی نسبی (`../../../../components`) استفاده کنید:

```json
// در tsconfig.json یا jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
