import React from 'react';
import NavigationBar from '../../SharedComponents/NavigationBar/NavigationBar';
import Footer from '../../SharedComponents/Footer/Footer';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { handleProfessionType, handleCarType } from '../../../redux/Slices/LoanSlice';
import { useRouter } from 'next/router';
import CustomSelectField from '../CustomSelectField/CustomSelectField';

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

const CarLoan = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handLeCarLoan = (e) => {
        e.preventDefault();
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
                    <form onSubmit={handLeCarLoan} className="bg-[#ffffff34] rounded-lg p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">

                            {/* Select Car Type */}
                            <div >
                                <div className="w-full relative text-left">
                                    <CustomSelectField options={carTypeOption} onChange={handleCarTypeChange} placeText={"Select Car Type"} isSearchable={false} />
                                </div>
                            </div>
                            {/* Select Your Profession  */}
                            <div >
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

export default CarLoan;