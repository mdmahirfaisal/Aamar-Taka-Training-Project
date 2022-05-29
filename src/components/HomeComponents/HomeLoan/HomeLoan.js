import React from 'react';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoanType, handleProfessionType, handleLoanPurpose } from '../../../redux/Slices/LoanSlice';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
import { useForm } from 'react-hook-form';


const professionOption = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business Man', value: 'Business Man' },
    { label: 'Land Lord', value: 'Land Lord' }
];
const loanPurposeOption = [
    { label: 'Apartment Buy', value: 'Apartment Buy' },
    { label: 'Construction', value: 'Construction' },
    { label: 'Land Buy', value: 'Land Buy' },
    { label: 'Renovation', value: 'Renovation' }
];
const loanTypeOption = [
    { label: 'New Loan', value: 'New Loan' },
    { label: 'Take Over', value: 'Take Over' }
];

//////// Class names 
const selectContainer = "w-full relative text-left";
const selectContainerError = "w-full relative text-left border border-red-500 rounded-md";

const HomeLoan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { professionType, loanPurpose, loanType } = useSelector(state => state.loan)
    const dispatch = useDispatch();
    const router = useRouter();

    const handLeHomeLoan = () => {
        router.push('/home-loan-eligibility')
    }
    const handleProfessionChange = (value) => {
        dispatch(handleProfessionType(value.value))
    }
    const handleLoanPurposeChange = (value) => {
        dispatch(handleLoanPurpose(value.value))
    }
    const handleLoanTypeChange = (value) => {
        dispatch(handleLoanType(value.value))
    }

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] py-10 lg:py-0 lg:py-[10vw] lg:min-h-[92vh] bg-[#1b5f8d]'>
                <div className="max-w-[1000px] mx-auto container2">
                    <h2 className='text-white text-2xl lg:text-3xl py-5'>We help you to get <span className='font-bold'>Home loan</span> easily</h2>
                    <form onSubmit={handleSubmit(handLeHomeLoan)} className="bg-[#ffffff34] rounded-lg p-2 md:p-5">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                            {/* Select Your Profession  */}
                            <div >
                                <div className={errors.professionSelect ? selectContainerError : selectContainer}>
                                    <CustomSelectField options={professionOption} onChange={handleProfessionChange} placeText={"Select Your Profession"} isSearchable={false} required={{ ...register("professionSelect", { required: professionType ? false : true }) }} />
                                </div>
                            </div>
                            {/* Select Loan purpose */}
                            <div>
                                <div className={errors.loanPurposeSelect ? selectContainerError : selectContainer}>
                                    <CustomSelectField options={loanPurposeOption} onChange={handleLoanPurposeChange} placeText={"Select Loan Purpose"} isSearchable={false} required={{ ...register("loanPurposeSelect", { required: loanPurpose ? false : true }) }} />
                                </div>
                            </div>
                            {/* Select Loan type  */}
                            <div >
                                <div className={errors.loanTypeSelect ? selectContainerError : selectContainer}>
                                    <CustomSelectField options={loanTypeOption} onChange={handleLoanTypeChange} placeText={"Select Loan Type"} isSearchable={false} required={{ ...register("loanTypeSelect", { required: loanType ? false : true }) }} />
                                </div>
                            </div>
                        </div>
                        {/* --- Button --- */}
                        <div className="grid grid-cols-2 gap-3 w-full py-4 ">
                            <input type="submit" className='loanButton hover:text-white bg-[#f4ca1f] rounded-md text-gray-900 text-md px-1 md:text-lg font-medium py-2 block w-[100%] mx-auto cursor-pointer' value="COMPARE RATE" />
                            <input type="submit" className='loanButton bg-[#3abaf4] rounded-md text-gray-100 text-md px-1 md:text-lg font-medium py-2 block w-[100%] mx-auto cursor-pointer' value="CHECK ELIGIBILITY" />
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default HomeLoan;