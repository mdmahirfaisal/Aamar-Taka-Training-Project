import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

// class names 
const inputContainerClassName = "bg-white flex items-center gap-2 py-[12px] pl-2 border rounded-[2px]";
const inputContainerClassNameError = "bg-white flex items-center gap-2 py-[12px] pl-2 border rounded-[2px] border border-red-500 rounded-md";
const selectContainerClassName = "w-full relative text-left";
const selectContainerClassNameError = "w-full relative text-left border border-red-500 rounded-md";


const FormFirstStep = ({ register, errors }) => {
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
    console.log(genderType);

    return (
        <>
            {/* ----- Gender -----  */}
            <div className="ml-3 my-3 flex items-center">
                <p className='hidden md:block md:w-[30%] text-[#696969] text-[16px] font-medium text-left '>Gender</p>
                <div className="w-[100%] md:w-[70%] grid grid-cols-3">
                    <div className={errors.gender ? inputContainerClassNameError : inputContainerClassName}>
                        <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="newLoan" {...register("gender", { required: true })} defaultChecked={genderType === "Male" && genderType} value="Male" />
                        <label className='cursor-pointer' htmlFor="newLoan">Male</label>
                    </div>
                    <div className={errors.gender ? inputContainerClassNameError : inputContainerClassName}>
                        <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="takeOver" {...register("gender", { required: true })} defaultChecked={genderType === "Female" && genderType} value="Female" />
                        <label className='cursor-pointer' htmlFor="takeOver">Female</label>
                    </div>
                    <div className={errors.gender ? inputContainerClassNameError : inputContainerClassName}>
                        <input onChange={(e) => dispatch(handleGenderType(e.target.value))} type="radio" id="topUp" {...register("gender", { required: true })} defaultChecked={genderType === "Other" && genderType} value="Other" />
                        <label className='cursor-pointer' htmlFor="topUp">Other</label>
                    </div>
                </div>
            </div>
            {/* ----- Date of Birth -----  */}
            <DateOfBirthFilter register={register} errors={errors} />

            {/* ----- Your Profession type -----  */}
            <div className="ml-3 my-3 md:flex items-center">
                <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Your Profession</p>
                <div className="md:w-[70%]">
                    <div className={errors.professionSelect ? selectContainerClassNameError : selectContainerClassName}>
                        <CustomSelectField options={professionOption} onChange={handleProfession} placeText={professionType ? professionType : "Select Your Profession"} isSearchable={false} required={{ ...register("professionSelect", { required: professionType ? false : true }) }} />
                    </div>
                </div>
            </div>

            {/* ----- Your Residence Type -----  */}
            <div className="ml-3 my-3 md:flex items-center">
                <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Your Residence Type</p>
                <div className="md:w-[70%]">
                    <div className={errors.residenceSelect ? selectContainerClassNameError : selectContainerClassName}>
                        <CustomSelectField options={residenceOption} onChange={handleResidency} placeText={residenceType || "Select Residence Type"} isSearchable={false} required={{ ...register("residenceSelect", { required: residenceType ? false : true }) }} />
                    </div>
                </div>
            </div>

            {/* ----- Your division -----  */}
            <div className=" ml-3 my-3 md:flex items-center">
                <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>{professionType === "Salaried" ? "Job Location" : professionType === "Business Man" ? "Business Location" : ""}</p>
                <div className="md:w-[70%]">
                    <div className={errors.locationSelect ? professionType === "Land Lord" ? "hidden" : selectContainerClassNameError : professionType === "Land Lord" ? "hidden" : selectContainerClassName}>
                        <CustomSelectField options={bangladeshDivisions} onChange={handleDivisions} placeText={location || "Select Division"} isSearchable={false} required={{ ...register("locationSelect", { required: (location || professionType === "Land Lord") ? false : true }) }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormFirstStep;