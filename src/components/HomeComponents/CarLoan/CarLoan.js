import React from 'react';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { handleProfessionType, handleCarType } from '../../../redux/Slices/LoanSlice';
import { useRouter } from 'next/router';


/// select field class names
const SelectFieldClassName = "cursor-pointer form-select appearance-none block w-full pl-1 lg:pl-3 py-[11px] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition-all ease-in-out duration-700 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none ";

const CarLoan = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handLeCarLoan = (e) => {
        e.preventDefault();
        router.push('/car-loan-eligibility')
    }

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] pb-10 lg:pb-0 lg:min-h-[92vh] bg-[#1b5f8d] grid place-items-center'>
                <div className="md:min-w-[700px] lg:min-w-[1000px] lg:max-w-[1200px] mx-auto">

                    <h2 className='text-white text-2xl lg:text-3xl py-5'>We help you to get <span className='font-bold'>Car loan</span> easily</h2>
                    <form onSubmit={handLeCarLoan} className="bg-[#ffffff34] rounded-lg p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">

                            {/* Select Car Type */}
                            <div >
                                <div className="w-full relative">
                                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                    <select onChange={(e) => dispatch(handleCarType(e.target.value))} defaultValue={''} className={SelectFieldClassName} required>
                                        <option className='hidden' value="">Select Car Type</option>
                                        <option value="New Car">New Car</option>
                                        <option value="Used Car">Used Car</option>
                                        <option value="Recondition Car">Recondition Car</option>
                                    </select>
                                </div>
                            </div>
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

export default CarLoan;