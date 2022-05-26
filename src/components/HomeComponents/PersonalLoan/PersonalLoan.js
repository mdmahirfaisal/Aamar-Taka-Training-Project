import React from 'react';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { useDispatch } from 'react-redux';
import { handleLoanType, handleProfessionType } from '../../../redux/Slices/LoanSlice';
import { useRouter } from 'next/router';
import CustomSelectField from '../CustomSelectField/CustomSelectField';

// class names 
const inputContainerClassName = "bg-white flex items-center gap-2 px-2 py-3 rounded-md";
const professionOption = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business Man', value: 'Business Man' },
    { label: 'Land Lord', value: 'Land Lord' }];

const PersonalLoan = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handLePersonalLoan = (e) => {
        e.preventDefault();
        router.push('/personal-loan-eligibility')
    }
    const handleProfessionChange = (value) => {
        dispatch(handleProfessionType(value.value))
    }

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] pb-10 lg:pb-0 lg:min-h-[92vh] bg-[#1b5f8d] grid place-items-center'>

                <div className="max-w-[1200px] mx-auto">
                    <h2 className='text-white text-2xl lg:text-3xl py-5'>We help you to get <span className='font-bold'>personal loan</span> easily</h2>
                    <form onSubmit={handLePersonalLoan} className="bg-[#ffffff34] rounded-lg p-5">
                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3  ">
                            {/* Select Loan type  */}
                            <div className="">
                                <h5 className='text-lg md:text-xl text-white my-3 text-left md:text-center'>Select Loan Type</h5>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className={inputContainerClassName}>
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} type="radio" id="newLoan" name="fav_language" value="New Loan" required />
                                        <label className='cursor-pointer' htmlFor="newLoan">New Loan</label>
                                    </div>
                                    <div className={inputContainerClassName}>
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} type="radio" id="takeOver" name="fav_language" value="Take Over" required />
                                        <label className='cursor-pointer' htmlFor="takeOver">Take Over</label>
                                    </div>
                                    <div className={inputContainerClassName}>
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} type="radio" id="topUp" name="fav_language" value="Top Up" required />
                                        <label className='cursor-pointer' htmlFor="topUp">Top Up</label>
                                    </div>
                                </div>
                            </div>
                            {/* Select Your Profession  */}
                            <div className="">
                                <h5 className='text-lg md:text-xl text-white my-3 text-left md:text-center'>Select Your Profession</h5>
                                <div className="w-full relative text-left">
                                    <CustomSelectField options={professionOption} onChange={handleProfessionChange} placeText={"Select Your Profession"} isSearchable={false} />
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

export default PersonalLoan;