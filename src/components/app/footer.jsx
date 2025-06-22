import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/shared/desktop/logo.svg'
import { Categories } from '../../utils/categories'
import { removeFocus, toTopSmooth } from '../../utils/not-focusing'

export default function Footer() {
  return (
    <footer className='mt-[160px]'>
      <div className='bg-lighter-dark text-center text-light pt-[3.25em] pb-[2.375em] 
                      min-[470px]:text-left min-[470px]:pt-[3.75em] min-[470px]:pb-[2.875em]
                      desktop:pt-[4.6875em] desktop:pb-12'>
        
        <section className='section-padding flex flex-col items-center gap-12 
                            min-[470px]:grid min-[470px]:grid-cols-2 min-[470px]:items-start min-[470px]:row-gap-8
                            desktop:grid-cols-[auto_1fr] desktop:grid-rows-[auto_auto_auto] desktop:row-gap-9'>

          <Link
            to={'/'}
            onClick={toTopSmooth}
            className='relative footer-logo-bar desktop:col-start-1'
          >
            <img src={logo} alt='audiophile logo' />
          </Link>

          <nav className='flex flex-col gap-4 text-center 
                          min-[470px]:flex-row min-[470px]:col-span-2 min-[470px]:text-left
                          desktop:col-start-2 desktop:row-start-1 desktop:justify-self-end'>
            <Link onClick={toTopSmooth} className='py-2 px-4 hover:text-accent transition-colors uppercase text-subtitle tracking-wide-md' to="/">Home</Link>
            {Categories('py-2 px-4 hover:text-accent transition-colors uppercase text-subtitle tracking-wide-md')}
          </nav>

          <p className='min-[470px]:col-span-2 desktop:max-w-[540px] desktop:row-start-2 opacity-50'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>

          <div className='w-full flex flex-col items-center gap-12 
                          min-[470px]:flex-row min-[470px]:justify-between min-[470px]:col-span-2
                          desktop:col-start-1 desktop:row-start-3 desktop:items-end'>
            <p className='font-bolder opacity-50'>
              Copyright 2021. All Rights Reserved
            </p>

            <ul className='flex items-center gap-4 desktop:self-start desktop:-translate-y-20'>
              <li>
                <a href='https://www.facebook.com' onClick={removeFocus} target="_blank" rel="noopener noreferrer" className='text-light hover:text-accent transition-colors'>
                  <FontAwesomeIcon className='w-6 h-6' icon={faSquareFacebook} />
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com' onClick={removeFocus} target="_blank" rel="noopener noreferrer" className='text-light hover:text-accent transition-colors'>
                  <FontAwesomeIcon className='w-6 h-6' icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com' onClick={removeFocus} target="_blank" rel="noopener noreferrer" className='text-light hover:text-accent transition-colors'>
                  <FontAwesomeIcon className='w-6 h-6' icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  )
}
