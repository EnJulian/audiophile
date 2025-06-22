import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Shipping() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorClass = (field) =>
    errors[field] ? 'border-[#D87D4A] ring-[#D87D4A]' : 'border-gray-300 ring-accent';

  const labelClass = (field) => (errors[field] ? 'text-[#D87D4A]' : 'text-subtitle');

  return (
    <div>
      <h5 className='subtitle text-accent mb-4 uppercase'>Shipping Info</h5>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        {/* Address */}
        <div className="lg:col-span-2">
          <label htmlFor='address' className={`font-bold text-xs mb-2 block ${labelClass('address')}`}>
            Your Address
          </label>
          <input
            id='address'
            placeholder='Kɔtɔ Akyi Yɛ Mmrɛ, Accra'
            {...register('address')}
            className={`w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${errorClass('address')}`}
          />
          {errors.address && <p className="text-[#D87D4A] text-xs mt-1">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor='zip' className={`font-bold text-xs mb-2 block ${labelClass('zip')}`}>
            ZIP Code
          </label>
          <input
            id='zip'
            type='text'
            placeholder='41911'
            {...register('zip')}
            className={`w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${errorClass('zip')}`}
          />
          {errors.zip && <p className="text-[#D87D4A] text-xs mt-1">{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor='city' className={`font-bold text-xs mb-2 block ${labelClass('city')}`}>
            City
          </label>
          <input
            id='city'
            placeholder='Koforidua'
            {...register('city')}
            className={`w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${errorClass('city')}`}
          />
          {errors.city && <p className="text-[#D87D4A] text-xs mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor='country' className={`font-bold text-xs mb-2 block ${labelClass('country')}`}>
            Country
          </label>
          <input
            id='country'
            placeholder='Ghana'
            {...register('country')}
            className={`w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${errorClass('country')}`}
          />
          {errors.country && <p className="text-[#D87D4A] text-xs mt-1">{errors.country.message}</p>}
        </div>
      </div>
    </div>
  );
}
