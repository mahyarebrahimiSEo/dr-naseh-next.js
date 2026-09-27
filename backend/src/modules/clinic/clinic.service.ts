import { prisma } from '../../database/prisma';
import { UpdateClinicSettingInput } from './clinic.schemas';

export class ClinicService {
  static async getClinicInfo() {
    const settings = await prisma.clinicSetting.findMany();
    const settingsMap = settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);

    return {
      clinicName: settingsMap['clinic_name'] || 'کلینیک دکتر ناصح یوسفی',
      specialty: settingsMap['specialty'] || 'متخصص طب فیزیکی، توانبخشی و الکترودیاگنوز',
      academicTitle: settingsMap['academic_title'] || 'عضو هیئت علمی دانشگاه علوم پزشکی ایران',
      medicalCouncilCode: settingsMap['medical_council_code'] || 'IR-MC 132488',
      phones: {
        landline: settingsMap['phone_landline'] || '021-66020308',
        mobile: settingsMap['phone_mobile'] || '09120000000',
        formattedLandline: '۰۲۱-۶۶۰۲۰۳۰۸',
        formattedMobile: '۰۹۱۲ ۰۰۰ ۰۰۰۰',
      },
      address: {
        city: 'تهران',
        fullAddress:
          settingsMap['address'] ||
          'تهران، خیابان آزادی، روبروی ایستگاه مترو شادمان، ساختمان پزشکان فجر، طبقه ۳',
        metroAccess: 'دسترسی مستقیم و پیاده: دقیقاً ۳۰ ثانیه از خروجی مترو شادمان (خط ۲ و ۴)',
        brtAccess: 'خط ۱ بی‌آرتی (تهرانپارس - میدان آزادی)، ایستگاه بهبودی / شادمان',
        parking: 'پارکینگ عمومی طبقاتی آزادی و پارکینگ‌های خیابان بهبودی',
      },
      workingHours: {
        shifts: [
          {
            days: 'شنبه، دوشنبه و چهارشنبه',
            hours: '12:00 – 19:00',
            faHours: '۱۲:۰۰ الی ۱۹:۰۰',
          },
          {
            days: 'یکشنبه، سه‌شنبه و پنجشنبه',
            hours: '11:00 – 15:00',
            faHours: '۱۱:۰۰ الی ۱۵:۰۰',
          },
          {
            days: 'جمعه‌ها و روزهای تعطیل رسمی',
            hours: 'تعطیل',
            faHours: 'کلینیک تعطیل است',
          },
        ],
        note: 'پذیرش مراجعین با تعیین نوبت و پرونده الکترونیک از قبل امکان‌پذیر است.',
      },
      social: {
        whatsapp: 'https://wa.me/989120000000',
        googleMaps: 'https://maps.google.com/?q=Tehran+Shadman+Metro',
        neshan: 'https://nshn.ir',
        balad: 'https://balad.ir',
      },
    };
  }

  static async updateSetting(input: UpdateClinicSettingInput) {
    return prisma.clinicSetting.upsert({
      where: { key: input.key },
      update: {
        value: input.value,
        description: input.description,
      },
      create: {
        key: input.key,
        value: input.value,
        description: input.description,
      },
    });
  }
}
