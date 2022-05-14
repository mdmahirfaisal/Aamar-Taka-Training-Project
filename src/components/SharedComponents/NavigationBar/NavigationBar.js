import React from 'react';
import { ImTarget } from "react-icons/im";
import { IoMdDisc } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


const NavigationBar = () => {
    return (
        <div className='max-w-[94%] mx-auto'>
            <div className="grid grid-cols-2 ">
                <div className='flex items-center'>
                    <a href=""><img className='mr-8 min-h-[5vh]' src="https://www.aamartaka.com/images/logoWeb.png" alt="logo" /></a>

                    <a className='flex items-center' href="tel:09609122122"> <img src="https://www.aamartaka.com/images/Layer-6.png" alt="contact" /> <span className='text-[#585858] ml-2 font-bold text-lg hover:text-[#50c6f1] ease-in-out duration-500'>09609122122</span></a>
                </div>

                <div className='justify-self-end gap-5 flex items-center justify-evenly  items-center'>
                    <a className='ease-in-out duration-300 text-[16px] flex items-center justify-center text-[#008ecc] rounded-full border w-[200px] py-2 hover:bg-sky-100 border-[#239dd3] font-[500]' href=""><ImTarget size="16px" /> <span className='ml-2'>Track Application</span></a>

                    <a className='ease-in-out duration-300 text-[16px] flex items-center justify-center text-[#008ecc] rounded-full border w-[200px] py-2 hover:bg-sky-100 border-[#239dd3] font-[500]' href=""><IoMdDisc color='#067396' size="16px" /> <span className='ml-2'>Trending Offers</span></a>

                    <a className='flex items-center justify-center' href=""><span className='mr-2'>Menu</span> <GiHamburgerMenu size="20px" /></a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;