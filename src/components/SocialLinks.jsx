import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: 'https://www.facebook.com/profile.php?id=100008980843426',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:hxtien132@gmail.com',
      style: ''
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/hxtien1132',
      style: ''
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://www.topcv.vn/xem-cv/CQ0FVVBUVlAIBwhWVFJZAVVXBlcHUVNSVgUHBAe97b',
      style: 'rounded-br-md'
    }
  ]
  return (
    <div className='flex-col top-[35%] left-0 fixed hidden lg:flex'>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              'flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-3px] hover:rounded-md duration-300 bg-gray-500' +
              ' ' +
              link.style
            }
          >
            <a href={link.href} target='blank' className='flex items-center justify-between w-full text-xl text-white'>
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
