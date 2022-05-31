import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
import { handleCompanyName, handleCompanyType, handleJobStatus, handleCurrentExperience, handleTotalExperience, handleBusinessCompanyType, handleBusinessSharePercents, handleBusinessCategory, handleBusinessType, handleLandLordDetails } from '../../../redux/Slices/LoanSlice';
import { BsPercent } from 'react-icons/bs';

/// company types options
const companyTypeOptions = [
    { label: "School & College", value: 1 },
    { label: "National University", value: 2 },
    { label: "international University", value: 3 },
    { label: "English Medium School", value: 4 },
    { label: "Private University", value: 5 },
    { label: "Public University", value: 6 },
    { label: "Public Medical College & Hospital", value: 7 },
    { label: "Private Medical College & Hospital", value: 8 },
    { label: "Hospital", value: 9 },
    { label: "Government", value: 10 },
    { label: "Semi Government ", value: 11 },
    { label: "Autonomous", value: 12 },
    { label: "Other", value: 13 },
    { label: "Bank", value: 14 },
    { label: "Financial Institution", value: 15 },
    { label: "Insurance Company", value: 16 },
    { label: "Investment & Securities Company ", value: 17 },
    { label: "Asset Management Co./Brokerage House", val: 18 },
    { label: "NGO", value: 19 },
    { label: "Multinational Company", value: 20 },
    { label: "Telecommunication Company", value: 21 },
    { label: "Pharmaceuticals", value: 22 },
    { label: "RMG", value: 23 },
    { label: "Garments Buying House", value: 24 },
    { label: "Real Estate Company", value: 25 },
    { label: "IT Company", value: 26 },
    { label: "Internet Service Provider Company", value: 27 },
    { label: "Embassy", value: 28 },
    { label: "Newspaper", value: 29 },
    { label: "TV Channel", value: 30 },
    { label: "Airlines", value: 31 },
    { label: "Club", value: 32 },
    { label: "Food & Beverage Company", value: 33 },
    { label: "Cement Company", value: 34 },
    { label: "Tour & Travel Agency", value: 35 },
    { label: "Feed Company", value: 36 },
    { label: "Paints Company", value: 37 },
    { label: "Furniture", value: 38 },
    { label: "Solar Company", value: 39 },
    { label: "Hotel", value: 40 },
    { label: "Shipping Industry", value: 41 },
    { label: "Interior Design Company", value: 42 },
    { label: "Consultancy Firm", value: 43 },
    { label: "Chartered Accountant Firm", value: 44 },
    { label: "UN Organization", value: 45 },
    { label: "Advertising Agency", value: 46 },
    { label: "International Organization", value: 47 },
    { label: "Foreign NGO", value: 48 },
    { label: "Army", value: 49 },
    { label: "Navy", value: 50 },
    { label: "Air Force", value: 51 },
    { label: "Police", value: 52 },
];

// job status options
const jobStatusOptions = [
    { label: "Permanent", value: 1 },
    { label: "Contractual", value: 2 },
    { label: "Probationary", value: 3 }
];

// job experience options
const yearsOfExperience = [
    { label: "0 Years", value: 0 },
    { label: "1 Years", value: 1 },
    { label: "2 Years", value: 2 },
    { label: "3 Years", value: 3 },
    { label: "4 Years", value: 4 },
    { label: "5 Years", value: 5 },
    { label: "6 Years", value: 6 },
    { label: "7 Years", value: 7 },
    { label: "8 Years", value: 8 },
    { label: "9 Years", value: 9 },
    { label: "10 Years", value: 10 },
    { label: "11 Years", value: 11 },
    { label: "12 Years", value: 12 },
    { label: "13 Years", value: 13 },
    { label: "14 Years", value: 14 },
    { label: "15 Years", value: 15 },
    { label: "16 Years", value: 16 },
    { label: "17 Years", value: 17 },
    { label: "18 Years", val: 18 },
    { label: "19 Years", value: 19 },
    { label: "20 Years", value: 20 },
    { label: "21 Years", value: 21 },
    { label: "22 Years", value: 22 },
    { label: "23 Years", value: 23 },
    { label: "24 Years", value: 24 },
    { label: "25 Years", value: 25 },
    { label: "26 Years", value: 26 },
    { label: "27 Years", value: 27 },
    { label: "28 Years", value: 28 },
    { label: "29 Years", value: 29 },
    { label: "30 Years", value: 30 },
];
const monthsOfExperience = [
    { label: "1 Month", value: 1 },
    { label: "2 Month", value: 2 },
    { label: "3 Month", value: 3 },
    { label: "4 Month", value: 4 },
    { label: "5 Month", value: 5 },
    { label: "6 Month", value: 6 },
    { label: "7 Month", value: 7 },
    { label: "8 Month", value: 8 },
    { label: "9 Month", value: 9 },
    { label: "10 Month", value: 10 },
    { label: "11 Month", value: 11 }
];

const businessCategoryOptions = [
    { label: "Plant and Process", value: 1 },
    { label: "Manufacture", value: 2 },
    { label: "Importer", value: 3 },
    { label: "Exporter", value: 4 },
    { label: "Whole Seller", value: 5 },
    { label: "Retailer", value: 6 },
    { label: "Service Sector", value: 7 }
];
const businessCompanyTypeOptions = [
    { label: "Private Ltd.", value: 1 },
    { label: "Partnership", value: 2 },
    { label: "Proprietorship", value: 3 }
];

//// class names 
const selectHouseInputBoxContainer = "w-full mx-auto relative min-h-[130px] grid place-content-center h-[14vh] border border-gray-200 hover:bg-[#00bef2] text-[#696969] hover:text-white cursor-pointer rounded-md transition-all duration-100";
const selectHouseInputBoxContainerChecked = "w-full mx-auto relative min-h-[130px] grid place-content-center h-[14vh] bg-[#00bef2] text-white cursor-pointer rounded-md transition-all duration-100";

const selectContainerClassName = "w-full relative text-left";
const selectContainerClassNameError = "w-full relative text-left border border-red-500 rounded-md";


const FormSecondStep = ({ formStepValue, register, errors }) => {
    const dispatch = useDispatch();
    const { professionType, landLordDetails, jobDetails, businessDetails } = useSelector(state => state.loan);
    const { companyName, companyType, jobStatus, currentExperience, totalExperience } = jobDetails;
    const { businessCompanyType, businessSharePercents, businessCategory, businessType } = businessDetails;
    const { tinShedHouse, semiPaka, buildingWithPlan, buildingWithoutPlan } = landLordDetails;


    const [searchText, setSearchText] = useState("");
    const [companyNameOptions, setCompanyNameOptions] = useState([])


    /// Profession type salaried details control
    const handleInputChange = text => {
        setSearchText(text);
        console.log(text);
    }
    useEffect(() => {
        fetch(`https://api.aamartaka.com/client/company/?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setCompanyNameOptions(data?.results?.name)
            })
            .catch(err => console.log(err))
    }, [searchText])

    const handleCompanyNameChange = value => {
        dispatch(handleCompanyName(value.label))
    };
    const handleCompanyTypeChange = value => {
        dispatch(handleCompanyType(value.label))
    };
    const handleJobStatusChange = value => {
        dispatch(handleJobStatus(value.label))
    };
    const handleCurrentExpYear = value => {
        dispatch(handleCurrentExperience({ name: "year", value: value.label }))
    };
    const handleCurrentExpMonth = value => {
        dispatch(handleCurrentExperience({ name: "month", value: value.label }))
    };
    const handleTotalExpYear = value => {
        dispatch(handleTotalExperience({ name: "year", value: value.label }))
    };
    const handleTotalExpMonth = value => {
        dispatch(handleTotalExperience({ name: "month", value: value.label }))
    };

    //// profession type businessman control


    //// profession type land lord control
    const handleBusinessCompanyTypeChange = (value) => {
        console.log(value);
        dispatch(handleBusinessCompanyType(value.label))
    }

    const handleSharePercentChange = () => {

    }
    const handleBusinessCategoryChange = (value) => {
        console.log(value);
        dispatch(handleBusinessCategory(value.label))
    }
    const handleBusinessChange = (value) => {
        console.log(value);
        dispatch(handleBusinessType(value.label))
    }


    return (
        <>
            {/* ----- Your Profession type Salaried -----  */}
            {professionType === "Salaried" && <>
                {/* -- Company Name -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0 '>Company Name</p>
                    <div className="md:w-[70%]">
                        <div className={errors.companyNameSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={companyTypeOptions} onChange={handleCompanyNameChange} placeText={companyName ? companyName : "Start Typing Here..."} isSearchable={true} onInputChange={handleInputChange} required={{ ...register("companyNameSelect", { required: (professionType === "Salaried" && !companyName) ? true : false }) }} />
                        </div>
                    </div>
                </div>

                {/* -- Company Type -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0 '>Company Type</p>
                    <div className="md:w-[70%]">
                        <div className={errors.companyTypeSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={companyTypeOptions} onChange={handleCompanyTypeChange} placeText={companyType ? companyType : "Select Your Company Type"} isSearchable={false} required={{ ...register("companyTypeSelect", { required: (professionType === "Salaried" && !companyType) ? true : false }) }} />
                        </div>
                    </div>
                </div>

                {/* -- Job Status -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0 '>Job Status</p>
                    <div className="md:w-[70%]">
                        <div className={errors.jobStatusSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={jobStatusOptions} onChange={handleJobStatusChange} placeText={jobStatus ? jobStatus : "Select Job Status"} isSearchable={false} required={{ ...register("jobStatusSelect", { required: (professionType === "Salaried" && !jobStatus) ? true : false }) }} />
                        </div>
                    </div>
                </div>

                {/* -- Current Experience -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Job Experience (Current)</p>
                    <div className="md:w-[70%] grid grid-cols-2 gap-3">
                        <div className={errors.currentYearSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={yearsOfExperience} onChange={handleCurrentExpYear} placeText={currentExperience.year ? currentExperience.year : "Select Year"} isSearchable={false} required={{ ...register("currentYearSelect", { required: (professionType === "Salaried" && !currentExperience.year) ? true : false }) }} />
                        </div>
                        <div className={errors.currentMonthSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={monthsOfExperience} onChange={handleCurrentExpMonth} placeText={currentExperience.month ? currentExperience.month : "Select Month"} isSearchable={false} required={{ ...register("currentMonthSelect", { required: (professionType === "Salaried" && !currentExperience.month) ? true : false }) }} />
                        </div>
                    </div>
                </div>

                {/* -- Total Experience -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Job Experience (Total)</p>
                    <div className="md:w-[70%] grid grid-cols-2 gap-3">
                        <div className={errors.totalYearSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={yearsOfExperience} onChange={handleTotalExpYear} placeText={totalExperience.year ? totalExperience.year : "Select Year"} isSearchable={false} required={{ ...register("totalYearSelect", { required: (professionType === "Salaried" && !totalExperience.year) ? true : false }) }} />
                        </div>
                        <div className={errors.totalMonthSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={monthsOfExperience} onChange={handleTotalExpMonth} placeText={totalExperience.month ? totalExperience.month : "Select Month"} isSearchable={false} required={{ ...register("totalMonthSelect", { required: (professionType === "Salaried" && !totalExperience.month) ? true : false }) }} />
                        </div>
                    </div>
                </div>
            </>}

            {/* ----- Your Profession type Business man -----  */}
            {professionType === "Business Man" && <>
                {/* -- Company Type -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Your Company Type</p>
                    <div className="md:w-[70%]">
                        <div className={errors.businessCompanyTypeSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={businessCompanyTypeOptions} onChange={handleBusinessCompanyTypeChange} placeText={businessCompanyType ? businessCompanyType : "Select Type"} isSearchable={false} required={{ ...register("businessCompanyTypeSelect", { required: (professionType === "Business Man" && !businessCompanyType) ? true : false }) }} />
                        </div>
                    </div>
                </div>

                {(businessCompanyType === "Private Ltd." || businessCompanyType === "Partnership") && <div className="ml-3 my-3">
                    <div className="md:w-[70%] md:ml-auto">
                        <div className={errors.sharePercentSelect ? "w-full text-left flex border border-red-500 rounded-md" : "w-full text-left flex border border-gray-300"}>
                            <input onChange={(e) => dispatch(handleBusinessSharePercents(parseInt(e.target.value)))} {...register("sharePercentSelect", { required: (businessCompanyType === "Private Ltd." || businessCompanyType === "Partnership") ? true : false })} className='grow pl-2 py-3 bg-white focus:outline-none' type="number" placeholder="Share Portion" defaultValue={businessSharePercents && businessSharePercents} />
                            <div className='flex none w-12 h-12 text-center bg-[#e4e3e3] grid place-items-center'><BsPercent className='text-[#434343] text-[17px]' /> </div>
                        </div>
                    </div>
                </div>}

                {/* -- Company category -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Your Business Category</p>
                    <div className="md:w-[70%]">
                        <div className={errors.businessCtgSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={businessCategoryOptions} onChange={handleBusinessCategoryChange} placeText={businessCategory ? businessCategory : "Select Business Category"} isSearchable={false} required={{ ...register("businessCtgSelect", { required: (professionType === "Business Man" && !businessCategory) ? true : false }) }} />
                        </div>
                    </div>
                </div>

                {/* -- business type -- */}
                <div className="ml-3 my-3 md:flex items-center">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0'>Your Business Type</p>
                    <div className="md:w-[70%]">
                        <div className={errors.businessTypeSelect ? selectContainerClassNameError : selectContainerClassName}>
                            <CustomSelectField options={companyTypeOptions} onChange={handleBusinessChange} placeText={businessType ? businessType : "Select Business Type"} isSearchable={false} required={{ ...register("businessTypeSelect", { required: (professionType === "Business Man" && !businessType) ? true : false }) }} />
                        </div>
                    </div>
                </div>
            </>}


            {/* ----- Your Profession type Land lord -----  */}
            {professionType === "Land Lord" && <>
                <div className="ml-3 my-3 md:flex gap-5">
                    <p className='md:w-[30%] text-[#696969] text-[16px] font-medium text-left mb-1 md:mb-0 '>Please Select Your House Type</p>
                    <div className="md:w-[70%] grid grid-cols-2 gap-5">
                        <div onClick={() => dispatch(handleLandLordDetails({ name: "tinShed", value: !tinShedHouse }))} className={tinShedHouse ? selectHouseInputBoxContainerChecked : selectHouseInputBoxContainer}>
                            <input type="checkbox" checked={tinShedHouse} className='absolute top-3 left-3' />
                            <p className='relative text-[15px]'>Tin Shed House</p>
                        </div>

                        <div onClick={() => dispatch(handleLandLordDetails({ name: "semiPaka", value: !semiPaka }))} className={semiPaka ? selectHouseInputBoxContainerChecked : selectHouseInputBoxContainer}>
                            <input type="checkbox" checked={semiPaka} className='absolute top-3 left-3' />
                            <p className='relative text-[15px]'>Semi-Paka</p>
                        </div>

                        <div onClick={() => dispatch(handleLandLordDetails({ name: "withPlan", value: !buildingWithPlan }))} className={buildingWithPlan ? selectHouseInputBoxContainerChecked : selectHouseInputBoxContainer}>
                            <input type="checkbox" checked={buildingWithPlan} className='absolute top-3 left-3' />
                            <p className='relative text-[15px]'>Building With Plan</p>
                        </div>

                        <div onClick={() => dispatch(handleLandLordDetails({ name: "withoutPlan", value: !buildingWithoutPlan }))} className={buildingWithoutPlan ? selectHouseInputBoxContainerChecked : selectHouseInputBoxContainer}>
                            <input type="checkbox" checked={buildingWithoutPlan} className='absolute top-3 left-3' />
                            <p className='relative text-[15px]'>Building Without Plan</p>
                        </div>
                    </div>
                </div>
            </>}

        </>
    );
};

export default FormSecondStep;