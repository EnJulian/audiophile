import React from 'react'




const Button = ({children,onClick}) => {
  return (
    <button onClick={onClick} className='px-[31px] py-[15px] bg-primary_2 hover:bg-primary_1 uppercase text-white w-fit' >
        {children}
    </button>
  )
}

export default Button