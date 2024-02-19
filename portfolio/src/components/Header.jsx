import React from 'react'
import img from '../assets/header-img.png'

export default function Header() {
  return (
    <div className='flex flex-col items-center text-[#2E5A88] font-besley'>
        <span className='lg:text-5xl'>HI, IM ROSS MATTHEW SANTOS</span>
        <span className='lg:text-8xl lg:font-semibold mb-16'>FRONT-END DEVELOPER</span>
        <div>
            <div className='relative px-8 bg-[#2E5A88] w-[280px] rounded-2xl h-[420px] shadow-2xl'>
                <img src={img} className='absolute -top-[60px] right-2 h-[480px]'/>
            </div>
        </div>
    </div>
  )
}

