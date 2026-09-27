import { prisma } from './prisma';
import { hasher } from '../utils/hasher';
import { logger } from '../utils/logger';

async function seed() {
  logger.info('🌱 در حال آماده‌سازی و داده‌های پیش‌فرض دیتابیس (Seeding)...');

  // 1. Seed Users (Admin & Secretary)
  const adminPassword = await hasher.hash('admin123456');
  const secretaryPassword = await hasher.hash('secretary123');

  const admin = await prisma.user.upsert({
    where: { email: 'admin@drnaseh.ir' },
    update: {},
    create: {
      email: 'admin@drnaseh.ir',
      fullName: 'دکتر ناصح یوسفی',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'secretary@drnaseh.ir' },
    update: {},
    create: {
      email: 'secretary@drnaseh.ir',
      fullName: 'منشی پذیرش کلینیک',
      password: secretaryPassword,
      role: 'SECRETARY',
    },
  });

  logger.info(`✅ کاربران پایه اضافه شدند: admin@drnaseh.ir / secretary@drnaseh.ir`);

  // 2. Seed Articles
  const articles = [
    {
      title: 'درمان غیرجراحی پارگی و آرتروز زانو با تزریق پی‌آرپی (PRP) با خلوص بالا',
      slug: 'prp-knee-treatment',
      summary:
        'مقایسه اثربخشی بالینی پلاسمای غنی از پلاکت با سایر روش‌های محافظه‌کارانه و بررسی نقش آن در کاهش نیاز به جراحی تعویض مفصل بر اساس آخرین شواهد بالینی.',
      content: `پلاسمای غنی از پلاکت (PRP) یکی از دستاوردهای نوین و اثبات‌شده در حوزه ارتوپدی بازساختی است. در این روش با استفاده از کیت‌های بسته دارای گواهینامه معتبر، مقداری از خون خود بیمار گرفته شده و پس از سانتریفیوژ دقیق، پلاکت‌های تغلیظ‌شده با فاکتورهای رشد آزاد جدا می‌شوند.
      
تزریق این مایع بیولوژیک تحت گاید زنده سونوگرافی مستقیماً در فضای داخل مفصل زانو یا اطراف منیسک موجب تحریک تکثیر سلول‌های غضروفی و کاهش واسطه‌های التهابی می‌شود. بیمار پس از انجام این عمل سرپایی، بدون نیاز به بستری یا بیهوشی به منزل بازمی‌گردد.`,
      category: 'prp knee',
      readTime: '۶ دقیقه',
      author: 'دکتر ناصح یوسفی',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDjmXc19icFrkXuv3bbP0__qX4L5ghxDhlduH1eWdYSiJPOg8Urqq-2KGDkwGlfI7fYXnif1KcpKOZc9RzAc42g7h1VfySJ8OcXFNb-E5F1yWex6cfzwUG_GbrtsM0qv5FdwU7NEaNHu-jvU-2VluDQHJOvSKQlxaNhhs7rF-Jj3l7BMdWop_GtX0o8NDW5RuCNVQMD6OU1N21KAu_BhrP0kyl8uwZSmh7OQmUvQMoqB1WWGn3b_wnUpg',
      imageAlt: 'تزریق پی آر پی زانو تحت گاید سونوگرافی',
      isPublished: true,
      viewsCount: 342,
    },
    {
      title: 'نوار عصب و عضله (EMG/NCS) چه زمانی برای بیمار ضروری است؟',
      slug: 'emg-ncs-indications',
      summary:
        'راهنمای کامل تشخیصی درگیری عصب سیاتیک، سندرم تونل کارپال مچ دست و دیسکوپاتی‌های گردنی همراه با تحلیل نحوه تفسیر نتایج الکترودیاگنوز در مطب.',
      content: `تست الکترودیاگنوستیک شامل دو بخش نوار هدایت عصبی (NCS) و الکترومیوگرافی (EMG) است. این آزمون به پزشک امکان می‌دهد عملکرد الکتریکی اعصاب محیطی و عضلات را اندازه‌گیری کند.

موارد اصلی کاربرد:
۱. گزگز، بی‌حسی و ضعف انگشتان دست (شک به سندرم تونل کارپال یا درگیری ریشه‌های گردن)
۲. تیر کشیدن درد به ساق پا و کف پا (شک به رادیکولوپاتی کمری یا عصب سیاتیک)
۳. ضعف عضلانی نامشخص یا آسیب‌های تروماتیک اندام‌ها.
در کلینیک دکتر ناصح یوسفی این آزمون با پیشرفته‌ترین دستگاه‌های روز دنیا انجام می‌شود.`,
      category: 'emg',
      readTime: '۸ دقیقه',
      author: 'دکتر ناصح یوسفی',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBYtSW_GziS50Bfmvj5NM3cBe9Cx-laA-xTw42EUVhxhxu9flO3F4YSwYnFevxOdl6wk1Nhyxni9dlTt9_xwrluwwfp4IAmrUjIxkfkqd_GopO9Kqm7Z3i7eKP8IUZzeuw9H0tnMXjxQs5OeTGBJJ5vDyGv7lJQrPPCulQSoUFN0ptcI-zzETNYb8zor5GVwwBm4eZ7NBZ4XCgHBVuGevp_r_yUvVW_NFIy74Pg8jytqZqqoUxWEfPDnQ',
      imageAlt: 'انجام نوار عصب و عضله با الکترودهای حساس',
      isPublished: true,
      viewsCount: 289,
    },
    {
      title: 'درمان بدون جراحی فتق دیسک کمر: روش‌های مداخله‌ای کم‌تهاجمی',
      slug: 'lumbar-herniated-disc-treatment',
      summary:
        'مروری بر تزریقات اپیدورال ترنس‌فورامینال، پرولوتراپی تخصصی و توانبخشی هدفمند عضلات مرکزی ستون فقرات برای رفع فشار مستقیم از ریشه‌های عصبی ملتهب.',
      content: `فتق دیسک کمر یکی از شایع‌ترین علل درد ناتوان‌کننده کمر و اندام تحتانی است. بیش از ۹۰ درصد بیماران بدون نیاز به جراحی باز و تنها با روش‌های سرپایی بهبود می‌یابند.

رویکرد درمانی شامل:
۱. تزریقات مداخله‌ای ستون فقرات با هدایت سونوگرافی یا فلوروسکوپی جهت کاهش تورم ریشه عصبی
۲. اوزون‌تراپی و پرولوتراپی برای تقویت لیگامان‌های نگهدارنده مهره‌ها
۳. تمرینات تخصصی بازتوانی ستون فقرات به منظور بازگرداندن توازن بیومکانیکی بدن.`,
      category: 'spine',
      readTime: '۵ دقیقه',
      author: 'دکتر ناصح یوسفی',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3zbFfZO-iZsOPkVAaiW7MJ2O8S7t8BR0Gj93Ja-sXcX5QwXAKFT4c9nxKnvjnqGN1L4ovTISr7j8iuwvSOYynNYT1lnnbG1UV6kOFXogAI-RPvTYntM__htyia1a7GgwYaHc6FM9gjjiByYy3qPZozLRqU34ixXvq_2SnhFlKvKDnR9W0GTx7ZUzdDxaAMiQx0PbR0stws--dsFkZaHTL7RU74wOnn6hjbTF2smQEmaX3O3EWZ8PPw',
      imageAlt: 'مدل آناتومیک ستون فقرات و فتق دیسک',
      isPublished: true,
      viewsCount: 412,
    },
    {
      title: 'پرولوتراپی (Prolotherapy) چیست و چگونه به ترمیم رباط و تاندون کمک می‌کند؟',
      slug: 'prolotherapy-tendon-regeneration',
      summary:
        'مکانیسم بیولوژیک تحریک بازسازی بافت همبند در آسیب‌های شانه، تاندونوپاتی آشیل، آسیب‌های ورزشی مزمن و تسریع ترمیم بافت‌های بدون خونرسانی کافی.',
      content: `پرولوتراپی یک متد بازساختی بر پایه تزریق محلول‌های محرک تکثیر سلولی (دکستروز هایپرتونیک) به محل اتصال تاندون‌ها و لیگامان‌ها به استخوان است.
      
این روش با تحریک پاسخ التهابی خفیف و کنترل‌شده موضعی، فیبروبلاست‌ها را فعال کرده و سنتز رشته‌های کلاژن جدید را تقویت می‌کند؛ در نتیجه استحکام مکانیکی مفصل مجدداً برقرار می‌گردد.`,
      category: 'prp',
      readTime: '۷ دقیقه',
      author: 'دکتر ناصح یوسفی',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA9a2-5G9sr41gERH34ZK5nJJZcfB_UAh0hrA5m9VUGMMCmT1J1A4e6MYG9hK4nZdRLf-aBC34eyyk7_L-Tboku-_4Id1OH9ep7dqdxd5F5QTb9nBN5SNOyT5vx2iZ-jGXaYs1RhyhjUk2ASNlQsJ3scag3gwI7pSx0sWTJ5nO67eKU9NVS_lkL5-j0i9M0w0OZv8s6Yn9v1Y5MC6GFNrvpArOlo79UVE0MQ7nU5EuvB1btr0qrXig2dw',
      imageAlt: 'بازسازی بیولوژیک بافت همبند و تاندون',
      isPublished: true,
      viewsCount: 198,
    },
    {
      title: 'اهمیت سونوگرافی اسکلتی-عضلانی در ارزیابی دقیق دردهای مفصلی',
      slug: 'msk-ultrasound-importance',
      summary:
        'چرا تزریقات هدفمند مفاصل باید همواره تحت هدایت مستقیم دستگاه اولتراسوند انجام شوند تا ضریب خطای درمان به صفر رسیده و محل دقیق آسیب هدف‌گیری شود؟',
      content: `سونوگرافی اسکلتی‌عضلانی (MSK Sonography) به منزله چشم پزشک در درون بافت‌های حرکتی است. برخلاف تزریقات بدون گاید که مبتنی بر لمس سطحی هستند، در سونوگرافی پزشک مسیر سوزن را به صورت زنده تا میلی‌متر آخر مشاهده می‌کند.
      
این امر نه تنها از آسیب تصادفی به عروق و اعصاب مجاور جلوگیری می‌کند، بلکه داروی ترمیمی را دقیقاً در کانون پارگی یا التهاب تزریق می‌نماید.`,
      category: 'knee spine',
      readTime: '۴ دقیقه',
      author: 'دکتر ناصح یوسفی',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUfs9EJ-Tu8XHFwBmlYUQvdZcb5fveMCigKovjn3wRlLSyRh3AFcvotZY2Gd0Qaz3C6sIq4nQ2DpGDkAg5KJoaGT0V1uq77WDJ6KrDvYvE7sOP4bByXWCVB13S-o6w4-c13_0QRvdbuCy0yEmFGWz1mDesAcNjizMvmDeUVt0YZOVw5EDi0sOeI0Rrx4UO07Iau3sE23kRZm3vhEyh8TvBOY2emDhuWNrACesD97VpV4jCxmCRRD5xJA',
      imageAlt: 'ارزیابی مفاصل با سونوگرافی پیشرفته',
      isPublished: true,
      viewsCount: 230,
    },
    {
      title: 'تمرین‌درمانی و برنامه توانبخشی خانگی برای تسکین قطعی درد گردن',
      slug: 'neck-pain-rehab-exercises',
      summary:
        'پروتکل‌های ارگونومی محیط کار و حرکات کششی موثر جهت برطرف کردن اسپاسم عضلانی مکرر و اصلاح پوسچر ناشی از کار مداوم با رایانه و تلفن همراه.',
      content: `استفاده مداوم از تلفن هوشمند و نشستن طولانی پشت میز کار، زاویه سر را به جلو متمایل کرده و وزن وارد بر مهره‌های گردن را تا چندین برابر افزایش می‌دهد.
      
برنامه توانبخشی شامل تمرینات تقویت عضله عمقی خم‌کننده گردن، تمرینات کششی ذوزنقه‌ای و بهبود ارگونومی میز و صندلی است که گام نهایی در تثبیت بهبودی بیمار پس از درمان‌های کلینیکی محسوب می‌شود.`,
      category: 'exercise spine',
      readTime: '۵ دقیقه',
      author: 'دکتر ناصح یوسفی',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZxb5Ah1LPbdh6FKX6Hj3Km2mRgx3kx95aEmUT5isMJQ1n7N_v2bWuHxvdu0zyOQW4LHsUS-k-Kp6d-r43qYljujZkCaN5IiIgKAtW9NTlilAcb-07TGAumMbcwZeH0LIYLCssouudXz5c-lpJoOmQNGqd4ikvKernPH-yIpQfZn3yucgLUQYXKFuZvFOIECxpCas19xzPfeF1AoXps2ZRdn1OTBvh3mTtNa-7mlVk44uiEtbqTtvB3w',
      imageAlt: 'تمرینات اصلاحی فیزیوتراپی و توانبخشی گردن',
      isPublished: true,
      viewsCount: 310,
    },
  ];

  for (const art of articles) {
    await prisma.article.upsert({
      where: { slug: art.slug },
      update: art,
      create: art,
    });
  }
  logger.info(`✅ مقالات دانشنامه بالینی ذخیره گردید (${articles.length} مقاله)`);

  // 3. Seed Services
  const services = [
    {
      title: 'پی آر پی (PRP) زانو و مفاصل',
      latinTitle: 'Platelet-Rich Plasma',
      slug: 'prp-treatment',
      category: 'biologic',
      badge: 'پلاسمای تغلیظ‌شده',
      summary:
        'درمان آرتروز و آسیب‌های غضروفی با فاکتورهای رشد اتولوگ استخراج شده از خون خود بیمار تحت هدایت میلی‌متری سونوگرافی.',
      description:
        'این فرآیند با بهره‌گیری از کیت‌های بسته دارای مجوز رسمی، غلظت ۵ برابری پلاکت را فراهم آورده و فرایند بازسازی طبیعی سلول‌های غضروفی را تحریک می‌کند.',
      benefits: JSON.stringify([
        'ترمیم غضروف آسیب‌دیده و منیسک',
        'کاهش چشمگیر اصطکاک و خشکی مفصلی',
        'تزریق تحت گاید سونوگرافی بدون خطا',
        'بدون هیچ‌گونه ریسک آلرژی یا پس‌زدگی',
      ]),
      duration: 'ماندگاری: ۹ الی ۱۸ ماه',
      icon: 'bloodtype',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBgK6BfB9wpZ8Ouh9F8E5i0adBGhtz8nPhZfn87UIEc6sXYwe-BzVm-rptfToGRVWep9x3Q7vqLE25VJBI__gI3zlJXGoxGymiewHPmBSz_Xe22Q6sMjAv_54fQ6fIIdKmlNYDWYz7SXFFJWCUevjqZCXrIxRhUV9zhEBoDmegxPxCI-jO6L1INfmoHhT7_tLwaV-YwKVTz9bu5gdYqY_5_rQF6VVGrMiYhMPHn41ccIJpWc613H95rjg',
      displayOrder: 1,
      isActive: true,
    },
    {
      title: 'اوزون تراپی تخصصی مفاصل و دیسک',
      latinTitle: 'Medical Ozone Therapy',
      slug: 'ozone-therapy',
      category: 'biologic',
      badge: 'ضدالتهاب بیولوژیک',
      summary:
        'تسکین سریع التهاب مفاصل و آزادسازی ریشه‌های عصبی درگیر فتق دیسک با تزریق گاز اکسیژن-اوزون مدیکال.',
      description:
        'گاز اوزون در غلظت درمانی دقیق موجب افزایش خونرسانی، کاهش ترشح سایتوکاین‌های التهابی و کوچک شدن تورم برجستگی دیسک می‌گردد.',
      benefits: JSON.stringify([
        'تسکین فوق‌العاده سریع دردهای حاد',
        'کاهش تورم ریشه‌های عصب سیاتیک',
        'بهبود اکسیژن‌رسانی به بافت‌های عمقی',
        'فاقد عوارض کورتون و مسکن‌های خوراکی',
      ]),
      duration: 'ماندگاری: ۶ الی ۱۲ ماه',
      icon: 'air',
      imageUrl: null,
      displayOrder: 2,
      isActive: true,
    },
    {
      title: 'تزریق سلول بنیادی و ارتوپدی بازساختی',
      latinTitle: 'Regenerative Stem Cell',
      slug: 'stem-cell-therapy',
      category: 'biologic',
      badge: 'طب بازساختی پیشرفته',
      summary:
        'پیشرفته‌ترین متد ارتوپدی بازساختی جهت ترمیم آسیب‌های ساختاری مفاصل و به تأخیر انداختن جراحی تعویض مفصل.',
      description:
        'بهره‌گیری از سلول‌های مزانشیمی مغز استخوان یا بافت چربی جهت تحریک بازسازی بافت‌های پیر یا دچار فرسایش شدید.',
      benefits: JSON.stringify([
        'پتانسیل بالای تمایز به بافت غضروفی',
        'به تعویق انداختن قطعی نیاز به تعویض مفصل',
        'روش محافظه‌کارانه و سرپایی',
      ]),
      duration: 'ماندگاری: ۲ الی ۳ سال',
      icon: 'biotech',
      imageUrl: null,
      displayOrder: 3,
      isActive: true,
    },
    {
      title: 'ارتوکین تراپی (سرم اتولوگ مهندسی‌شده)',
      latinTitle: 'Autologous Conditioned Serum (Orthokine)',
      slug: 'orthokine-therapy',
      category: 'biologic',
      badge: 'سرم اتولوگ مهندسی‌شده',
      summary:
        'تولید و تزریق سروم آنتاگونیست گیرنده اینترلوکین-۱ برای مهار ریشه‌ای فاکتورهای تخریب‌کننده غضروف.',
      description:
        'این متد آلمانی با مهار اختصاصی گیرنده‌های تخریب‌کننده IL-1، فرآیند تخریب غضروف زانو را در سطح مولکولی متوقف می‌کند.',
      benefits: JSON.stringify([
        'مهار بیولوژیک فاکتورهای ساییدگی',
        'تسکین پایدار درد و تورم مزمن',
        'مناسب برای ورزشکاران حرفه‌ای و آرتروزهای پیشرفته',
      ]),
      duration: 'ماندگاری: تا ۲ سال',
      icon: 'medication',
      imageUrl: null,
      displayOrder: 4,
      isActive: true,
    },
    {
      title: 'نوار عصب و عضله (EMG / NCS)',
      latinTitle: 'Electromyography & NCS',
      slug: 'emg-ncs-diagnostic',
      category: 'electro',
      badge: 'تشخیص دقیق هدایت عصبی',
      summary:
        'بررسی دقیق الکترودیاگنوستیک دیسکوپاتی‌های گردن و کمر، درگیری عصب سیاتیک و سندرم تونل کارپال.',
      description:
        'ثبت فعالیت الکتریکی اعصاب و پتانسیل عمل عضلات برای تعیین دقیق محل، شدت و سن آسیب‌های سیستم عصبی محیطی.',
      benefits: JSON.stringify([
        'تشخیص افتراقی درد عصب از مشکلات مفصلی',
        'تعیین میزان آسیب عصب با دقت میلی‌ثانیه',
        'تفسیر تخصصی توسط عضو هیئت علمی دانشگاه',
      ]),
      duration: 'نتیجه در همان جلسه ویزیت',
      icon: 'electric_bolt',
      imageUrl: null,
      displayOrder: 5,
      isActive: true,
    },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  logger.info(`✅ خدمات و پروتکل‌های درمانی ذخیره گردید (${services.length} خدمت)`);

  // 4. Seed Testimonials
  const testimonials = [
    {
      patientName: 'محسن رضایی',
      treatment: 'درمان غیرجراحی دیسک گردن',
      comment:
        'برای دیسک گردن دو جراح به من پیشنهاد عمل باز داده بودند. به توصیه یکی از دوستان خدمت دکتر یوسفی رسیدم. با تشخیص دقیق و دو جلسه تزریق تخصصی و ورزش‌های اصلاحی، الان بیش از یک سال است که هیچ دردی در دست‌هایم حس نمی‌کنم.',
      rating: 5,
      isApproved: true,
      displayOrder: 1,
    },
    {
      patientName: 'فاطمه سهرابی',
      treatment: 'سلول‌درمانی و PRP زانو',
      comment:
        'آرتروز شدید زانو مادرم را به سختی انداخته بود. پی‌آرپی انجام شده توسط دکتر با سونوگرافی انجام شد و واقعاً تفاوت کیفیت کارشان با مراکز دیگر چشمگیر بود. مادرم توانست دوباره پیاده‌روی روزانه‌اش را شروع کند.',
      rating: 5,
      isApproved: true,
      displayOrder: 2,
    },
    {
      patientName: 'علیرضا میرزایی',
      treatment: 'سندرم تونل کارپال (نوار عصب و عضله)',
      comment:
        'نوار عصب دست من با دقت فوق‌العاده بالایی انجام شد. مهم‌تر از همه، دکتر با حوصله تمام یافته‌ها را برایم شرح دادند و برنامه درمانی مشخص کردند. برخورد کادر مطب نیز بسیار محترمانه و منظم است.',
      rating: 5,
      isApproved: true,
      displayOrder: 3,
    },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }
  logger.info(`✅ نظرات مراجعین اضافه شد (${testimonials.length} نظر)`);

  // 5. Seed FAQs
  const faqs = [
    {
      question: 'آیا تزریقات بازساختی مانند پی‌آرپی یا اوزون دردناک هستند؟',
      answer:
        'خیر، قبل از انجام تزریق، موضع با لیدوکائین موضعی بی‌حس می‌گردد. علاوه بر این، به کارگیری سرسوزن‌های بسیار نازک میکرو و انجام فرایند تحت هدایت زنده و میلی‌متری سونوگرافی موجب می‌شود تا بیمار کمترین حس درد و ناراحتی را تجربه نماید.',
      category: 'treatments',
      displayOrder: 1,
    },
    {
      question: 'برای دستیابی به نتیجه درمانی مطلوب، چند جلسه درمانی نیاز است؟',
      answer:
        'تعداد جلسات به شدت تخریب بافت و پاسخ بیولوژیک بدن بستگی دارد. به طور معمول برای PRP بین ۱ الی ۳ جلسه با فاصله یک ماه، برای اوزون‌تراپی بین ۳ تا ۵ جلسه و برای روش‌هایی مانند ارتوکین طبق پروتکل استاندارد، معمولاً ۴ تا ۶ تزریق متوالی تجویز می‌شود.',
      category: 'treatments',
      displayOrder: 2,
    },
    {
      question: 'کیت‌های استاندارد PRP چه تفاوتی با لوله‌های معمولی آزمایشگاه دارند؟',
      answer:
        'لوله‌های ساده آزمایشگاهی تنها برای تست‌های خون‌شناسی هستند و غلظت پلاکت کافی یا جداسازی سلول‌های قرمز و گلبول‌های سفید ملتهب‌کننده را فراهم نمی‌کنند. در کلینیک دکتر ناصح یوسفی صرفاً از کیت‌های اختصاصی بسته درمانی (Closed System) دارای مجوز وزارت بهداشت استفاده می‌شود تا غلظت بالای پلاکت سالم بدون تماس با هوای محیط تضمین شود.',
      category: 'treatments',
      displayOrder: 3,
    },
    {
      question: 'آیا تست نوار عصب و عضله (EMG/NCS) نیاز به آمادگی قبلی خاصی دارد؟',
      answer:
        'آمادگی پیچیده‌ای نیاز نیست؛ تنها توصیه می‌شود پوست اندام مورد بررسی تمیز و فاقد هرگونه لوسیون یا کرم چرب باشد. همچنین لباس‌های راحت و گشاد بپوشید تا دسترسی به بازوها یا پاها به سادگی میسر باشد. در صورت داشتن ضربان‌ساز قلب (Pacemaker) پیش از آزمون پزشک را مطلع نمایید.',
      category: 'treatments',
      displayOrder: 4,
    },
    {
      question: 'آیا برای ویزیت باید مدارک پزشکی قبلی را به همراه داشته باشیم؟',
      answer:
        'بله، همراه داشتن عکس‌های رادیولوژی، MRI اخیر، نوار عصب قدیمی یا آزمایش‌های مرتبط، روند تشخیص و ارائه پروتکل درمان را سرعت می‌بخشد.',
      category: 'booking',
      displayOrder: 5,
    },
  ];

  for (const f of faqs) {
    await prisma.fAQ.create({ data: f });
  }
  logger.info(`✅ سوالات متداول ذخیره شد (${faqs.length} سوال)`);

  // 6. Seed Clinic Settings
  const settings = [
    { key: 'clinic_name', value: 'کلینیک دکتر ناصح یوسفی', description: 'نام کلینیک' },
    {
      key: 'specialty',
      value: 'متخصص طب فیزیکی، توانبخشی و الکترودیاگنوز',
      description: 'تخصص پزشکی',
    },
    {
      key: 'academic_title',
      value: 'استادیار و عضو هیئت علمی دانشگاه علوم پزشکی ایران',
      description: 'مرتبه علمی',
    },
    { key: 'medical_council_code', value: 'IR-MC 132488', description: 'کد نظام پزشکی' },
    { key: 'phone_landline', value: '021-66020308', description: 'تلفن ثابت کلینیک' },
    { key: 'phone_mobile', value: '09120000000', description: 'شماره همراه و واتساپ' },
    {
      key: 'address',
      value:
        'تهران، خیابان آزادی، روبروی ایستگاه مترو شادمان، ساختمان پزشکان فجر، طبقه ۳، کلینیک دکتر ناصح یوسفی',
      description: 'آدرس کامل مطب',
    },
  ];

  for (const s of settings) {
    await prisma.clinicSetting.upsert({
      where: { key: s.key },
      update: s,
      create: s,
    });
  }
  logger.info(`✅ تنظیمات و اطلاعات مطب ثبت شد`);

  // 7. Seed Sample Appointment for Testing
  await prisma.appointment.create({
    data: {
      fullName: 'سهراب سهرابی',
      phoneNumber: '09123456789',
      consultationTopic: 'درمان تخصصی آرتروز و درد زانو (تزریق سلولی و PRP)',
      shift: 'afternoon',
      patientMessage: 'دارای درد زانوی چپ هنگام بالا رفتن از پله، MRI همراه دارم.',
      status: 'PENDING',
    },
  });
  logger.info(`✅ نمونه درخواست نوبت تستی ایجاد شد`);

  logger.info('🎉 عملیات کاشت داده‌ها (Database Seed) با موفقیت کامل انجام شد!');
}

seed()
  .catch((e) => {
    logger.error('❌ خطا در عملیات Seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
