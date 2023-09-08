import React from 'react'

const BusinessReg = () => {
  return (
    <div className='ml-3 md:mx-5 md:items-end md:mt-[10%] mt-[40%]'>
      
    <form action="">
        <div className='w-[425px] h-[92.25px] mt-[2rem] right-1 gap-4 relative md:h-[60px]'>
            <p className='pl-2 pb-2'>Business name</p>
            <input type="text" className="w-[430px] h-[60.25px] rounded-[30px] border-[1px] md:h-[50px] gap-[10.9px] border-[#D0D5DD] py-[14px] px-[19px] pb-3 outline-none" placeholder='business name' />
        </div>

        <div className='w-[425px] h-[92.25px] mt-[2rem] right-1 gap-4 relative md:h-[60px]'>
            <p className='pl-2 pb-2'>Type of Business</p>
            <input type="text" list='options' className="w-[430px] h-[60.25px] rounded-[30px] border-[1px] md:h-[50px] gap-[10.9px] border-[#D0D5DD] py-[14px] px-[19px] pb-3 outline-none" placeholder='select business'/>
            <datalist id='options'>
                <option value='capentary' />
                <option value = 'Event planner' />
                <option value = 'others' />
            </datalist>
        </div>

        <div className='w-[425px] h-[92.25px] mt-[2rem] right-1 gap-4 relative md:h-[60px]'>
            <p className='pl-2 pb-2'>Business name</p>
            <input type="tel" className="w-[430px] h-[60.25px] rounded-[30px] border-[1px] md:h-[50px] gap-[10.9px] border-[#D0D5DD] py-[14px] px-[19px] pb-3 outline-none" id="" placeholder='enter the phone here'/>
        </div>
    </form>
      
    </div>
  )
}

export default BusinessReg