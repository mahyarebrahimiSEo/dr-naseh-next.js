/**
 * API Client for Dr. Naseh Yousefi Clinic Backend
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  error?: {
    message: string;
    statusCode: number;
    details?: any;
  };
}

export interface AppointmentPayload {
  fullName: string;
  phoneNumber: string;
  consultationTopic: string;
  shift?: 'morning' | 'afternoon' | 'first_available';
  patientMessage?: string;
}

export interface NewsletterPayload {
  fullName: string;
  contact: string;
}

export const clinicApi = {
  /**
   * Submit online appointment / consultation request
   */
  async submitAppointment(payload: AppointmentPayload): Promise<ApiResponse<any>> {
    const res = await fetch(`${API_BASE}/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  },

  /**
   * Subscribe to clinical newsletter
   */
  async subscribeNewsletter(payload: NewsletterPayload): Promise<ApiResponse<any>> {
    const res = await fetch(`${API_BASE}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  },

  /**
   * Get clinical articles list
   */
  async getArticles(category?: string, page = 1, search?: string): Promise<ApiResponse<any[]>> {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (page) params.append('page', page.toString());
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE}/articles?${params.toString()}`, {
      next: { revalidate: 60 },
    });
    return res.json();
  },

  /**
   * Get single article by slug
   */
  async getArticleBySlug(slug: string): Promise<ApiResponse<any>> {
    const res = await fetch(`${API_BASE}/articles/${slug}`, {
      next: { revalidate: 60 },
    });
    return res.json();
  },

  /**
   * Get clinical services list
   */
  async getServices(category?: string): Promise<ApiResponse<any[]>> {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);

    const res = await fetch(`${API_BASE}/services?${params.toString()}`, {
      next: { revalidate: 300 },
    });
    return res.json();
  },

  /**
   * Get clinic contact and location info
   */
  async getClinicInfo(): Promise<ApiResponse<any>> {
    const res = await fetch(`${API_BASE}/clinic`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  },

  /**
   * Get frequently asked questions
   */
  async getFaqs(category?: string): Promise<ApiResponse<any[]>> {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);

    const res = await fetch(`${API_BASE}/faqs?${params.toString()}`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  },
};
