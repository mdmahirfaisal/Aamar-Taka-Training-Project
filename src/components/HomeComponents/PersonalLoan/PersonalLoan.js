import React, { useState } from 'react';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoanType, handleProfessionType } from '../../../redux/Slices/LoanSlice';
import { useRouter } from 'next/router';

const PersonalLoan = () => {
    const dispatch = useDispatch();
    const { loanType, professionType } = useSelector(state => state.loan)
    const router = useRouter();


    const handLePersonalLoan = (e) => {
        e.preventDefault();
        console.log(loanType);
        console.log(professionType);
    }

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] pb-10 lg:pb-0 lg:h-[92vh] bg-[#1b5f8d] grid place-items-center'>

                <div className="max-w-[1200px] mx-auto">
                    <h2 className='text-white text-2xl lg:text-3xl py-5'>We help you to get <span className='font-bold'>personal loan</span> easily</h2>
                    <form onSubmit={handLePersonalLoan} className="bg-[#ffffff34] rounded-lg p-5">
                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3  ">
                            {/* Select Loan type  */}
                            <div className="">
                                <h5 className='text-lg md:text-xl text-white my-3 text-left md:text-center'>Select Loan Type</h5>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-white flex items-center gap-2 px-2 py-3 rounded-md">
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} type="radio" id="newLoan" name="fav_language" value="New Loan" className='border-2 border-[#00bdf2] w-5 h-5 checked:bg-[#00bdf2] cursor-pointer transition-all duration-700' required />
                                        <label className='cursor-pointer' htmlFor="newLoan">New Loan</label>
                                    </div>
                                    <div className="bg-white flex items-center gap-2 px-2 py-3 rounded-md">
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} type="radio" id="takeOver" name="fav_language" value="Take Over" className='border-2 border-[#00bdf2] w-5 h-5 checked:bg-[#00bdf2] cursor-pointer transition-all duration-700' required />
                                        <label className='cursor-pointer' htmlFor="takeOver">Take Over</label>
                                    </div>
                                    <div className="bg-white flex items-center gap-2 px-2 py-3 rounded-md">
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} type="radio" id="topUp" name="fav_language" value="Top Up" className='border-2 border-[#00bdf2] w-5 h-5 checked:bg-[#00bdf2] cursor-pointer transition-all duration-700' required />
                                        <label className='cursor-pointer' htmlFor="topUp">Top Up</label>
                                    </div>
                                </div>
                            </div>
                            {/* Select Your Profession  */}
                            <div className="">
                                <h5 className='text-lg md:text-xl text-white my-3 text-left md:text-center'>Select Your Profession</h5>
                                <div className="w-full relative">
                                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                    <select onChange={(e) => dispatch(handleProfessionType(e.target.value))} defaultValue={''} className="cursor-pointer form-select appearance-none block w-full px-3 py-[11px] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition-all ease-in-out duration-700 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none " required>
                                        <option className='hidden' value="">Select Your Profession...</option>
                                        <option value="Salaried">Salaried</option>
                                        <option value="Business Man">Business Man</option>
                                        <option value="Land Lord">Land Lord</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 w-full py-4 ">
                            <input type="submit" className='loanButton hover:text-white bg-[#f4ca1f] rounded-md text-gray-900 text-lg font-medium py-2 block w-[100%] mx-auto' value="COMPARE RATE" />
                            <input type="submit" className='loanButton bg-[#3abaf4] rounded-md text-gray-100 text-lg font-medium py-2 block w-[100%] mx-auto' value="CHECK ELIGIBILITY" />
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PersonalLoan;