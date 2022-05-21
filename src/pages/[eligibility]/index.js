import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsCircle } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/SharedComponents/Footer/Footer';
import NavigationBar from '../../components/SharedComponents/NavigationBar/NavigationBar';
import { handleProfessionType, handleGenderType, handleLocation, handleResidenceType } from '../../redux/Slices/LoanSlice';

import DisplayFilterData from '../../components/HomeComponents/Eligibilities/DisplayFilterData/DisplayFilterData';
import DateOfBirthFilter from '../../components/HomeComponents/Eligibilities/DateOfBirthFilter';


//// Class names control ////
const stepsTextClassNames = "text-[12px] font-medium text-[#585858]";
const stepsIconClassNames = 'mx-auto text-[22px] text-[#b8b8b8]';
const stepsDoneIconClassNames = 'mx-auto text-[22px] text-[#0ab9f2]';
const stepsBorderClassNames = 'grow border-b-[3px] border-[#b8b8b8]';
const stepsDoneBorderClassNames = 'grow border-b-[3px] border-[#0ab9f2]';

// birth select class
const SelectFieldClassNames = "cursor-pointer form-select appearance-none block w-full px-3 py-[11px] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:outline-none ";
// gender input class 
const genderInputClassNames = 'border-2 border-[#00bdf2] w-5 h-5 checked:bg-[#00bdf2] cursor-pointer transition-all duration-700';
const bangladeshDivisions = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Mymensing"]


const Index = () => {
    const [isEligibilityStep2, setIsEligibilityStep2] = useState(false);

    const dispatch = useDispatch();
    const { professionType } = useSelector(state => state.loan);
    const router = useRouter();
    const eligibility = router?.query?.eligibility

    let elgHeaderImg = null;
    let elgHeaderTitle = null;
    let productType = null;

    if (eligibility === "personal-loan-eligibility") {
        elgHeaderImg = "https://www.aamartaka.com/images/personal-loan.png"
        elgHeaderTitle = "Personal Loan Eligibility"
        productType = "Personal Loan"
    }
    else if (eligibility === "home-loan-eligibility") {
        elgHeaderImg = "https://www.aamartaka.com/images/Home_Eligibility.png"
        elgHeaderTitle = "Home Loan Eligibility"
        productType = "Home Loan"
    }
    else if (eligibility === "car-loan-eligibility") {
        elgHeaderImg = "https://www.aamartaka.com/images/car-loan.png"
        elgHeaderTitle = "Car Loan Eligibility"
        productType = "Car Loan"
    };

    const handleEligibilityStep = (e) => {
        e.preventDefault();
        if (!isEligibilityStep2) {
            setIsEligibilityStep2(true);
        }
        console.log(isEligibilityStep2);
    }


    return (
        <>
            <NavigationBar />
            <div className='h-[100%] py-10 lg:py-0 lg:pt-[10vw] lg:min-h-[92vh] bg-[#1b5f8d]'>

                <div className="max-w-[1200px] mx-auto">

                    <div className="grid grid-cols-5 gap-3 container2">
                        {/* -------- Left Form items -------- */}
                        <div className="col-span-5 md:col-span-3 bg-[#effaff] rounded-md p-1">
                            <div className="bg-[#008ecc] flex items-center gap-2 rounded-md">
                                <img className='w-[51px] h-[50px] ' src={elgHeaderImg} alt="Eligibility" />

                                <h5 className='text-white font-medium text-[20px]'>{elgHeaderTitle}</h5>
                            </div>

                            {/* ------- Steps number 1 border success control ------- */}
                            <div className="mt-1 px-2">
                                <div className="flex items-center justify-between">
                                    <p className={stepsTextClassNames}>STEP-1 </p>
                                    <p className={stepsTextClassNames}>STEP-2 </p>
                                    <p className={stepsTextClassNames}>STEP-3</p>
                                    <p className={stepsTextClassNames}>STEP-4 </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                    <p className={stepsDoneBorderClassNames} />
                                    <BsCircle className={stepsIconClassNames} />
                                    <p className={stepsBorderClassNames} />
                                    <BsCircle className={stepsIconClassNames} />
                                    <p className={stepsBorderClassNames} />
                                    <BsCircle className={stepsIconClassNames} />
                                </div>
                            </div>

                            {/* ------- Steps number 1 filters control ------- */}

                            <form onSubmit={handleEligibilityStep}>
                                {/* ----- Gender -----  */}
                                <div className="ml-3 my-3 flex items-center">
                                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Gender</p>
                                    <div className="w-[70%] grid grid-cols-3">
                                        <div className="grow bg-white flex items-center gap-2 p-2 border rounded-[1px]">
                                            <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="newLoan" value="Male" name='gender' className={genderInputClassNames} required />
                                            <label className='cursor-pointer' htmlFor="newLoan">Male</label>
                                        </div>
                                        <div className="grow bg-white flex items-center gap-2 p-2 border rounded-[1px]">
                                            <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="takeOver" value="Female" name='gender' className={genderInputClassNames} required />
                                            <label className='cursor-pointer' htmlFor="takeOver">Female</label>
                                        </div>
                                        <div className="grow bg-white flex items-center gap-2 p-2 border rounded-[1px]">
                                            <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="topUp" value="Other" name='gender' className={genderInputClassNames} required />
                                            <label className='cursor-pointer' htmlFor="topUp">Other</label>
                                        </div>
                                    </div>
                                </div>

                                {/* ----- Date of Birth -----  */}
                                <DateOfBirthFilter />

                                {/* ----- Your Profession -----  */}
                                <div className="ml-3 my-3 flex items-center">
                                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Profession</p>
                                    <div className="w-[70%]">
                                        <div className="w-full relative">
                                            <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                            <select onChange={(e) => dispatch(handleProfessionType(e.target.value))} defaultValue={professionType} className={SelectFieldClassNames} required>
                                                <option className='hidden' value="">Select Your Profession...</option>
                                                <option value="Salaried">Salaried</option>
                                                <option value="Business Man">Business Man</option>
                                                <option value="Land Lord">Land Lord</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* ----- Your Residence Type -----  */}
                                <div className="ml-3 my-3 flex items-center">
                                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Residence Type</p>
                                    <div className="w-[70%]">
                                        <div className="w-full relative">
                                            <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                            <select onChange={(e) => dispatch(handleResidenceType(e.target.value))} defaultValue="" className={SelectFieldClassNames} required>
                                                <option className='hidden' value="">Select Your Residence Type</option>
                                                <option value="Self-Owned Home">Self-Owned Home</option>
                                                <option value="Rented Home">Rented Home</option>
                                                <option value="Company Provided">Company Provided</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* ----- Your division -----  */}
                                <div className=" ml-3 my-3 flex items-center">
                                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>{professionType === "Salaried" ? "Job Location" : professionType === "Business Man" ? "Business Location" : ""}</p>
                                    <div className="w-[70%]">
                                        <div className={professionType === "Land Lord" ? "invisible" : "w-full relative"}>
                                            <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                                            <select onChange={(e) => dispatch(handleLocation(e.target.value))} defaultValue="" className={SelectFieldClassNames} required>
                                                <option className='hidden' value="">Select Division</option>
                                                {bangladeshDivisions?.map(division => <option
                                                    key={division}
                                                    value={division}>{division}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[70%] ml-auto">
                                    <button className="w-[50%] mx-auto py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">NEXT <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>
                                </div>

                            </form>
                        </div>

                        {/* ------- Right side display data -------  */}
                        <div className="col-span-5 md:col-span-2 bg-[#effaff] rounded-lg p-2">
                            <DisplayFilterData productType={productType} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Index;