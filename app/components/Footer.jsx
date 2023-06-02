import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex bg-black justify-between h-auto items-center px-8 mt-2'>
    <div className='flex flex-col my-5 text-center'>
    <ul>
    <li><a href='' className='text-white'>Home</a></li>
    <li><a href='' className='text-white'>About</a></li>
    <li><a href='' className='text-white'>Gallery</a></li>
    <li><a href='' className='text-white'>Projects</a></li>
    <li><a href='' className='text-white'>workshop</a></li>
    </ul>
    </div>
    <div className='flex flex-col my-5'>
    <ul>
    <li><a href='' className='text-white'>About Instructor</a></li>
    <li><a href='' className='text-white'>Milestone</a></li>
    <li><a href='' className='text-white'>Vision</a></li>
    <li><a href='' className='text-white'>community</a></li>
    <li><a href='' className='text-white'>Hire us</a></li>
    </ul>
    </div>
    <div className='flex flex-col my-5'>
    <ul>
    <li><a href='' className='text-white'>Linkend</a></li>
    <li><a href='' className='text-white'>Facebook</a></li>
    <li><a href='' className='text-white'>Twitter</a></li>
    <li><a href='' className='text-white'>Instagram</a></li>
    <li><a href='' className='text-white'>Github</a></li>
    </ul>
    </div>
    </div>
  )
}

export default Footer