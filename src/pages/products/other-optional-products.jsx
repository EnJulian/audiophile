import React from 'react'
import { Link } from 'react-router-dom'

export default function OtherProducts({ productData }) {
  
  if (!productData || !productData.others || productData.others.length === 0) {
    return null;
  }

  return (
    
    
    
    <section 
      className="
        section-padding grid grid-cols-1 gap-y-14 text-center mt-28 
        min-[600px]:grid-cols-3 min-[600px]:gap-x-3 min-[600px]:gap-y-14
        desktop:gap-x-8
      "
    >
      <h3 className='h3 min-[600px]:col-span-3'>
        you may also like
      </h3>
      {productData.others.map(({ slug, name, image }) => {
        return (
          
          <div key={slug} className="flex flex-col items-center gap-8">
            <picture>
              <source
                srcSet={image.desktop} media='(min-width: 769px)' 
              />
              <source
                srcSet={image.tablet} media='(min-width: 376px)' 
              />
               
              <img 
                className='rounded-lg w-full' 
                alt={"A picture of " + name}
                src={image.mobile} 
              />
            </picture>

            <h5 className='h5'>
              {name}
            </h5>

            <Link
              to={`/${slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className='btn-accent mt-10 w-fit inline-block bg-accent text-light py-[15px] px-[31px] uppercase text-subtitle font-bold tracking-[1px] hover:bg-lighter-accent transition-colors'
            >
              see product
            </Link>
          </div>
        )
      })}
    </section>
  )
}