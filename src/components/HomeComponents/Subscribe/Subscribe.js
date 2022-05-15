import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const Subscribe = () => {
    return (
        <div className='subscribe-bg py-10'>
            <h2 className='text-2xl md:text-3xl font-medium text-[#3e3c3c] mb-8'>Get always updated and latest offers</h2>

            <button className='text-md font-medium bg-[#0ab9f2] text-white py-4 px-9 transition-all duration-700 hover:px-10 rounded-[30px] flex mx-auto items-center gap-0 hover:gap-2 hover:tracking-wide'><span className='mt-[-2px] '>Subscribe Now</span> <RiArrowRightSLine size="20px" /></button>
        </div>
    );
};

export default Subscribe;