import React from 'react'
import { services } from '../constants'
import pin from '../assets/pin.png'

export default function Services() {
  return (
    <div className='flex flex-col gap-16 justify-center h-auto py-20 mb-20 bg-[#214062] items-center text-[#F0EAE2] font-besley w-full mt-32'>
      <div className='flex flex-col justify-center items-center uppercase'>
        <span className='text-lg mb-1 text-[#a3cdf3]'>My offered</span>
        <h1 className='text-5xl'>Services</h1>
      </div>
      <div className='relative flex gap-[80px] w-[80%] justify-center'>
        {services.map((service) => (
          <div key={service.id} className='flex flex-col bg-[#f0eae2] text-[#2E5A88] w-full h-[300px] rounded-xl justify-center'>
            <span className=''>1</span>
            <div className='flex justify-center items-center'>
              <span className=' text-2xl mt-3'>{service.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
