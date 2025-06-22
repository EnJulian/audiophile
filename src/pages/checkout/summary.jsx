import React, { useContext } from 'react'
import { CartContext } from '../../cartContext/index'
import cartData from '../../data/cart'
import countCartItems from '../../utils/count-items'
import totalPrice from '../../utils/total-pricing'

export default function Summary() {
  const { cartArr } = useContext(CartContext);

  
  const subtotal = totalPrice(cartArr);
  const vat = subtotal * 0.2; 
  const shipping = 50;
  const grandTotal = subtotal + shipping;

  return (
    
    
    <div className="flex flex-col gap-8 w-full">
      <h4 className='h4 uppercase'>summary</h4>

       
      {cartArr.length > 0 && (
        
        <div className='space-y-6'>
          {cartData(cartArr).map(({ slug, name, price }) => (
            
            <div key={slug} className='flex items-center gap-4'>
              <img 
                src={`/assets/cart/image-${slug}.jpg`} 
                alt={name} 
                className='w-16 h-16 rounded-lg' 
              />
              <div className="flex flex-col">
                <h5 className="font-bold">{name}</h5>
                <p className="font-bold text-overline opacity-50">
                  $ {price.toLocaleString()}
                </p>
              </div>
               
              <p className='ml-auto font-bold text-dark/50'>
                x{countCartItems(cartArr, slug)}
              </p>
            </div>
          ))}
        </div>
      )}

       
       
      <div className='space-y-2'>
        <div className='flex justify-between items-center text-overline'>
          <p className='uppercase text-dark/50'>Total</p>
          <p className='h6'>$ {subtotal.toLocaleString()}</p>
        </div>
        <div className='flex justify-between items-center text-overline'>
          <p className='uppercase text-dark/50'>SHIPPING</p>
          <p className='h6'>$ {shipping}</p>
        </div>
        <div className='flex justify-between items-center text-overline'>
          <p className='uppercase text-dark/50'>VAT (INCLUDED)</p>
          <p className='h6'>$ {vat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
        <div className='flex justify-between items-center pt-4 text-overline'>
          <p className='uppercase text-dark/50'>GRAND TOTAL</p>
          <p className='h6 text-accent'>$ {grandTotal.toLocaleString()}</p>
        </div>
      </div>

       
       
      <button
        type="submit" 
        className='btn-accent w-full bg-accent w-fit inline-block text-light py-[15px] px-[31px] uppercase hover:bg-lighter-accent transition-colors'
        disabled={cartArr.length === 0} 
      >
        CONTINUE & PAY
      </button>
    </div>
  )
}