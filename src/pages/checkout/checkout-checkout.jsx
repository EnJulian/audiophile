// Checkout.jsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from './checkoutSchema'; // adjust the path as needed
import Billing from './billing';
import Shipping from './shipping';
import Payment from './payment';
import Summary from './summary';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const methods = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      paymentMethod: 'e-money',
      eMoneyNumber: '',
      eMoneyPin: ''
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Validated Data:', data);
    navigate('/success');
  };

  return (
    <div className="bg-grey py-8">
      <section className="section-padding">
        <button 
          onClick={() => navigate(-1)} 
          className="text-dark/50 font-bold hover:text-accent transition-colors mb-6"
        >
          Go Back
        </button>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row md:gap-8 md:items-start"
            noValidate
          >
            <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12 md:flex-1">
              <h2 className="h3 mb-8 uppercase">Checkout</h2>
              <div className="space-y-12">
                <Billing />
                <Shipping />
                <Payment />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8 mt-8 md:mt-0 md:w-[350px] h-fit md:sticky md:top-8">
              <Summary />
            </div>
          </form>
        </FormProvider>
      </section>
    </div>
  );
}
