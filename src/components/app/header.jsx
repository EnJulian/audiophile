import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../cartContext'
import { removeFocus } from '../../utils/not-focusing'
import CartModal from '../cart/cart-modal'
import Navbar from '../navbar/index'
// import logo from '/src/assets/shared/desktop/logo.svg'
// import cartIcon from '/src/assets/shared/desktop/icon-cart.svg'

export default function Header() {
  const { cartArr } = useContext(CartContext)

  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const openNav = () => setIsNavOpen(true)
  const closeNav = () => setIsNavOpen(false)
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (width >= 769) setIsNavOpen(false)
  }, [width])

  const cartCount = cartArr.length

  const counterClass = cartCount > 0
    ? 'absolute -top-2 -right-2 bg-accent text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'
    : 'hidden'

  return (
    <>
      <header className="bg-black py-6 px-6 tablet:px-10 desktop:px-40 w-full z-50">
        <div className="flex items-center justify-between relative">
          {width < 769 && (
            <button onClick={()=>openNav(true)} className="flex flex-col gap-[5px] focus:outline-none">
              <span className="block w-[16px] h-[3px] bg-white" />
              <span className="block w-[16px] h-[3px] bg-white" />
              <span className="block w-[16px] h-[3px] bg-white" />
            </button>
          )}

          <Link to='/' onClick={removeFocus}>
            <img
              className="w-[143px] h-auto"
              src={'/assets/shared/desktop/logo.svg'}
              alt='audiophile logo'
            />
          </Link>

          <Navbar isNavOpen={isNavOpen} closeNav={closeNav} width={width} />

          <button
            className="relative focus:outline-none"
            onClick={(e) => {
              removeFocus(e)
              window.scrollTo(0, 0)
              openCart()
            }}
          >
            <div className="relative">
              {cartCount > 0 && (
                <p className={counterClass}>{cartCount}</p>
              )}
              <img
                src={'/assets/shared/desktop/icon-cart.svg'}
                alt='cart icon'
                className="w-5 h-5"
              />
            </div>
          </button>
        </div>
        <hr className="mt-6 border-white/10" />
      </header>

      {isCartOpen && <CartModal closeCart={closeCart} isCartOpen={isCartOpen} />}
    </>
  )
}
