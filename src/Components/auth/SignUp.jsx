import React, { useState } from 'react';
import BusinessReg from './BusinessReg';
import BusinessMsg from './BusinessMsg';

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    password: '',
  });

  
  const pageHeaders = [
    "Hi, let's Get Started",
    "Let's get to know your Business",
    "Tell us more about your business",
  ];

  

  return (
    <div className='ml-3 md:mx-5 md:items-end md:mt-[20%] mt-[40%]'>
      <h1 className='text-[42px] font-Hanken w-[356px] h-[55px] text-600'>{pageHeaders[page]}</h1>

      <form action="">
        {page === 0 && (
          <div>
        <div className='w-[425px] h-[92.25px] mt-[2rem] right-1 gap-4 relative'>
        <p className='pl-2 pb-2'>Full name</p>
          <input
            type='text'
            id='fullName'
            name='fullName'
            className='w-[430px] h-[60.25px] rounded-[30px] border-[1px] gap-[10.9px] border-[#D0D5DD] py-[14px] px-[19px] pb-3'
            placeholder='Enter your full name here'
            />
          </div>

            <div className='w-[430px] h-[92.25px] mt-[2rem] right-1 gap-4 relative'>
            <p className='pl-2 pb-2'>Business Mail</p>
              <input
                type='email'
                id='businessEmail'
                name='businessEmail'
                className='w-[430px] h-[60.25px] rounded-[30px] border-[1px] gap-[10.9px] border-[#D0D5DD] py-[14px] px-[19px]'
                placeholder='Enter your business email here'
              />
            </div>

            <div className='w-[430px] h-[92.25px] mt-[2rem] right-2 gap-4 relative'>
              <p className='pl-2 pb-2'>Password</p>
              <input
                type='password'
                id='password'
                name='password'
                className='w-[430px] h-[60.25px] rounded-[30px] border-[1px] gap-[10.9px] border-[#D0D5DD] py-[14px] px-[19px]'
                placeholder='Enter your password here'
              />
            </div>
            <button
              className='w-[425px] h-[60px] rounded-[30px] p-[10px] mt-[2rem] right-1 gap-[10px] bg-[#101828] text-white'
              onClick={(e)=>{
                e.preventDefault()
                setPage((currPage) => currPage + 1)
              }}
            >
              Next
            </button>
            
            <p className='text-center p-6'>Already have an account? LInk</p>
          </div>

        )}
          
              
        {
          page === 1 && (
            <div>
              <BusinessReg></BusinessReg>
              <button className='w-[430px] h-[60px] rounded-[30px] p-[10px] gap-[10px] bg-[#101828] text-white' onClick={(e)=>{
                e.preventDefault()
                setPage((currpage) => currpage + 1)
              }}>Next</button>
              <button className='w-[430px] h-[60px] rounded-[30px] p-[10px] gap-[10px] text-[#101828] bg-white' onClick={(e) =>{
                e.preventDefault();
                setPage((currPage) => currPage - 1)
              }}>Previous</button>
            </div>
          )
        }
      
        {
          page ===2 ? (
            <div>
              <BusinessMsg></BusinessMsg>
              <button className='w-[430px] h-[60px] rounded-[30px] p-[10px] gap-[10px] mt-[6rem] bg-[#101828] text-white' onClick={(e)=>{
                e.preventDefault()
                setPage((currpage) => currpage + 1)
              }}>Next</button>
              <button className='w-[430px] h-[60px] rounded-[30px] p-[10px] gap-[10px] text-[#101828] bg-white' onClick={(e) =>{
                e.preventDefault();
                setPage((currPage) => currPage - 1)
              }}>Previous</button>
            </div>
          ):null
        }
      
        
          
      </form>
    </div>
  );
};

export default SignUp;
