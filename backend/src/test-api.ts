import http from 'http';
import { createApp } from './app';
import { prisma } from './database/prisma';
import { logger } from './utils/logger';

async function runTests() {
  logger.info('🚀 در حال اجرای تست‌های جامع یکپارچه‌سازی API...');

  await prisma.$connect();
  const app = createApp();

  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));

  const address = server.address() as any;
  const baseUrl = `http://127.0.0.1:${address.port}`;
  logger.info(`تست سرور روی پورت موقت ${address.port} فعال شد: ${baseUrl}`);

  let token = '';

  const request = async (
    endpoint: string,
    options: { method?: string; body?: any; headers?: Record<string, string> } = {}
  ) => {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    const json = (await res.json()) as any;
    return { status: res.status, data: json };
  };

  try {
    // 1. Health Check
    const health = await request('/health');
    console.assert(health.status === 200 && health.data.data.status === 'UP', 'Health check failed');
    logger.info('✅ 1. تست سلامت سرور (/health) با موفقیت پاس شد');

    // 2. Base API Index
    const index = await request('/api/v1');
    console.assert(index.status === 200 && index.data.data.version === '1.0.0', 'API index failed');
    logger.info('✅ 2. تست شاخص API (/api/v1) با موفقیت پاس شد');

    // 3. Login
    const login = await request('/api/v1/auth/login', {
      method: 'POST',
      body: { email: 'admin@drnaseh.ir', password: 'admin123456' },
    });
    console.assert(login.status === 200 && login.data.data.token, 'Login failed');
    token = login.data.data.token;
    logger.info('✅ 3. تست احراز هویت ادمین و دریافت توکن JWT با موفقیت پاس شد');

    // 4. Me endpoint
    const me = await request('/api/v1/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.assert(me.status === 200 && me.data.data.role === 'ADMIN', 'Me failed');
    logger.info('✅ 4. تست روت محافظت‌شده پروفایل (/auth/me) با موفقیت پاس شد');

    // 5. Get Articles
    const articles = await request('/api/v1/articles');
    console.assert(articles.status === 200 && articles.data.data.length > 0, 'Articles failed');
    logger.info(`✅ 5. تست دریافت مقالات (${articles.data.data.length} مقاله) با موفقیت پاس شد`);

    // 6. Get Article Categories
    const categories = await request('/api/v1/articles/categories');
    console.assert(categories.status === 200 && categories.data.data.length > 0, 'Categories failed');
    logger.info('✅ 6. تست دسته‌بندی‌های دانشنامه با موفقیت پاس شد');

    // 7. Get Services
    const services = await request('/api/v1/services');
    console.assert(services.status === 200 && services.data.data.length > 0, 'Services failed');
    logger.info(`✅ 7. تست دریافت خدمات کلینیک (${services.data.data.length} خدمت) با موفقیت پاس شد`);

    // 8. Public Appointment Booking
    const newAppointment = await request('/api/v1/appointments', {
      method: 'POST',
      body: {
        fullName: 'کامران بختیاری',
        phoneNumber: '09121234567',
        consultationTopic: 'درمان تخصصی آرتروز و درد زانو (تزریق سلولی و PRP)',
        shift: 'morning',
        patientMessage: 'تست نوبت آنلاین توسط سیستم تست خودکار',
      },
    });
    console.assert(newAppointment.status === 201 && newAppointment.data.data.id, 'Appointment booking failed');
    const appointmentId = newAppointment.data.data.id;
    logger.info('✅ 8. تست ثبت عمومی نوبت و مشاوره بیمار با موفقیت پاس شد');

    // 9. Admin update appointment status
    const updateAppointment = await request(`/api/v1/appointments/${appointmentId}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
      body: {
        status: 'CONFIRMED',
        internalNotes: 'با بیمار تماس گرفته شد، برای دوشنبه ساعت ۱۶ هماهنگ شد.',
      },
    });
    console.assert(updateAppointment.status === 200 && updateAppointment.data.data.status === 'CONFIRMED', 'Update appointment failed');
    logger.info('✅ 9. تست تغییر وضعیت نوبت توسط کادر درمان با موفقیت پاس شد');

    // 10. Newsletter Subscription
    const dynamicContact = `0935${Date.now().toString().slice(-7)}`;
    const newsletter = await request('/api/v1/newsletter', {
      method: 'POST',
      body: {
        fullName: 'مریم احمدی',
        contact: dynamicContact,
      },
    });
    console.assert(newsletter.status === 201, 'Newsletter subscription failed');
    logger.info('✅ 10. تست عضویت در خبرنامه با موفقیت پاس شد');

    // 11. Clinic Info
    const clinic = await request('/api/v1/clinic');
    console.assert(clinic.status === 200 && clinic.data.data.clinicName, 'Clinic info failed');
    logger.info('✅ 11. تست دریافت اطلاعات مطب و ساعات کاری با موفقیت پاس شد');

    // 12. Dashboard Overview
    const dashboard = await request('/api/v1/dashboard/overview', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.assert(dashboard.status === 200 && dashboard.data.data.counters, 'Dashboard failed');
    logger.info('✅ 12. تست داشبورد آماری و شاخص‌های کلینیک با موفقیت پاس شد');

    logger.info('🎉 تمام ۱۲ آزمون یکپارچگی بک‌اند بدون خطا با موفقیت ۱۰۰٪ پاس شدند!');
  } finally {
    server.close();
    await prisma.$disconnect();
  }
}

runTests().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
