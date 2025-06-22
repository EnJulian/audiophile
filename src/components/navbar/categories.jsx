import React from 'react'
import { Link } from 'react-router-dom'
import categoriesData from '../../data/categories'
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

const categoryImageMap = {
    headphones: headphonesImg,
    speakers: speakersImg,
    earphones: earphonesImg
  }

export default function CategoriesList({ closeNav }) {
    return (
      <section className='section-padding flex flex-col tablet:flex-row tablet:justify-between gap-[4.25em] tablet:gap-[0.625em] desktop:gap-[1.875em] mt-[5.75em] tablet:mt-[9.25em] desktop:mt-[12.5em]'>
        {categoriesData.map(name => (
          <Link
            key={name}
            to={`/${name}`}
            className='group relative flex flex-col items-center text-center bg-grey rounded-lg pt-[5.5em] pb-[1.375em] gap-[1.0625em] tablet:flex-1 desktop:pt-[7.25em] desktop:pb-[1.875em]'
            onClick={() => {
              window.scrollTo(0, 0)
              if (closeNav) closeNav()
            }}
          >
            <img
              alt={`A png of a ${name}`}
              src={categoryImageMap[name]}
              className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[35%] w-auto max-w-[150px] desktop:max-w-[180px]'
            />
  
            <p className='text-body font-bolder text-dark tracking-[1.07px] opacity-100'>
              {name}
            </p>
  
            <div className='flex items-center justify-center gap-[10px]'>
              <p className='text-subtitle uppercase text-dark opacity-50 group-hover:text-accent group-hover:opacity-100 transition-colors'>
                shop
              </p>
              <div className='w-[6.5px] h-[6.5px] border-t-2 border-r-2 border-accent rotate-45'></div>
            </div>
          </Link>
        ))}
      </section>
    )
  }
  