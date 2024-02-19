import React from 'react'
import logo from '../assets/portfolio-logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-between lg:px-48 lg:py-8 items-center'>
      <img src={logo} alt='logo'/>
      <button className='bg-[#2E5A88] text-[#F0EAE2] lg:px-12 lg:py-2 rounded-full text-xl shadow-2xl'>Let's Talk</button>
    </div>
  )
}

