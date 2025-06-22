import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../cartContext'

import orderConfirmationIcon from '../../assets/checkout/icon-order-confirmation.svg' 

export default function ProductOverview({ productData, productName }) {
    const { cartArr, addToCart } = useContext(CartContext);
  
    const [count, setCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
  
    useEffect(() => {
      if (isAdded) {
        const timer = setTimeout(() => {
          setIsAdded(false);
        }, 2500);
        return () => clearTimeout(timer);
      }
    }, [isAdded]);
  
    
    if (!productData) {
      return null;
    }
  
    const { slug, image, isNew, description, price, category } = productData;

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(slug, count);
      setIsAdded(true);
    }
  };

 return (
    <>
      <section className="section-padding flex flex-col gap-8 min-[600px]:flex-row min-[600px]:items-center min-[600px]:gap-[10%] desktop:gap-[125px]">
        <picture className="min-[600px]:w-[40%] desktop:w-auto">
          <source srcSet={image.desktop} media='(min-width: 769px)' />
          <source srcSet={image.tablet} media='(min-width: 376px)' />
          <img className='rounded-lg w-full desktop:max-w-[540px]' alt={`A picture of ${productData.name}`} src={image.mobile} />
        </picture>

        <div className="flex flex-col gap-6 min-[600px]:w-[50%] desktop:w-auto desktop:max-w-[445px] desktop:justify-center">
          {isNew && <p className='overline-text text-accent'>NEW PRODUCT</p>}

          <div className='flex flex-col gap-2'>
            <h2 className='h2'>{productName}</h2>
            {category && <span className='h2 -mt-2 block'>{category.toUpperCase()}</span>}
          </div>

          <p className='text-body opacity-50'>{description}</p>
          <p className="text-h6 font-bold tracking-wider">${price.toLocaleString()}</p>

          <div className='flex items-center gap-4 mt-2'>
            <div className='flex items-center bg-grey'>
              <button className='flex items-center justify-center w-10 h-12 text-dark/50 hover:text-accent font-bold transition-colors' onClick={decrement}>-</button>
              <p className='flex items-center justify-center w-10 h-12 font-bold text-subtitle'>{count}</p>
              <button className='flex items-center justify-center w-10 h-12 text-dark/50 hover:text-accent font-bold transition-colors' onClick={increment}>+</button>
            </div>
            <button className='btn-accent mt-0 w-fit bg-accent text-light py-[15px] px-[31px] uppercase text-subtitle font-bold tracking-[1px] hover:bg-lighter-accent transition-colors' onClick={handleAddToCart}>add to cart</button>
          </div>
        </div>
      </section>

      {isAdded && (
        <div className="fixed inset-0 z-50 flex justify-center items-start pt-8 bg-black/10" aria-live="polite">
          <div className="bg-white rounded-lg shadow-2xl p-6 flex items-center gap-4 max-w-sm mx-4">
            <img src={orderConfirmationIcon} alt='' className='w-6 h-6' />
            <p className="text-body font-normal opacity-100">
              <strong className="font-bold">{count} item(s)</strong> has been added. You now have <strong className="font-bold">{cartArr.length}</strong> total items in your cart.
            </p>
          </div>
        </div>
      )}
    </>
  );
}