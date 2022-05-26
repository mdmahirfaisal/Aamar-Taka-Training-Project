import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { RiArrowRightSLine } from 'react-icons/ri';
import DateOfBirthFilter from './DateOfBirthFilter';
import { handleGenderType, handleProfessionType, handleResidenceType, handleLocation } from '../../../redux/Slices/LoanSlice';
import CustomSelectField from '../CustomSelectField/CustomSelectField';

/// Select field options ///
const professionOption = [
    { label: 'Salaried', value: 'Salaried' },
    { label: 'Business Man', value: 'Business Man' },
    { label: 'Land Lord', value: 'Land Lord' }];

const residenceOption = [
    { label: 'Self-Owned Home', value: 'Self-Owned Home' },
    { label: 'Rented Home', value: 'Rented Home' },
    { label: 'Company Provided', value: 'Company Provided' }];

const bangladeshDivisions = [
    { label: "Dhaka", value: "Dhaka" },
    { label: "Chittagong", value: "Chittagong" },
    { label: "Khulna", value: "Khulna" },
    { label: "Rajshahi", value: "Rajshahi" },
    { label: "Sylhet", value: "Sylhet" },
    { label: "Barishal", value: "Barishal" },
    { label: "Rangpur", value: "Rangpur" },
    { label: "Mymensing", value: "Mymensing" }];


const FormFirstStep = () => {
    const dispatch = useDispatch();

    const { professionType, residenceType, genderType, location } = useSelector(state => state.loan)
    console.log(location);

    const handleProfession = value => {
        dispatch(handleProfessionType(value.value))
    };
    const handleResidency = value => {
        dispatch(handleResidenceType(value.value))
    };
    const handleDivisions = value => {
        dispatch(handleLocation(value.value))
    };

    return (
        <>
            {/* ----- Gender -----  */}
            <div className="ml-3 my-3 flex items-center">
                <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Gender</p>
                <div className="w-[70%] grid grid-cols-3">
                    <div className="grow bg-white flex items-center gap-2 p-2 border rounded-[1px]">
                        <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="newLoan" checked={genderType === "Male" && genderType} value="Male" name='gender' required={genderType ? false : true} />
                        <label className='cursor-pointer' htmlFor="newLoan">Male</label>
                    </div>
                    <div className="grow bg-white flex items-center gap-2 p-2 border rounded-[1px]">
                        <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="takeOver" checked={genderType === "Female" && genderType} value="Female" name='gender' required={genderType ? false : true} />
                        <label className='cursor-pointer' htmlFor="takeOver">Female</label>
                    </div>
                    <div className="grow bg-white flex items-center gap-2 p-2 border rounded-[1px]">
                        <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="topUp" checked={genderType === "Other" && genderType} value="Other" name='gender' required={genderType ? false : true} />
                        <label className='cursor-pointer' htmlFor="topUp">Other</label>
                    </div>
                </div>
            </div>
            {/* ----- Date of Birth -----  */}
            <DateOfBirthFilter />

            {/* ----- Your Profession type -----  */}
            <div className="ml-3 my-3 flex items-center">
                <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Profession</p>
                <div className="w-[70%]">
                    <div className="w-full text-left">
                        <CustomSelectField options={professionOption} onChange={handleProfession} placeText={professionType ? professionType : "Select Your Profession"} isSearchable={false} required />
                    </div>
                </div>
            </div>

            {/* ----- Your Residence Type -----  */}
            <div className="ml-3 my-3 flex items-center">
                <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Residence Type</p>
                <div className="w-[70%]">
                    <div className="w-full text-left">
                        <CustomSelectField options={residenceOption} onChange={handleResidency} placeText={residenceType || "Select Residence Type"} isSearchable={false} required />
                    </div>
                </div>
            </div>

            {/* ----- Your division -----  */}
            <div className=" ml-3 my-3 flex items-center">
                <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>{professionType === "Salaried" ? "Job Location" : professionType === "Business Man" ? "Business Location" : ""}</p>
                <div className="w-[70%]">
                    <div className={professionType === "Land Lord" ? "hidden" : "w-full relative text-left"}>
                        <CustomSelectField options={bangladeshDivisions} onChange={handleDivisions} placeText={location || "Select Division"} isSearchable={false} required />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormFirstStep;