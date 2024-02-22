import React from 'react'
import keyboard from '../assets/keyboard.png'
import proj1 from '../assets/project1.png'
import bag from '../assets/bag.png'
import notebook from '../assets/notebook.png'
import pen from '../assets/pen.png'
import { TbSquareRoundedArrowRight } from "react-icons/tb";

export default function Menu() {
  return (
    <div className='flex justify-center py-16 px-48 my-16 text-[#214062] font-besley'>
        <div className='grid grid-cols-3 gap-8 w-full h-[700px]'>
            <div className='flex flex-col col-span-1 row-span-4 shadow-xl bg-[#F0EAE2] border border-[#2E5A88]/30 rounded-3xl hover:scale-102 duration-200 cursor-pointer hover:shadow-2xl'>
                <img src={proj1} alt='project-1'/>
            </div>
            <div className='flex flex-col relative col-span-2 row-span-2 shadow-xl bg-[#f4f1ec] border border-[#2E5A88]/30 rounded-3xl hover:scale-102 duration-200 cursor-pointer hover:shadow-2xl'>
                <span className='text-center pt-5 font-semibold text-4xl uppercase'>Work Experience</span>
                <img src={keyboard} alt='keyboard' className='absolute right-0 bottom-0 h-60'/>
            </div>
            <div className='flex flex-col relative col-span-1 row-span-2 shadow-xl bg-[#f4f1ec] border border-[#2E5A88]/30 rounded-3xl hover:scale-102 duration-200 cursor-pointer hover:shadow-2xl'>
                <span className='text-center pt-5 font-semibold text-4xl uppercase'>Education</span>
                <img src={bag} alt='keyboard' className='absolute left-0 bottom-0 h-72'/>
                <img src={pen} alt='keyboard' className='absolute right-0 top-24'/>
                <img src={notebook} alt='keyboard' className='absolute right-0 bottom-0 h-60 w-48'/>
            </div>
            <div className='flex flex-col relative col-span-1 row-span-2 shadow-xl bg-[#f4f1ec] border border-[#2E5A88]/30 rounded-3xl hover:scale-102 duration-200 cursor-pointer hover:shadow-2xl'>
                <span className='text-start px-8 pt-5 font-semibold text-4xl uppercase'>Get to know more about me</span>
                <TbSquareRoundedArrowRight className='absolute top-[210px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-36'/>
            </div>
        </div>
    </div>
  )
}
