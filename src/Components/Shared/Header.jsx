import React from 'react'
import { HiOutlineSearch, HiOutlineMail, HiOutlineBell } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
const Header = () => {
    return (
        <div className='bg-[#202028] h-30 md:h-20 px-4 flex flex-col md:flex-row  justify-between items-center'>
            <div className='relative mt-2 mb-2 md:mt-0 md:mb-0'>
                <HiOutlineSearch fontSize={20} className='text-[#76777a] absolute top-1/2 -translate-y-1/2 left-3' />
                <input type='text' placeholder='Search...' className='text-sm bg-[#2a2b30] focus:outline-none active:outline-none h-10 w-[15rem] md:w-[24rem] border border-[#2a2b30] rounded-lg px-4 pl-11 pr-4' />
            </div>
            <div className='flex items-center mr-2 gap-2'>
                <div className='border border-[#43454a] bg-[#43454a] rounded-full p-1 md:p-2'>
                    <HiOutlineMail fontSize={20} className='text-[#a7a8aa] cursor-pointer' />
                </div>
                <div className='border border-[#43454a] bg-[#43454a] rounded-full p-1 md:p-2'>
                    <IoSettingsOutline fontSize={20} className='text-[#a7a8aa] cursor-pointer' />
                </div>
                <div className='border border-[#43454a] bg-[#43454a] rounded-full p-1 md:p-2'>
                    <HiOutlineBell fontSize={20} className='text-[#a7a8aa] cursor-pointer' />
                </div>
                <div className='border border-[#43454a] bg-[#43454a] rounded-full ml-4'>
                    <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src="./face.jpg" alt="face"/>
                </div>
            </div>
        </div>
    )
}

export default Header
