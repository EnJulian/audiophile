import React from 'react'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import imageCategoryPage from "../../assets/home/mobile/image-header.jpg"; 

const Hero = () => {
  return (
    <section className='pt-[108px] h-[calc(600px-90px)] px-[24px] bg-black relative'>
        <div className=' flex flex-col  items-center relative z-10 text-white'>  
            <p className='text-center overline-text text-[14px]'>NEW PRODUCT</p>
            <h1 className='text-center mt-[16px] font-bold text-[36px]'>XX99 Mark II HEADPHONES</h1>
            <p className='text-center mt-[24px] subtitle-2 opacity-75'> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link to={"/products"} className='mt-[28px]'>
            <Button>
                SEE PRODUCT
            </Button>
            </Link>
        </div>
        <img className='absolute top-0 w-full left-0 h-full object-scale-down opacity-50' src={imageCategoryPage} alt="" />
        
    </section>
  )
}

export default Hero