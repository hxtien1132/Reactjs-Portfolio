import React from 'react'
import html from '../Assets/icons8-html5-480.png'
import css from '../Assets/icons8-css-logo-480.png'
import react from '../Assets/icons8-react-480.png'
import tailwind from '../Assets/icons8-tailwindcss-480.png'
import nodejs from '../Assets/icons8-nodejs-480.png'
import sql from '../Assets/icons8-sql-server-480.png'
import github from '../Assets/icons8-github-480.png'
import typescript from '../Assets/icons8-typescript-480.png'
import javascript from '../Assets/icons8-javascript-480.png'
import mongodb from '../Assets/icons8-mongodb-480.png'

export default function Projects() {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: javascript, title: 'JAVASCRIPT', style: 'shadow-yellow-500' },
    { id: 4, src: typescript, title: 'TYPESCRIPT', style: 'shadow-blue-200' },
    { id: 5, src: react, title: 'REACT', style: 'shadow-purple-500' },
    { id: 6, src: tailwind, title: 'TAILWIND', style: 'shadow-orange-300' },
    { id: 7, src: nodejs, title: 'NODEJS', style: 'shadow-green-500' },
    { id: 8, src: sql, title: 'SQL', style: 'shadow-red-500' },
    { id: 9, src: github, title: 'GITHUB', style: 'shadow-slate-500' },
    { id: 10, src: mongodb, title: 'MongoDB', style: 'shadow-orange-500' }
  ]
  return (
    <div name='experience' className='w-full md:min-h-screen bg-gradient-to-b from-gray-800 to-black'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-[150px] mx-auto text-white '>
        <div>
          <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Skills</p>
          <p className='py-6'>There are the technologies I've worked with</p>
        </div>
        <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
          {techs.map((tech) => (
            <div key={tech.id} className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${tech.style}`}>
              <img src={tech.src} alt='' className='w-20 mx-auto' />
              <p>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
