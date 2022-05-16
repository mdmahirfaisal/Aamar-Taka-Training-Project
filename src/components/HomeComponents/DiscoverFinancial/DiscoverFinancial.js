import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { FaHandshake } from 'react-icons/fa';
import { GiSpeedometer } from 'react-icons/gi';
import useMediaQuery from '../../SharedComponents/useMediaQuery/useMediaQuery';

const DiscoverFinancial = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <div className='max-w-[1200px] mx-auto pt-16'>
                <h2 className='text-2xl md:text-3xl lg:text-[2vw] lg:text-left container'>Discover Your Financial Options!</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 container">
                    <div className="col-span-5 md:col-span-2 flex flex-col  justify-around content-start text-left">
                        <div className='flex items-center gap-4 mt-5'>
                            <HiLightBulb color='#e5bf23' size="70px" />
                            <div>
                                <h5 className='text-[#595959] text-xl'>Experience</h5>
                                <p className='text-[#595959] text-md'>We have experience to serve more than 40k customer.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mt-5'>
                            <FaHandshake color='#d19a6e' size="60px" />
                            <div>
                                <h5 className='text-[#595959] text-xl'>Reliability</h5>
                                <p className='text-[#595959] text-md'>We strictly follow our partner banks guideline.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mt-5'>
                            <GiSpeedometer color='#dd6140' size="60px" />
                            <div>
                                <h5 className='text-[#595959] text-xl'>Fastest & Hassle Free</h5>
                                <p className='text-[#595959] text-md'>Get loan or credit card in a faster way.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-5 md:col-span-3 mt-8 md:mt-0'>
                        <img className='w-full' src="https://www.aamartaka.com/images/customer-tab.png" alt="Customer tab" />
                    </div>
                </div>
            </div>

            {/* --- --- --- */}
            <div className="bg-[#0ab9f2]">
                <div className="max-w-[1200px] container py-5 mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="border-l-4 border-white md:my-8 text-left pl-5 text-white">
                        <h5 className='text-2xl md:text-3xl font-bold'>250 M+</h5>
                        <p className='text-xl md:text-2xl '>CORE LOAN DISBURSED</p>
                    </div>
                    <div className="border-l-4 border-white md:my-8 text-left pl-5 text-white">
                        <h5 className='text-2xl md:text-3xl font-bold'>1.5 K+</h5>
                        <p className='text-xl md:text-2xl'>CREDIT CARDS DISBURSED</p>
                    </div>
                    <div className="border-l-4 border-white md:my-8 text-left pl-5 text-white">
                        <h5 className='text-2xl md:text-3xl font-bold'>45 K+</h5>
                        <p className='text-xl md:text-2xl'>HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>

            {/* --- Whats people said --- */}

            <div className="bg-[#f4f9fc]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-12 gap-3 py-8 whatPeopleBg container">
                        <div className="col-span-12 md:col-span-4 self-center ">
                            <h5 className='text-3xl md:text-5xl text-left '>What <span className='text-[#3e3c3c] font-medium'>People </span> said about <br />
                                <span className='text-[#ecb400] font-semibold'>our service*</span>
                            </h5>
                        </div>

                        <div className="col-span-12 md:col-span-8 flex items-center justify-around gap-4">
                            <div className="col-span-4 border bg-white py-8 px-6 text-left">
                                <p className='text-sm'>{`On January 15, 2001, Jimmy Wales[6] and Larry Sanger launched Wikipedia; Sanger coined its name as a portmanteau of "wiki" and "encyclopedia."[7][8] Wales was influenced by the "spontaneous order" ideas associated with`}</p>

                                <h5 className='text-md font-medium text-[#1186d4] mt-2'>Rokibul Hasan</h5>
                                <p className='text-sm'>Manager IT, Beximco</p>
                            </div>
                            <div className="col-span-4 border bg-white py-8 px-6 text-left">
                                <p className='text-sm'>{`On January 15, 2001, Jimmy Wales[6] and Larry Sanger launched Wikipedia; Sanger coined its name as a portmanteau of "wiki" and "encyclopedia."[7][8] Wales was influenced by the "spontaneous order" ideas associated with`}</p>

                                <h5 className='text-md font-medium text-[#1186d4] mt-2'>Rokibul Hasan</h5>
                                <p className='text-sm'>Manager IT, Beximco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DiscoverFinancial;