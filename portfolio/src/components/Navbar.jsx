import React from 'react'
import logo from '../../public/portfolio-logo.png'

export default function Navbar() {
  
  return (
    <div className='flex justify-between lg:px-48 lg:py-8 items-center'>
      <img src={logo} alt='logo' className='drop-shadow-2xl h-10'/>
      <button className='bg-[#214062] text-[#F0EAE2] lg:px-12 lg:py-2 rounded-full text-xl shadow-2xl hover:scale-102 duration-500 hover:bg-[#3d6896]'>Let's Talk</button>
    </div>
  )
}

