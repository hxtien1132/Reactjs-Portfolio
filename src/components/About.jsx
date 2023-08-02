import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-full text-white bg-gradient-to-b from-gray-800 to-black'>
      <div className='flex flex-col justify-center w-full pt-[150px] h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>About</p>
        </div>
        <p className='mt-10 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic, animi deleniti neque eius vitae itaque
          tempora magni, nemo dicta excepturi totam praesentium! Vero sequi, totam quasi pariatur ea eveniet.
        </p>
        <p className='text-xl '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic, animi deleniti neque eius vitae itaque
          tempora magni, nemo dicta excepturi totam praesentium! Vero sequi, totam quasi pariatur ea eveniet.
        </p>
        <p className='text-xl '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic, animi deleniti neque eius vitae itaque
          tempora magni, nemo dicta excepturi totam praesentium! Vero sequi, totam quasi pariatur ea eveniet.
        </p>

        <br />
        <p className='text-xl'></p>
      </div>
    </div>
  )
}
