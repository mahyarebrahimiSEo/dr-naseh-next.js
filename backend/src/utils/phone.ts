/**
 * Normalizes Persian and Arabic numbers to standard English digits
 */
export function normalizeDigits(str: string): string {
  if (!str) return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  let result = str;
  for (let i = 0; i < 10; i++) {
    result = result.replace(new RegExp(persianDigits[i], 'g'), i.toString());
    result = result.replace(new RegExp(arabicDigits[i], 'g'), i.toString());
  }
  return result;
}

/**
 * Validates and normalizes Iranian mobile numbers to 09XXXXXXXXX format
 */
export function normalizeIranianPhone(rawPhone: string): string | null {
  if (!rawPhone) return null;

  // Clean characters, spaces, dashes
  let cleaned = normalizeDigits(rawPhone).replace(/[^\d+]/g, '').trim();

  // Handle +98 or 0098 prefix
  if (cleaned.startsWith('+98')) {
    cleaned = '0' + cleaned.substring(3);
  } else if (cleaned.startsWith('0098')) {
    cleaned = '0' + cleaned.substring(4);
  } else if (cleaned.startsWith('98')) {
    cleaned = '0' + cleaned.substring(2);
  } else if (cleaned.startsWith('9') && cleaned.length === 10) {
    cleaned = '0' + cleaned;
  }

  // Check valid Iranian mobile format: 09 + 9 digits = 11 digits
  const iranianMobileRegex = /^09[0-9]{9}$/;
  if (iranianMobileRegex.test(cleaned)) {
    return cleaned;
  }

  // Return standard landline if starting with 0
  if (/^0[0-9]{9,10}$/.test(cleaned)) {
    return cleaned;
  }

  return null;
}
