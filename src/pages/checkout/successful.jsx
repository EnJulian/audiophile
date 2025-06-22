import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/index'
import { CartContext } from '../../cartContext/index'
import cartData from '../../data/cart'
import countCartItems from '../../utils/count-items'
import totalPrice from '../../utils/total-pricing'
import Checkout from './checkout-checkout'

export default function Success() {
  const { cartArr, removeCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  
  
  useEffect(() => {
    if (cartArr.length === 0) {
      navigate('/');
    }
  }, [cartArr, navigate]);

  
  if (cartArr.length === 0) {
    return null;
  }
  
  
  const firstItem = cartData(cartArr)[0];
  const grandTotal = totalPrice(cartArr) + 50; 

  return (
    <>
      <Modal
        open={true}
        close={false} 
        overlayClassName="bg-black/40"
        className="
          top-28 left-6 right-6 max-h-[70%] rounded-lg 
          min-[580px]:left-1/4 min-[580px]:right-1/4
          desktop:left-1/3 desktop:right-1/3 desktop:w-auto desktop:max-w-lg
        "
      >
         
        <div className='p-8 flex flex-col gap-6'>
          <img src='assets/checkout/icon-order-confirmation.svg' alt='Order confirmed' className='w-16 h-16' />

          <h3 className='h3 leading-tight'>
            THANK YOU <br /> FOR YOUR ORDER
          </h3>

          <p className="text-dark/50">You will receive an email confirmation shortly.</p>

          <div className="rounded-lg overflow-hidden min-[580px]:flex">
            
             
            <div className="bg-grey p-6 min-[580px]:w-[55%] min-[580px]:flex-grow">
              <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                <img src={`../src/assets/cart/image-${firstItem.slug}.jpg`} alt={firstItem.name} className="w-12 h-12 rounded-md" />
                <div className="flex flex-col">
                  <p className="font-bold">{firstItem.name}</p>
                  <p className="font-bold text-sm text-dark/50">$ {firstItem.price.toLocaleString()}</p>
                </div>
                <p className="font-bold text-dark/50 justify-self-end">x{countCartItems(cartArr, firstItem.slug)}</p>
              </div>

               
              {cartArr.length > 1 && (
                <div className="text-center border-t border-dark/20 pt-3 mt-3">
                  <p className="text-xs font-bold text-dark/50">and {cartArr.length - 1} other item(s)</p>
                </div>
              )}
            </div>

            <div className="bg-dark text-white p-6 flex flex-col justify-center min-[580px]:w-[45%]">
              <p className="uppercase text-white/50 text-sm">Grand Total</p>
              <p className="text-lg font-bold mt-1">$ {grandTotal.toLocaleString()}</p>
            </div>
          </div>

          <Link 
            to={'/'} 
            className='btn-accent w-full text-center w-fit inline-block bg-accent text-light py-[15px] px-[31px] uppercase text-subtitle' 
            onClick={removeCartItems}
          >
            back to home
          </Link>
        </div>
      </Modal>
      <Checkout />
    </>
  )
}