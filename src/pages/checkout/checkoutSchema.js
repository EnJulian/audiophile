// src/pages/checkout/checkoutSchema.js

import { z } from 'zod';

export const checkoutSchema = z.object({
  // Billing Fields
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Wrong email format' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),

  // Shipping Fields
  address: z.string().min(1, { message: 'Address is required' }),
  zip: z.string().min(1, { message: 'ZIP code is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  country: z.string().min(1, { message: 'Country is required' }),

  // Payment Fields
  paymentMethod: z.enum(['e-money', 'cash'], { message: 'Please select a payment method' }),
  
  // Conditional e-Money fields
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine(data => {
  // If payment method is e-money, then the e-money fields are required.
  if (data.paymentMethod === 'e-money') {
    return !!data.eMoneyNumber && data.eMoneyNumber.length > 0 && !!data.eMoneyPin && data.eMoneyPin.length > 0;
  }
  return true;
}, {
  // Custom error message if the refinement fails
  message: 'e-Money details are required',
  // You can specify which fields the error applies to if you want
  // path: ['eMoneyNumber', 'eMoneyPin'], 
});