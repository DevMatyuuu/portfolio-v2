import React from 'react'

export default function Contact() {
  return (
    <div className='flex justify-center items-center h-[65vh] bg-[#214062] text-[#F0EAE2] w-full mt-28 font-besley '>
        <div className='flex items-center justify-between px-72 h-full w-full'>
            <div className='flex justify-center h-[70%] w-full rounded-3xl px-12 bg-[#F0EAE2] shadow-2xl'>
                <div className='flex flex-col gap-20 pt-28'>
                    <div className='flex justify-center items-center flex-col w-full  gap-5'>
                        <span className='text-4xl text-[#214062] font-bold uppercase'>Need a Developer to work with?</span>
                        <p className='text-md text-[#214062c1] w-[70%] text-center'>I have knowledge in various web technologies and committed to turning your vision into reality. With a focus on clear communication and quality code, I’m ready to create an exceptional digital experience for you. Let’s build something amazing!</p>
                    </div>
                    <div className='flex items-center gap-8 justify-center'>
                        <button className='border-4 border-[#214062] hover:border-[#3d6896] text-[#214062] hover:text-[#3d6896] hover:scale-102 duration-500 bottom-12 right-72 py-2 px-24 rounded-lg shadow-2xl'>Email</button>
                        <button className='bg-[#214062] bottom-12 right-16 py-3 px-24 rounded-lg shadow-2xl hover:scale-102 duration-500 hover:bg-[#3d6896]'>Email</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
