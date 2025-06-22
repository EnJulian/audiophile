import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../cartContext/index'

import cartData from '../../data/cart'
import countCartItems from '../../utils/count-items'
import { removeFocus } from '../../utils/not-focusing'

export default function CartProducts({ closeCart }) {
  const { cartArr, addItem, removeItem } = useContext(CartContext)

  if (cartArr.length > 0) {
    return (
      <div className='space-y-6'>
        {cartData(cartArr).map(({ slug, name, price }) => (
          <div key={slug} className='grid grid-cols-[auto_1fr_auto] items-center gap-x-4'>
            <img
              src={`assets/cart/image-${slug}.jpg`}
              alt={name}
              className='w-16 h-16 rounded-lg'
            />
            <div className='flex flex-col'>
              <h5 className='font-bold text-body'>{name}</h5>
              <p className='font-bold text-overline opacity-50'>$ {price.toLocaleString()}</p>
            </div>
            <div className='flex items-center bg-grey'>
              <button
                className='flex items-center justify-center w-8 h-8 text-dark/25 font-bold hover:text-accent transition-colors'
                onClick={(e) => {
                  removeFocus(e)
                  removeItem(slug)
                }}
              >
                -
              </button>
              <p className='flex items-center justify-center w-8 h-8 font-bold text-subtitle'>
                {countCartItems(cartArr, slug)}
              </p>
              <button
                className='flex items-center justify-center w-8 h-8 text-dark/25 font-bold hover:text-accent transition-colors'
                onClick={(e) => {
                  removeFocus(e)
                  addItem(slug)
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='text-left py-0'>
      <div className="w-[70%] h-px bg-dark/20 mx-left mb-6" />
      <p className='text-2xl font-bold mb-4 opacity-100'>Your Cart is empty.</p>
      <p className='opacity-50'>
        Continue shopping on the audiophile{' '}
        <Link
          to='/'
          className='text-[#D87D4A] font-bold hover:underline transition-colors'
          onClick={closeCart}
        >
          homepage
        </Link>.
      </p>
    </div>
  )
}
