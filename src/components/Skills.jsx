import React, { useRef } from 'react'
import html from '../Assets/icons8-html5-480.png'
import nodejs from '../Assets/icons8-nodejs-480.png'
import sql from '../Assets/icons8-sql-server-480.png'
import monkey from '../Assets/portfolio/MonkeyBlogging.png'
import psdtohtml from '../Assets/portfolio/psdtohtml.png'
import moviesimple from '../Assets/portfolio/moviesimple.png'
import shopeeclone from '../Assets/portfolio/shopeeclone.png'
import { Link } from 'react-scroll'

export default function Skills() {
  const portfolios = [
    {
      id: 1,
      src: psdtohtml,
      code: 'https://github.com/hxtien1132/ProjectPsdToHtmlCss',
      demo: 'https://hxtien1132.github.io/Psd-Convert-Html/',
      title: 'Psd Convert Html'
    },
    {
      id: 2,
      src: monkey,
      code: 'https://github.com/hxtien1132/react-monkey-blogging',
      demo: '',
      title: 'React Monkey Blogging'
    },
    {
      id: 3,
      src: moviesimple,
      code: 'https://github.com/hxtien1132/Project-movie',
      demo: 'https://react-movie-simple-red.vercel.app//',
      title: 'React Movie Simple'
    },
    {
      id: 4,
      src: shopeeclone,
      code: 'https://github.com/hxtien1132/shopee',
      demo: 'https://shopee-eosin.vercel.app/',
      title: 'React Shopee Clone'
    },
    {
      id: 5,
      src: nodejs,
      code: 'https://github.com/hxtien1132/Project-movie',
      demo: '',
      title: 'Project Psd Convert Html'
    },
    {
      id: 6,
      src: sql,
      code: 'https://github.com/hxtien1132/Project-movie',
      demo: '',
      title: 'Project Psd Convert Html'
    }
  ]
  const btnDemoRef = useRef();
  const btnCodeRef = useRef();
  const handleOnClick = (string ) => {
    if (string === 'demo') {
    btnDemoRef.current.click()
    } else {
    btnCodeRef.current.click()
    }
  }
  return (
    <div name='portfolio' className='w-full text-white md:h-screen bg-gradient-to-b from-black to-gray-800 '>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-[150px] mx-auto '>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500 shadow-md shadow-gray-600'>Projects</p>

          <p className='py-6'>Check out some of my projects right here</p>
        </div>
        <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
          {portfolios.map((portfolio) => (
            <div key={portfolio.id}>
              <div className='flex flex-col items-center overflow-hidden rounded-lg shadow-md shadow-gray-600'>
                <div className='h-[150px] overflow-hidden'>
                  <img src={portfolio.src} alt='' className='w-full h-full duration-200 rounded-md hover:scale-110' />
                </div>
                <div className='flex items-center justify-center'>
                  <button
                    className='w-1/2 px-4 py-2 m-3 font-semibold text-black duration-200 rounded-lg bg-slate-600 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500'
                  >
                    {portfolio.demo ? (
                      <a href={portfolio.demo} ref={btnDemoRef} target='blank'>
                        Demo
                      </a>
                    ) : (
                      'Demo'
                    )}
                  </button>
                  <button
                    onClick={() => handleOnClick('code')}
                    className='w-1/2 px-4 py-2 m-3 font-semibold duration-200 rounded-lg hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500'
                  >
                    {portfolio.code ? (
                      <a href={portfolio.code} ref={btnCodeRef} target='blank'>
                        Code
                      </a>
                    ) : (
                      'Code'
                    )}
                  </button>
                </div>
              </div>
              <div className='pt-3 font-bold text-center text-white '>{portfolio.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}