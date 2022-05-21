import React from 'react';
import { useRouter } from 'next/router';
import { AiOutlineFileDone } from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';
import { RiCheckboxMultipleLine } from 'react-icons/ri';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const cardData = [
    {
        img: 'https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?t=st=1652807158~exp=1652807758~hmac=d8eee9ce3d8046c764a585c73e2fba103e4bf9b870bd7b652e5ee126844eba12&w=740',
        title: 'Personal Loan',
        link: "personal-loan"
    },
    {
        img: 'https://img.freepik.com/free-vector/house-with-red-roof-isolated_1284-41870.jpg?t=st=1652807259~exp=1652807859~hmac=ed4e0c0681bc4b77ce9aef11a9b607c203c9b8dc428336d5f481839f6e2870a6&w=826',
        title: 'Home Loan',
        link: "home-loan"
    },
    {
        img: 'https://img.freepik.com/free-vector/colored-flat-male-love-his-car-composition-with-man-washes-his-car-garage_1284-19397.jpg?size=338&ext=jpg&ga=GA1.2.1474067928.1625421490',
        title: 'Car Loan',
        link: "car-loan"
    },
    {
        img: 'https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149125376.jpg?t=st=1652807486~exp=1652808086~hmac=2dfd67e553fd0cfbc27152e0042f5b9d196c3237e6adabc4cfdf940abd9f322e&w=740',
        title: 'Credit Card',
        link: ""
    },
    {
        img: 'https://www.aamartaka.com/svg-icon/fixed_deposit.svg',
        title: 'DPS',
        link: ""
    },
    {
        img: 'https://www.aamartaka.com/svg-icon/fixed_deposit.svg',
        title: 'Fixed Deposit',
        link: ""
    },
];

const MobileHeader = () => {
    const router = useRouter();

    return (
        <>
            <div className='bg-[#f8f8f8]'>

                <div className='container'>
                    <h1 className='text-[22px] font-medium py-[10px] '>Compare Rates, Check Eligibility <br />
                        <span className='text-[#ec5d01] text-[27px] '>& Apply</span></h1>
                </div>

                <div className="grid grid-cols-3 gap-2 container">
                    {cardData?.map(((data, index) => <div
                        key={index}
                        onClick={() => router.push(data.link)}
                        className="bg-white rounded-xl shadow-sm p-2 cursor-pointer"
                    >
                        <div className=''>
                            <img src={data?.img} className="h-[80px] mx-auto mb-2 " alt="Image" />
                            <p className='text-sm'>{data?.title}</p>
                        </div>
                    </div>
                    ))}
                </div>
                {/* ----------------------------- */}

                <h1 className='text-[22px] font-medium py-[10px] '>Looking for Something Else ?</h1>

                <div className="shadow-md">
                    <div className="bg-white grid grid-cols-3 border-b">
                        <div className='p-3 cursor-pointer'>
                            <img className='h-[50px] mx-auto' src="https://www.aamartaka.com/svg-icon/monthly_benefit.svg" alt="Icons" />
                            <p className='text-sm'>Monthly Benefits</p>
                        </div>

                        <div className='p-3 border-x cursor-pointer'>
                            <img className='h-[50px] mx-auto' src="https://www.aamartaka.com/svg-icon/savings_account.svg" alt="Icons" />
                            <p className='text-sm'>Saving Account</p>
                        </div>

                        <div className='p-3 cursor-pointer'>
                            <img className='h-[50px] mx-auto' src="https://www.aamartaka.com/svg-icon/double_money.svg" alt="Icons" />
                            <p className='text-sm'>Double Money</p>
                        </div>
                    </div>

                    <div className="bg-white flex items-center justify-center">
                        <div className='p-3 pr-8 cursor-pointer'>
                            <img className='h-[50px] mx-auto' src="https://www.aamartaka.com/svg-icon/double_money.svg" alt="Icons" />
                            <p className='text-sm'>Triple Money</p>
                        </div>
                        <div className='p-3 pl-8 border-l cursor-pointer'>
                            <img className='h-[50px] mx-auto' src="https://www.aamartaka.com/svg-icon/fixed_deposit.svg" alt="Icons" />
                            <p className='text-sm'>Price Bond</p>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------- */}

                <h1 className='text-[22px] font-medium py-5 '>{"It's Simple, Secure & Transfarent."}</h1>

                <div className="flex items-center">
                    <div className='flex-none w-[100px]'>
                        <AiOutlineFileDone className='text-[22px] text[#5b5959] mx-auto' />
                        <p className="text-[12px] mt-4">
                            <span className='text-[#1a5aa9]'>Check Eligibility</span><br />Check your loan eligibility criteria
                        </p>
                    </div>
                    <p className='mobileHeaderBorder grow mt-[-65px] '></p>
                    <div className='flex-none w-[100px]'>
                        <GrDocumentText className='text-[20px] text-[#5b5959] mx-auto' />
                        <p className="text-[12px] mt-4">
                            <span className='text-[#1a5aa9]'>Compare Rates</span><br />Compare and Find your best offer</p>
                    </div>
                    <p className='mobileHeaderBorder grow mt-[-65px] '></p>
                    <div className='flex-none w-[100px]'>
                        <RiCheckboxMultipleLine className='text-[22px] text-[#5b5959] mx-auto' />
                        <p className="text-[12px] mt-4">
                            <span className='text-[#1a5aa9]'>Apply</span><br />Upload basic documents & start
                        </p>
                    </div>
                </div>

                <button className="bg-[#ed5148] text-white rounded-[25px] flex items-center gap-1 text-md mx-auto mt-3 py-[10px] px-[30px] ">{"Let's Get Started"} <AiOutlineDoubleRight /></button>
            </div>
        </>
    );
};

export default MobileHeader;