import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export default function Payment() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();


  const paymentMethod = watch('paymentMethod');

  const errorClass = (field) =>
    errors[field] ? 'border-[#D87D4A] ring-[#D87D4A]' : 'border-gray-300 ring-accent';

  const labelClass = (field) => (errors[field] ? 'text-[#D87D4A]' : 'text-subtitle');

  return (
    <div>
      <h5 className='subtitle text-accent mb-4 uppercase'>Payment Details</h5>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
        <label className="font-bold text-xs tablet:col-span-1 subtitle">Payment Method</label>

        <label htmlFor="e-money" className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer font-bold text-sm has-[:checked]:border-accent has-[:checked]:ring-1 has-[:checked]:ring-accent hover:border-accent transition-all subtitle">
          <input
            id="e-money"
            type="radio"
            value="e-money"
            {...register('paymentMethod')}
            className="appearance-none w-5 h-5 border rounded-full grid place-items-center checked:border-accent before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0 checked:before:scale-100 before:bg-accent before:transition-transform"
          />
          e-Money
        </label>

        <label htmlFor="cash" className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer font-bold text-sm has-[:checked]:border-accent has-[:checked]:ring-1 has-[:checked]:ring-accent hover:border-accent transition-all subtitle tablet:col-start-2">
          <input
            id="cash"
            type="radio"
            value="cash"
            {...register('paymentMethod')}
            className="appearance-none w-5 h-5 border rounded-full grid place-items-center checked:border-accent before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0 checked:before:scale-100 before:bg-accent before:transition-transform"/>
          Cash on Delivery
        </label>
      </div>

      <div className="mt-8">
        {paymentMethod === 'e-money' ? (
          <div className="flex flex-col tablet:flex-row gap-4 subtitle">
            {/* e-Money Number */}
            <div className="flex-1">
              <label htmlFor="eMoneyNumber" className={`font-bold text-xs mb-2 block ${labelClass('eMoneyNumber')}`}>
                e-Money Number
              </label>
              <input
                id="eMoneyNumber"
                type="text"
                placeholder="238521993"
                {...register('eMoneyNumber')}
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${errorClass('eMoneyNumber')}`}
              />
              {errors.eMoneyNumber && <p className="text-[#D87D4A] text-xs mt-1">{errors.eMoneyNumber.message}</p>}
            </div>

            {/* e-Money PIN */}
            <div className="flex-1">
              <label htmlFor="eMoneyPin" className={`font-bold text-xs mb-2 block ${labelClass('eMoneyPin')}`}>
                e-Money PIN
              </label>
              <input
                id="eMoneyPin"
                type="password"
                placeholder="6891"
                {...register('eMoneyPin')}
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-1 ${errorClass('eMoneyPin')}`}
              />
              {errors.eMoneyPin && <p className="text-[#D87D4A] text-xs mt-1">{errors.eMoneyPin.message}</p>}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-8 mt-4">
            <img src="assets/checkout/icon-cash-on-delivery.svg" alt="" className="w-12 h-12" />
            <p className="text-dark/50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
