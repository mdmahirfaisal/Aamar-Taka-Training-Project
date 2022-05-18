import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const MobileBestDeal = () => {
    return (
        <div className='bg-[#f8f8f8] pb-20'>
            <h1 className='text-[22px] mb-[10px] font-medium py-5 '>Find Your <span className='text-[#ed5148]'>Best Deal</span> </h1>
            <div className="container pb-10">
                <Swiper
                    loop={true}
                    grabCursor={false}
                    slidesPerView={1.5}
                    spaceBetween={40}
                    slidesPerGroup={1}
                // autoplay={{ delay: 6000, }}
                // modules={[Autoplay]}
                >
                    <SwiperSlide style={{ backgroundColor: '#f8f8f8', padding: '0 10px' }}>
                        <div className='mx-auto my-3  cursor-pointer  rounded-tr-[55px] rounded-bl-[55px]'>
                            <img className='w-[100%] rounded-tr-[55px] rounded-bl-[55px] shadow-2xl' src="https://www.aamartaka.com/images/deal-slider-img1.png" alt="SliderImage" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: '#f8f8f8', padding: '0 10px' }}>
                        <div className=' mx-auto my-3 cursor-pointer  '>
                            <img className='w-[100%] rounded-tr-[55px] rounded-bl-[55px] shadow-2xl' src="https://www.aamartaka.com/images/deal-slider-img2.png" alt="SliderImage" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* ------------------ */}

            <h1 className='text-[22px] font-medium '>Our many years of <span className='text-[#ed5148]'>experience </span> is the main reason of success</h1>

            <div className="grid grid-cols-3 gap-3 container py-3">

                <div className="bg-white shadow-md rounded-xl py-1 ">
                    <img className='mx-auto' src="https://www.aamartaka.com/images/exprience-icon1.png" alt="img" />
                    <p className='text-[14px]'>Fast Service</p>
                </div>
                <div className="bg-white shadow-md rounded-xl py-1 ">
                    <img className='mx-auto' src="https://www.aamartaka.com/images/exprience-icon2.png" alt="img" />
                    <p className='text-[14px]'>Fast Process</p>
                </div>
                <div className="bg-white shadow-md rounded-xl py-1 ">
                    <img className='mx-auto' src="https://www.aamartaka.com/images/exprience-icon3.png" alt="img" />
                    <p className='text-[14px]'>Best Value</p>
                </div>

            </div>
        </div>
    );
};

export default MobileBestDeal;