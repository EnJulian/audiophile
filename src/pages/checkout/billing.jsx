import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Billing() {
  const { register, formState: { errors } } = useFormContext();

  const inputClass = (field) =>
    `w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${
      errors[field] ? 'border-[#D87D4A] focus:ring-[#D87D4A]' : 'border-gray-300 focus:ring-accent'
    }`;

  const labelClass = (field) =>
    `font-bold text-xs mb-2 block ${
      errors[field] ? 'text-[#D87D4A]' : 'text-subtitle'
    }`;

  return (
    <div>
      <h5 className="text-[#D87D4A] text-subtitle font-bold uppercase tracking-[0.93px] mb-4">
        Billing details
      </h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass('name')}>Name</label>
          <input
            id="name"
            {...register('name')}
            placeholder="Akosua Makala"
            className={inputClass('name')}
          />
          {errors.name && <p className="text-[#D87D4A] text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass('email')}>Email Address</label>
          <input
            id="email"
            {...register('email')}
            type="email"
            placeholder="nkosuaWura@simpmail.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="text-[#D87D4A] text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phoneNumber" className={labelClass('phoneNumber')}>Phone Number</label>
          <input
            id="phoneNumber"
            {...register('phoneNumber')}
            type="tel"
            placeholder="+233 922 429 4190"
            className={inputClass('phoneNumber')}
          />
          {errors.phoneNumber && <p className="text-[#D87D4A] text-xs mt-1">{errors.phoneNumber.message}</p>}
        </div>
      </div>
    </div>
  );
}
