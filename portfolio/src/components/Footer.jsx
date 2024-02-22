import React from 'react'
import logo from '../../public/portfolio-logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col gap-3 justify-center lg:px-48 lg:py-8 items-center'>
      <img src={logo} alt='logo' className='drop-shadow-2xl h-8'/>
      <span className='text-black/70'>&copy; {currentYear} designed and developed by Ross Matthew Santos.</span>
    </div>
  )
}
