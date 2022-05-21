import React from 'react';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { useDispatch } from 'react-redux';
import { handleLoanType, handleProfessionType, handleLoanPurpose } from '../../../redux/Slices/LoanSlice';


/// select field class names
const SelectFieldClassName = "cursor-pointer form-select appearance-none block w-full pl-1 lg:pl-3 py-[11px] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition-all ease-in-out duration-700 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none ";


const HomeLoan = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handLeHomeLoan = (e) => {
        e.preventDefault();
        router.push('/home-loan-eligibility')
    }

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] pb-10 lg:pb-0 lg:min-h-[92vh] bg-[#1b5f8d] grid place-items-center'>
                <div className="md:min-w-[700px] lg:min-w-[1000px] lg:max-w-[1200px] mx-auto">

                    <h2 className='text-white text-2xl lg:text-3xl py-5'>We help you to get <span className='font-bold'>Home loan</span> easily</h2>
                    <form onSubmit={handLeHomeLoan} className="bg-[#ffffff34] rounded-lg p-5">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                            {/* Select Your Profession  */}
                            <div >
                                <div className="w-full relative">
                                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                    <select onChange={(e) => dispatch(handleProfessionType(e.target.value))} defaultValue={''} className={SelectFieldClassName} required>
                                        <option className='hidden' value="">Select Profession</option>
                                        <option value="Salaried">Salaried</option>
                                        <option value="Business Man">Business Man</option>
                                        <option value="Land Lord">Land Lord</option>
                                    </select>
                                </div>
                            </div>
                            {/* Select Loan purpose */}
                            <div>
                                <div className="w-full relative">
                                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                    <select onChange={(e) => dispatch(handleLoanPurpose(e.target.value))} defaultValue={''} className={SelectFieldClassName} required>
                                        <option className='hidden' value="">Select Loan Purpose</option>
                                        <option value="Apartment Buy">Apartment Buy</option>
                                        <option value="Construction">Construction</option>
                                        <option value="Land Buy">Land Buy</option>
                                        <option value="Renovation">Renovation</option>
                                    </select>
                                </div>
                            </div>
                            {/* Select Loan type  */}
                            <div >
                                <div className="w-full relative">
                                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                    <select onChange={(e) => dispatch(handleLoanType(e.target.value))} defaultValue={''} className={SelectFieldClassName} required>
                                        <option className='hidden' value="">Select Loan Type</option>
                                        <option value="New Loan">New Loan</option>
                                        <option value="Take Over">Take Over</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 w-full py-4 ">
                            <input type="submit" className='loanButton hover:text-white bg-[#f4ca1f] rounded-md text-gray-900 text-lg font-medium py-2 block w-[100%] mx-auto cursor-pointer' value="COMPARE RATE" />
                            <input type="submit" className='loanButton bg-[#3abaf4] rounded-md text-gray-100 text-lg font-medium py-2 block w-[100%] mx-auto cursor-pointer' value="CHECK ELIGIBILITY" />
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default HomeLoan;