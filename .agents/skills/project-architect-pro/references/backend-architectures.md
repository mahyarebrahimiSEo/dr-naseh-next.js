# ⚙️ معماری و پوشه‌بندی بک‌اند (Backend Architectures)

این سند الگوهای معماری لایه‌ای، معماری تمیز (Clean Architecture) و ساختار پوشه‌بندی فریم‌ورک‌های متداول بک‌اند را توضیح می‌دهد.

---

## ۱. معماری تمیز و شش‌ضلعی (Clean / Hexagonal Architecture)

در این الگو، هسته کسب‌وکار (Domain) مستقل از فریم‌ورک، دیتابیس و پروتکل ارتباطی است.

```text
src/
├── core/                       # لایه ۱: دامنه و مدل‌های خالص کسب‌وکار (Domain / Entities)
│   ├── entities/               # موجودیت‌های اصلی (User, Invoice, Transaction)
│   └── value-objects/          # اشیاء مقدار (Money, PersianDate, NationalId)
│
├── application/                # لایه ۲: سناریوهای کاربری و منطق برنامه (Use Cases)
│   ├── use-cases/
│   │   ├── create-invoice.usecase.ts
│   │   └── settle-payment.usecase.ts
│   ├── interfaces/             # اینترفیس‌های مخازن داده و سرویس‌ها (IRepository, INotificationService)
│   └── dtos/                   # قالب‌های انتقال داده (CreateInvoiceDto)
│
├── infrastructure/             # لایه ۳: زیرساخت، دیتابیس، پیام‌رسان‌ها (Adapters)
│   ├── database/               # پیکربندی ORM، مدل‌های دیتابیس و Migrationها
│   │   ├── models/
│   │   └── repositories/       # پیاده‌سازی مخازن داده (SqliteInvoiceRepository)
│   ├── external/               # وب‌سرویس‌های خارجی (PaymentGateway, SmsProvider)
│   └── security/               # رمزنگاری و JWT
│
└── presentation/               # لایه ۴: درگاه‌های ارتباط با کاربر (HTTP Controllers / CLI / GraphQL)
    ├── http/
    │   ├── controllers/
    │   ├── middlewares/
    │   └── routes/
    └── server.ts
```

---

## ۲. ساختار ماژولار در NestJS

```text
src/
├── common/                     # ماژول‌ها و ابزارهای اشتراکی سراسری
│   ├── decorators/
│   ├── filters/                # فیلترهای استثنا (AllExceptionsFilter)
│   ├── guards/                 # گاردها (AuthGuard, RolesGuard)
│   ├── interceptors/           # لاگ و تبدیل پاسخ
│   └── pipes/                  # لوله‌های اعتبارسنجی (ValidationPipe)
│
├── config/                     # تنظیمات محیطی (configuration.ts, database.config.ts)
│
├── modules/                    # ماژول‌های مستقل بر مبنای فیچر
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── dto/
│   │   └── strategies/
│   │
│   ├── accounting/
│   │   ├── accounting.controller.ts
│   │   ├── accounting.service.ts
│   │   ├── accounting.module.ts
│   │   ├── dto/
│   │   └── entities/
│   │
│   └── users/
│
├── app.module.ts               # ماژول ریشه
└── main.ts                     # نقطه آغاز و پیکربندی Swagger / CORS / Ports
```

---

## ۳. ساختار استاندارد Python FastAPI

```text
app/
├── api/                        # اندپوینت‌ها و روت‌ها
│   ├── v1/
│   │   ├── endpoints/
│   │   │   ├── auth.py
│   │   │   ├── invoices.py
│   │   │   └── transactions.py
│   │   └── router.py           # تجمیع روت‌های نسخه ۱
│   └── deps.py                 # Dependency Injection (get_db, get_current_user)
│
├── core/                       # پیکربندی پایه و امنیت
│   ├── config.py               # تنظیمات Pydantic BaseSettings
│   └── security.py             # تولید پسورد هش و توکن JWT
│
├── crud/                       # توابع دسترسی به دیتابیس (CRUD Repositories)
│   ├── crud_user.py
│   └── crud_invoice.py
│
├── db/                         # پیکربندی پایگاه داده
│   ├── base.py                 # ایمپورت تمام مدل‌ها برای Alembic
│   ├── session.py              # ساخت SQLAlchemy Engine و SessionLocal
│   └── init_db.py
│
├── models/                     # مدل‌های ORM (SQLAlchemy / Tortoise / SQLModel)
│   ├── user.py
│   └── invoice.py
│
├── schemas/                    # اسکیماهای اعتبارسنجی داده (Pydantic Models)
│   ├── user.py
│   └── invoice.py
│
├── services/                   # سرویس‌های پیچیده و منطق محاسباتی
└── main.py                     # اپلیکیشن FastAPI و میدلورها
```
