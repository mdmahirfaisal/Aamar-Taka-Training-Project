import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



const bestDealData = [
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/news/Picture1.jpg',
        title: 'FinTech, Bank & Economic Development in Bangladesh',
        date: '2019-May-01',
        desc: 'FinTech, or financial technology, aims to compete with traditional financial methods in the delivery of financial services. It is a new industry th',
        link: ''
    },
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/news/Picture2.jpg',
        title: 'Financial Inclusion & Bangladesh',
        date: '2019-May-01',
        desc: 'The importance of an inclusive financial system is widely recognized in the policy circle. An inclusive financial system enhances efficiency and we',
        link: ''
    },
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/news/Picture3.png',
        title: 'Why Bangladesh should adopt digital financial services',
        date: '2019-May-01',
        desc: 'DFS encompasses all products, services, technology and/or infrastructure that enable individuals and companies to have access to payments, savings,',
        link: ''
    }
];

const sliderData = [
    { image: 'https://assets.aamartaka.com/media/institute/18_mwBszlv.jpg' },
    { image: 'https://assets.aamartaka.com/media/institute/04_jmYPW7x.jpg' },
    { image: 'https://assets.aamartaka.com/media/institute/03_o5hlUnH.jpg' },
    { image: 'https://assets.aamartaka.com/media/institute/16_iGof9mJ.jpg' },
    { image: 'https://assets.aamartaka.com/media/institute/1.jpg' },
    { image: 'https://assets.aamartaka.com/media/institute/80_jJoJoUA.jpg' },
    { image: 'https://assets.aamartaka.com/media/institute/31_rknfaHr.jpg' },
]


const PartnersAndInvestors = () => {

    return (
        <>
            <div className="bg-white py-14 mt-20 sm:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container">
                    <div className="">
                        <h2 className='text-[#5d6281] text-3xl mb-10'>Our Partners</h2>

                        <Swiper
                            loop={true}
                            grabCursor={false}
                            slidesPerView={2}
                            spaceBetween={50}
                            slidesPerGroup={1}
                            // loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 4000,
                                // disableOnInteraction: false,
                            }}

                            modules={[Autoplay]}

                        >
                            {sliderData?.map((data, index) => <SwiperSlide
                                key={index} >
                                <div className='border rounded-lg mx-auto my-3 p-2 cursor-pointer'>
                                    <img className='max-w-[80px] mx-auto' src={data?.image} alt="SliderImage" />
                                </div>
                            </SwiperSlide>)}
                        </Swiper>

                    </div>
                    <div>
                        <h2 className='text-[#5d6281] text-3xl mb-10'>Our Investors</h2>
                        <div className="flex items-center gap-10 justify-around ">
                            <div className='border rounded-lg mx-auto my-3 p-2 w-full h-[80px] cursor-pointer'>
                                <img className='w-[100px] 
                                lg:w-[120px] mx-auto mt-2' src="https://www.aamartaka.com/images/grameenphone.png" alt="Img" />
                            </div>

                            <div className='border rounded-lg mx-auto w-full h-[80px] cursor-pointer'>
                                <img className='w-[100px] mt-5 
                                lg:w-[120px] mx-auto' src="https://www.aamartaka.com/images/sd-asia.png" alt="Img" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ---  Card ---  */}
            <div className="bg-[#f9f9f9] py-14">
                <div className='max-w-[1200px] mx-auto '>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
                        {bestDealData?.map((data, index) => <div
                            key={index}
                        >
                            <div className="border rounded-md pb-5 transition-all hover:shadow-xl ease-in-out duration-700 hover:-translate-y-1 bg-white">
                                <div className="m-2 border cursor-pointer">
                                    <img src={data?.img} className="w-full md:h-[180px] lg:h-[200px]" alt="best deal" />
                                </div>
                                <div className='text-left px-6 pt-3 min-h-[220px]  border-t my-3 '>
                                    <h2 className='text-[#0d435d] text-xl font-medium hover:text-[#0ab9f2] transition-all duration-700 cursor-pointer'>{data.title}</h2>
                                    <p className='text-md my-1 text-[#a8a8a8] hover:text-[#0ab9f2] transition-all duration-700 cursor-pointer flex items-center gap-2 font-semibold'><CgCalendarDates /> {data?.date}</p>
                                    <p className='text-md my-1 text-[#898989] cursor-default'>{data?.desc}</p>

                                    <a className='text-md text-left font-semibold text-[#0ab9f2] transition-all duration-700 flex mx-auto items-center gap-0 hover:gap-1 hover:tracking-wide cursor-pointer'><span className='mt-[-2px] '>Read More</span> <RiArrowRightSLine size="20px" /></a>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnersAndInvestors;