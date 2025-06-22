import React from 'react'

import mobileImg from '../../assets/shared/mobile/image-best-gear.jpg'
import tabletImg from '../../assets/shared/tablet/image-best-gear.jpg'
import desktopImg from '../../assets/shared/desktop/image-best-gear.jpg'

export default function BestGear() {
  return (
    <section className='section-padding flex flex-col items-center text-center gap-10 
        my-[7.5em]                                        
        desktop:flex-row-reverse desktop:text-left 
        desktop:gap-[7.8125em] desktop:my-[12.5em]   
      '>
      
    
      <picture className='desktop:w-1/2'>
        <source src={desktopImg} media='(min-width: 769px)' />
        <source src={tabletImg} media='(min-width: 376px)' />
        <img
          className='rounded-lg w-full h-full object-cover'
          alt='A person wearing headphones and enjoying music.'
          src={mobileImg}
        />
      </picture>

       
      <div className='flex flex-col items-center gap-8 tablet:max-w-[573px] desktop:w-1/2 desktop:max-w-[445px] desktop:items-start'>
        <h2 className='text-h2-mobile tablet:text-h2-tablet font-bolder tracking-wide-sm leading-[44px] uppercase'>
          Bringing you the <span className='text-accent'>best</span> audio gear
        </h2>
        <p className= 'opacity-50'>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}
