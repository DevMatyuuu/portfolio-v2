import React, { useEffect }  from 'react'
import img from '../assets/header-img.png'
import reactLogo from '../assets/react-logo.png'
import tailwindLogo from '../assets/tailwind-logo.png'
import nextLogo from '../assets/next-logo.png'
import tsLogo from '../assets/ts-logo.png'
import sassLogo from '../assets/sass-logo.png'
import viteLogo from '../assets/vite-logo.svg'
import MagneticIcon from '../framer/MagneticIcon'
import Animatedtext from '../framer/AnimateText'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='flex flex-col items-center text-[#214062] font-besley py-10 h-auto'>
        <div className='flex z-50 flex-col items-center relative h-full w-full'>
          <div className='flex flex-col items-center justify-center h-full w-full'>
            <Animatedtext className='animChar lg:text-5xl lg:mb-2 drop-shadow-2xl' text={"HI, I'M ROSS MATTHEW SANTOS"} stagger={0.1}/>
            <Animatedtext className='lg:text-8xl lg:font-semibold mb-20 text-center drop-shadow-2xl' text={"FRONT END WEB DEVELOPER"} stagger={0.1}/>
          </div>
        </div>
        <div className='flex items-center gap-10 text-white'>
            <MagneticIcon className='bg-[#214062] h-28 w-28 flex justify-center items-center rounded-full shadow-2xl' data-aos='zoom-in'>
              <img src={sassLogo} className='size-14'/>
            </MagneticIcon>
            <MagneticIcon className='bg-[#214062] h-32 w-32 flex justify-center items-center rounded-full shadow-2xl'>
              <img src={tsLogo} className='size-16'/>
            </MagneticIcon>
            <MagneticIcon className='bg-[#214062] h-40 w-40 flex justify-center items-center rounded-full shadow-2xl'>
              <img src={reactLogo} className='size-24'/>
            </MagneticIcon>
            <div className='-z-50 relative px-8 bg-[#214062] w-[280px] rounded-2xl h-[420px] shadow-2xl'>
                <img src={img} className='absolute -top-[60px] right-0 h-[480px] drop-shadow-2xl'/>
            </div>
            <MagneticIcon className='bg-[#214062] h-40 w-40 flex justify-center items-center rounded-full shadow-2xl'>
              <img src={nextLogo} className='size-28'/>
            </MagneticIcon>
            <MagneticIcon className='bg-[#214062] h-32 w-32 flex justify-center items-center rounded-full shadow-2xl'>
              <img src={tailwindLogo} className='size-20'/>
            </MagneticIcon>
            <MagneticIcon className='bg-[#214062] h-28 w-28 flex justify-center items-center rounded-full shadow-2xl'>
              <img src={viteLogo} className='size-14'/>
            </MagneticIcon>
        </div>
    </div>
  )
}

