import React from 'react'
import { Link } from 'react-router-dom'
import BestAudioGear from '../../components/best-audio-gear'
import CategoriesList from '../../components/navbar/categories'
import Products from './products'

export default function Home() {
  return (
    <>
      <div>
        <div 
          className="
            bg-lighter-dark bg-no-repeat bg-cover bg-blend-difference
            bg-[url('/src/assets/home/mobile/image-header.jpg')] bg-[center_top_-90px]
            tablet:bg-[url('/src/assets/home/tablet/image-header.jpg')] tablet:bg-center
            desktop:bg-[url('/src/assets/home/desktop/image-hero.jpg')]
          "
        >
          <section 
            className="
                flex flex-col items-center text-center text-light
              py-[6.75em] max-w-md mx-auto
              tablet:py-[7.875em] tablet:max-w-md
              desktop:mx-0 desktop:items-start desktop:text-left desktop:py-[8em] desktop:max-w-lg 
              desktop:w-full desktop:pl-[165px]

            "
          >
             
            <p className='text-overline opacity-50 tracking-[10px]'>
              NEW PRODUCT
            </p>
            
             
            <h1 className='mt-6 text-h1-mobile leading-[40px] uppercase font-bold tracking-[2px] tablet:text-h1-tablet tablet:leading-[58px]'>
              XX99 Mark II<br/>Headphones
            </h1>
            
             
            <p className='mt-6 opacity-50 tablet:max-w-[349px] text-sm' >
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            
             
            <Link
              to='/xx99-mark-two-headphones'
              onClick={() => window.scrollTo(0, 0)}
              className="mt-10 w-fit inline-block bg-accent text-light py-[15px] px-[31px] uppercase text-subtitle font-bold tracking-[1px] hover:bg-lighter-accent transition-colors"
            >
              see product
            </Link>
          </section>
        </div>
        
        <CategoriesList closeNav={() => {}} /> 
        <Products />
      </div>

      <BestAudioGear />
    </>
  )
}