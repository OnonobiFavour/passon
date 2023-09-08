import React from 'react'
import SignUp from './auth/SignUp'

const Hero = () => {
  return (
    <header className='bg-[#fff] h-[100vh] flex md:flex'>
      <div className='w-0 md:w-[420px] md:h-[100vh] md:bg-image bg-black'>
        <h1 className='text-[#fff]'>PressOn</h1>
      </div>
      <div className='w-[100vw] md:w-[72%] h-[100vh]'>
        <button className='rounded-[20px] border-none w-[174px] h-[48px] md:m-2 ml-[2rem] md:h-[30px] mt-2 bg-[#101828] text-white float-right' href={''}>Login</button>
        <SignUp />
      </div>
    </header>
  )
}

export default Hero