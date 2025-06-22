import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../modal/index'
import { CartContext } from '../../cartContext/index'

import cartData from '../../data/cart'
import CartProducts from './cart-products'
import totalPrice from '../../utils/total-pricing'

export default function CartModal({ closeCart, isCartOpen }) {
  const { cartArr, removeCartItems } = useContext(CartContext)

  return (
    
    
    <Modal
      open={isCartOpen}
      close={closeCart}
      className="
        top-[117px] left-1/2 -translate-x-1/2 
        w-full max-w-[327px] max-h-[70%] rounded-lg
        min-[580px]:max-w-[377px]
        min-[710px]:left-auto min-[710px]:-translate-x-0 min-[710px]:right-[5.2%]
        desktop:right-[11.45%]
      "
    >
      
      <div className='flex flex-col h-full p-7 tablet:p-8'>
         
        <div className='flex items-center justify-between'>
          <p className='text-lg font-bolder uppercase tracking-wide-sm'>
            Cart ({cartData(cartArr).length})
          </p>
          <button
            className='text-dark/50 underline hover:text-accent transition-colors'
            onClick={() => removeCartItems()}
          >
            Remove all
          </button>
        </div>

         
        <div className="flex-grow my-8">
            <CartProducts closeCart={closeCart} />
        </div>

         
        <div className='flex items-center justify-between uppercase'>
          <p className='opacity-50'>TOTAL</p>
          <p className='text-lg font-bolder'>
            $ {totalPrice(cartArr).toLocaleString()}
          </p>
        </div>
        
        <Link
          to={cartArr.length > 0 ? '/checkout' : '#'}
          className='btn-accent w-full inline-block bg-accent text-light py-[15px] px-[31px] uppercase text-center mt-6 aria-disabled:bg-gray-400 aria-disabled:cursor-not-allowed hover:bg-lighter-accent transition-colors'
          onClick={(e) => {
            if (cartArr.length > 0) {
              closeCart();
            } else {
              e.preventDefault(); 
            }
          }}
          aria-disabled={cartArr.length === 0}
          tabIndex={cartArr.length === 0 ? -1 : undefined}
        >
          checkout
        </Link>
      </div>
    </Modal>
  )
}