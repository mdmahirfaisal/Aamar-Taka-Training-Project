import React from 'react';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoanType, handleProfessionType } from '../../../redux/Slices/LoanSlice';
import { useRouter } from 'next/router';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
import { useForm } from 'react-hook-form';

// class names 
const inputContainerClassName = "bg-white flex items-center gap-2 py-[12px] pl-2 rounded-[2px]";
const inputContainerClassNameError = "bg-white flex items-center gap-2 py-[12px] pl-2 rounded-[2px] border border-red-500";

const professionOption = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business Man', value: 'Business Man' },
    { label: 'Land Lord', value: 'Land Lord' }];

const PersonalLoan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { professionType } = useSelector(state => state.loan)
    const router = useRouter();

    const handLePersonalLoan = (data) => {

        router.push('/personal-loan-eligibility')
    }
    const handleProfessionChange = (value) => {
        dispatch(handleProfessionType(value.value))
    }
    console.log(professionType);
    return (
        <>
            <NavigationBar />
            <div className='h-[100%] py-10 lg:py-0 lg:py-[10vw] lg:min-h-[92vh] bg-[#1b5f8d]'>

                <div className="max-w-[1000px] mx-auto container2">
                    <h2 className='text-white text-2xl lg:text-3xl p-2 md:p-5'>We help you to get <span className='font-bold'>personal loan</span> easily</h2>
                    <form onSubmit={handleSubmit(handLePersonalLoan)} className="bg-[#ffffff34] rounded-lg p-2 md:p-5">
                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3  ">
                            {/* Select Loan type  */}
                            <div className="">
                                <h5 className='text-lg md:text-xl text-white my-3 text-left md:text-center'>Select Loan Type</h5>
                                <div className="grid grid-cols-3 gap-2 md:gap-3">
                                    <div className={errors.loanTypeInput ? inputContainerClassNameError : inputContainerClassName}>
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} {...register("loanTypeInput", { required: true })} type="radio" id="newLoan" name="fav_language" value="New Loan" />
                                        <label className='cursor-pointer' htmlFor="newLoan">New Loan</label>
                                    </div>
                                    <div className={errors.loanTypeInput ? inputContainerClassNameError : inputContainerClassName}>
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} {...register("loanTypeInput", { required: true })} type="radio" id="takeOver" name="fav_language" value="Take Over" />
                                        <label className='cursor-pointer' htmlFor="takeOver">Take Over</label>
                                    </div>
                                    <div className={errors.loanTypeInput ? inputContainerClassNameError : inputContainerClassName}>
                                        <input onChange={(e) => dispatch(handleLoanType(e.target.value))} {...register("loanTypeInput", { required: true })} type="radio" id="topUp" name="fav_language" value="Top Up" />
                                        <label className='cursor-pointer' htmlFor="topUp">Top Up</label>
                                    </div>
                                </div>
                            </div>
                            {/* Select Your Profession  */}
                            <div className="">
                                <h5 className='text-lg md:text-xl text-white my-3 text-left md:text-center'>Select Your Profession</h5>
                                <div className={errors.professionSelect ? "w-full relative text-left border border-red-500 rounded-md" : "w-full relative text-left"}>
                                    <CustomSelectField options={professionOption} onChange={handleProfessionChange} placeText={"Select Your Profession"} isSearchable={false} required={{ ...register("professionSelect", { required: professionType ? false : true }) }} />
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