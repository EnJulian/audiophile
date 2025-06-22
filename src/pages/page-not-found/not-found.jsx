import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="flex-grow">
      <header className="bg-black text-white flex items-center justify-center py-16">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest">
          404
        </h1>
      </header>

      <section className="flex flex-col items-center text-center gap-6 my-16 px-6">
        <h3 className="text-2xl font-bold uppercase tracking-wide">Oops!</h3>

        <p className="text-base text-gray-500 max-w-sm">
          We're sorry,<br />The page you were looking for doesn't exist anymore.
        </p>

        <Link 
          to='/' 
          className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300'
        >
          Back To Home
        </Link>
      </section>
    </div>
  )
}
