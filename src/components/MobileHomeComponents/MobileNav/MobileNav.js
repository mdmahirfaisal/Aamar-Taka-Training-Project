import React from 'react';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdDisc } from 'react-icons/io';
import { ImTarget } from 'react-icons/im';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { BiMessageDots } from 'react-icons/bi';

const MobileNav = () => {
    return (
        <>
            <div className='bg-[#f8f8f8]'>
                <div className='shadow-md mb-5'>
                    <div className="container flex items-center justify-between relative  p-1">
                        <HiMenuAlt2 className='text-[#d3531a] text-[37px] ' />
                        <img className='h-[50px] ' src="https://www.aamartaka.com/images/logoWeb.png" alt="logo" />
                        <MdOutlineNotificationsActive className='text-[#50c6f1] text-[37px] ' />
                        <p className='absolute right-1 bottom-4 rounded-[50%] bg-[#ff0000] text-[10px] text-white px-[5px]'>0</p>
                    </div>
                </div>


                <div className="container bg-[#fcfcfc] grid grid-cols-2 border-2 shadow-sm rounded-2xl p-3">
                    <a className='justify-start flex items-center gap-1' href=""><span className='bg-[#067396] h-[20px] w-[20px] rounded-[50%]'><IoMdDisc className='text-[12px] mx-auto mt-[4px] text-gray-100 ' /></span>  Trending offer</a>

                    <a className='border-l-2 justify-end flex items-center gap-1' href=""><span className='bg-[#067396] h-[20px] w-[20px] rounded-[50%]'><ImTarget className='text-[12px] mx-auto mt-[4px] text-white' /></span> Track Application </a>

                </div>
            </div>
            {/* ------ Bottom fixed nav ------ */}

            <div className="bg-white fixed w-full bottom-0 shadow-lg">
                <div className="grid grid-cols-4 py-3 container mt-10">
                    <div className='border-r'>
                        <AiOutlineHome className='mx-auto text-[#00add9] text-[23px]' />
                        <a className='text-sm font-medium text-[#00add9]' href="">Home</a>
                    </div>
                    <div className='border-r'>
                        <BsPerson className='mx-auto text-[#00add9] text-[23px]' />
                        <a className='text-sm font-medium' href="">Profile</a>
                    </div>
                    <div className='border-r'>
                        <HiOutlineDocumentText className='mx-auto text-[#00add9] text-[23px]' />
                        <a className='text-sm font-medium' href="">Application</a>
                    </div>
                    <div>
                        <BiMessageDots className='mx-auto text-[#00add9] text-[23px]' />
                        <a className='text-sm font-medium' href="">Support</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;