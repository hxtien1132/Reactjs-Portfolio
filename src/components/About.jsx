import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-full text-white bg-gradient-to-b from-gray-800 to-black'>
      <div className='flex flex-col justify-center w-full pt-[150px] h-full max-w-screen-lg p-4 mx-auto pb-20'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>About</p>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <div>
            <h2 className='text-xl font-semibold'>Date of birth</h2>
            <p className='pl-1 text-gray-500'>March 11, 2000</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Email</h2>
            <p className='pl-1 text-gray-500'>hxtien132@gmail.com</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Facebook</h2>
            <a
              className='pl-1 text-gray-500'
              href='https://www.facebook.com/profile.php?id=100008980843426'
              target='blank'
            >
              https://fb.com/tiennha.vn
            </a>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Phone</h2>
            <p className='pl-1 text-gray-500'>0378686178</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Address</h2>
            <p className='pl-1 text-gray-500'>Quang Tri , Viet Nam</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Education</h2>
            <p className='pl-1 text-gray-500'>Fpt Polytechnic</p>
          </div>
        </div>

        <br />
        <p className='text-xl'></p>
      </div>
    </div>
  )
}
