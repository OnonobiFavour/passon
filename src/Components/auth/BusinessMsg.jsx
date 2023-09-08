import React from 'react'

const BusinessMsg = () => {
  return (
    <div className='ml-3 md:mx-5 md:items-end md:mt-[8%] mt-[30%]'>

        <article className='md:mt-[2rem]'>
            <p className='font-inter w-[260px] h-[28px] font-bold text-[#1e1e1e] pl-2'>More info about your business</p>
            <div className='w-[425px] h-[232px]'>
            <input type="text" className='w-[425px] h-[232px] rounded-[30px] border-[1px] py-[14px] px-[19px] mr-[1rem] gap-[10.9px] top-[40%] border-[#D0D5DD]' placeholder='Leave a brief description about your business.'/>
            </div>
            
        </article>
    </div>
  )
}

export default BusinessMsg