import { z } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  contactPhone: z.string().regex(/^\+?[0-9]{10,14}$/, 'Invalid phone number'),
  title: z.string().optional(),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email'),
  country: z.string().min(1, 'Country is required'),
  language: z.string().min(1, 'Language is required'),
  status: z.boolean().optional()
});