import React, { useEffect } from 'react'

export default function Modal({ className, open, close, children, overlayClassName }) {
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      
      document.body.style.width = '100%' 
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'auto'
    }
  }, [open]) 

  if (!open) return null

  return (
    <>
      <div
        role='button'
        tabIndex={0}
        className={`fixed inset-0 z-40 overlay-gradient ${overlayClassName || ''}`}// either use a simple-overlay or a  overlay-gradient
        onClick={close}
      />
      

      <div className={`fixed bg-light z-50 overflow-y-auto no-scrollbar ${className}`}>
        {children}
      </div>
    </>
  )
}