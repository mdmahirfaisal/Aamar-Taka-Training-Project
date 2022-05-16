import React from 'react';
import useMediaQuery from '../../SharedComponents/useMediaQuery/useMediaQuery';


const bestDealData = [
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/adv/Background.png',
        title: 'Car Loan @7.99%',
        desc1: 'Lowest interest Rate.',
        desc2: 'Loan Facility Upto 40 Lacs.',
        desc3: 'Loan Duration Max. 6 years.',
        link: ''
    },
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/adv/Credit_Card_2.png',
        title: 'Saadiq Credit Card',
        desc1: 'Lowest interest Rate.',
        desc2: 'Loan Facility Upto 40 Lacs.',
        desc3: 'Loan Duration Max. 6 years.',
        link: ''
    },
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/adv/BackgroundHomeLoan.png',
        title: 'Home Loan @7%',
        desc1: 'Lowest interest Rate.',
        desc2: 'Loan Facility Upto 40 Lacs.',
        desc3: 'Loan Duration Max. 6 years.',
        link: ''
    },
    {
        img: 'https://assets.aamartaka.com/media/bcbd_content/adv/Car_Loan.png',
        title: 'Loan Amount Upto 80%',
        desc1: 'Lowest interest Rate.',
        desc2: 'Loan Facility Upto 40 Lacs.',
        desc3: 'Loan Duration Max. 6 years.',
        link: ''
    }
]


const BestDeal = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');



    return (
        <div className="bg-[#f9f9f9] pb-14">
            <div className='max-w-[1200px] mx-auto '>
                <h2 className='text-3xl md:text-4xl text-[#3e3c3c] font-medium py-14'>Find Your Best Deal</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 container">
                    {bestDealData.map((data, index) => <div
                        key={index}
                    >
                        <div className="border rounded-md pb-5 transition-all hover:shadow-xl ease-in-out duration-700 hover:-translate-y-1 bg-white">
                            <div className="m-2 border">
                                <img src={data.img} className="mx-auto w-[100%] " alt="best deal" />
                            </div>
                            <div className='text-left px-6 pt-3  border-t my-3 '>
                                <h2 className='text-[#0d435d] text-xl font-medium'>{data.title}</h2>
                                <p className='text-sm my-1'>{data.desc1}</p>
                                <p className='text-sm my-1'>{data.desc2}</p>
                                <p className='text-sm my-1'>{data.desc3}</p>

                            </div>
                            <a className='mt-4 block py-3 rounded-[30px] mx-auto w-[70%] mx-auto mt-6 text-md font-semibold text-white bg-[#208dd3] hover:bg-yellow-500 hover:text-black  transition-all ease-in-out duration-700 ' href="">APPLY NOW !</a>
                        </div>

                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default BestDeal;