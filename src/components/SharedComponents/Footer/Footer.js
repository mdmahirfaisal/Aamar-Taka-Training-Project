import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {


    return (
        <>
            <div className="border-t border-[#0ab9f2] pt-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className='grid grid-cols-3 gap-3 container'>
                        <div className="col-span-3 md:col-span-1 text-left">
                            <a className='mb-3' href=""><img src="https://www.aamartaka.com/images/logoWeb.png" alt="logo" /></a>

                            <div className='flex gap-3 mb-2'>
                                <GrLocation color='#3e3c3c' size="20px" />
                                <p className='mt-[-5px]'>Level-5, House-7, Road-2/1 <br /> Banani, Dhaka-1213, Bangladesh</p>
                            </div>

                            <a className='flex items-center gap-3 mb-2' href="tel:09609122122"><MdOutlinePersonOutline color='#3e3c3c' size="24px" /> <span className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500'>09609122122</span></a>

                            <a className='flex items-center gap-3 mb-2' href=""><FiPhoneCall color='#3e3c3c' size="20px" /> <span className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500'>(+880)-1882449286</span></a>

                            <a className='flex items-center gap-3 mb-2' href="mailto:info@aamartaka.com"><MdOutlineEmail color='#3e3c3c' size="20px" /> <span className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500'>info@aamartaka.com</span></a>
                        </div>
                        <div className="col-span-3 md:col-span-1 text-left flex flex-col">
                            <h5 className='text-xl text-[#3e3c3c] mb-4'>COMPANY</h5>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">About Aamartaka</a>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Investors</a>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Partners</a>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Contact</a>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Complaints guide</a>
                        </div>
                        <div className="col-span-3 md:col-span-1 text-left flex flex-col">
                            <h5 className='text-xl text-[#3e3c3c] mb-4'>LEGAL</h5>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Disclaimer</a>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Terms of use</a>
                            <a className='text-[#585858] hover:text-[#50c6f1] ease-in-out duration-500 mb-1' href="">Privacy policy</a>
                        </div>
                    </div>
                </div>

                <p className='text-sm bg-[#0ab9f2] text-white py-4 font-medium'>© Copyright 2019 by Aamartaka All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;