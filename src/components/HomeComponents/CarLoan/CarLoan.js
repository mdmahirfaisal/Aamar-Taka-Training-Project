import React from 'react';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfessionType, handleCarType } from '../../../redux/Slices/LoanSlice';
import { useRouter } from 'next/router';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
import { useForm } from 'react-hook-form';

const professionOption = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business Man', value: 'Business Man' },
    { label: 'Land Lord', value: 'Land Lord' }
];
const carTypeOption = [
    { label: 'New Car', value: 'New Car' },
    { label: 'Used Car', value: 'Used Car' },
    { label: 'Recondition Car', value: 'Recondition Car' }
];

//////// Class names 
const selectContainer = "w-full relative text-left";
const selectContainerError = "w-full relative text-left border border-red-500 rounded-md";

const CarLoan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { professionType, carType } = useSelector(state => state.loan);
    const router = useRouter();

    const handLeCarLoan = () => {
        router.push('/car-loan-eligibility')
    }

    const handleCarTypeChange = (value) => {
        dispatch(handleCarType(value.value))
    }
    const handleProfessionChange = (value) => {
        dispatch(handleProfessionType(value.value))
    }

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] py-10 lg:py-0 lg:py-[10vw] lg:min-h-[92vh] bg-[#1b5f8d]'>
                <div className="max-w-[1000px] mx-auto container">

                    <h2 className='text-white text-2xl lg:text-3xl py-5'>We help you to get <span className='font-bold'>Car loan</span> easily</h2>
                    <form onSubmit={handleSubmit(handLeCarLoan)} className="bg-[#ffffff34] rounded-lg p-2 md:p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">

                            {/* Select Car Type */}
                            <div >
                                <div className={errors.carSelect ? selectContainerError : selectContainer}>
                                    <CustomSelectField options={carTypeOption} onChange={handleCarTypeChange} placeText={"Select Car Type"} isSearchable={false} required={{ ...register("carSelect", { required: carType ? false : true }) }} />
                                </div>
                            </div>
                            {/* Select Your Profession  */}
                            <div >
                                <div className={errors.professionSelect ? selectContainerError : selectContainer}>
                                    <CustomSelectField options={professionOption} onChange={handleProfessionChange} placeText={"Select Your Profession"} isSearchable={false} required={{ ...register("professionSelect", { required: professionType ? false : true }) }} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 w-full py-4 ">
                            <input type="submit" className='loanButton hover:text-white bg-[#f4ca1f] rounded-md text-gray-900 text-lg font-medium px-1 py-2 block w-[100%] mx-auto cursor-pointer' value="COMPARE RATE" />
                            <input type="submit" className='loanButton bg-[#3abaf4] rounded-md text-gray-100 text-lg font-medium px-1 py-2 block w-[100%] mx-auto cursor-pointer' value="CHECK ELIGIBILITY" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CarLoan;