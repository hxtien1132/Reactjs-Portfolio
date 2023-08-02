import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import bailu from '../Assets/bailu2.jpg'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <div name='home' className='w-full h-full text-white bg-gradient-to-b via-black from-black to-gray-800'>
      <div className='flex flex-col md:items-center gap-10 justify-center h-full max-w-screen-lg px-4  pt-[120px] md:pt-[150px] mx-auto md:flex-row'>
        <div className='flex flex-col justify-center h-full md:pt-0'>
          <h2 className='text-4xl font-bold text-white sm:text-7xl'>i'm tien ha </h2>
          <p className='max-w-md py-4 text-gray-500'>
            With logical thinking skills & a creative mindset, I want tobecome one of the key members who bring an
            effective ITsolution to the customers. At the same time, I want to improvemy knowledge through your
            professional working environment.
          </p>
          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='flex items-center px-6 py-3 my-2 text-xl text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'
            >
              PortFolio
              <span className='duration-300 group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={bailu} className='w-2/3 mx-auto rounded-2xl md:w-2/3 md:mr-0' alt='' />
        </div>
      </div>
    </div>
  )
}
