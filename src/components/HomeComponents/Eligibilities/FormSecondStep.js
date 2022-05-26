import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
import { handleProfessionType, } from '../../../redux/Slices/LoanSlice';

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
    { label: "0 Year", value: 0 },
    { label: "1 Year", value: 1 },
    { label: "2 Year", value: 2 },
    { label: "3 Year", value: 3 },
    { label: "4 Year", value: 4 },
    { label: "5 Year", value: 5 },
    { label: "6 Year", value: 6 },
    { label: "7 Year", value: 7 },
    { label: "8 Year", value: 8 },
    { label: "9 Year", value: 9 },
    { label: "10 Year", value: 10 },
    { label: "11 Year", value: 11 },
    { label: "12 Year", value: 12 },
    { label: "13 Year", value: 13 },
    { label: "14 Year", value: 14 },
    { label: "15 Year", value: 15 },
    { label: "16 Year", value: 16 },
    { label: "17 Year", value: 17 },
    { label: "18 Year", val: 18 },
    { label: "19 Year", value: 19 },
    { label: "20 Year", value: 20 },
    { label: "21 Year", value: 21 },
    { label: "22 Year", value: 22 },
    { label: "23 Year", value: 23 },
    { label: "24 Year", value: 24 },
    { label: "25 Year", value: 25 },
    { label: "26 Year", value: 26 },
    { label: "27 Year", value: 27 },
    { label: "28 Year", value: 28 },
    { label: "29 Year", value: 29 },
    { label: "30 Year", value: 30 },
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




const FormSecondStep = () => {
    const dispatch = useDispatch();
    const { professionType } = useSelector(state => state.loan);
    const [searchText, setSearchText] = useState("");
    const [companyNameOptions, setCompanyNameOptions] = useState([])

    /// Search company name control
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

    const handleCompanyNames = value => {
        console.log(value, <br />, searchText);
    };

    /// company type control
    const handleCompanyTypes = value => {
        console.log(value);
    }

    return (
        <>
            {/* ----- Your Profession type Salaried -----  */}
            {professionType === "Salaried" && <>
                {/* -- Company Name -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Company Name</p>
                    <div className="w-[70%]">
                        <div className="w-full text-left">
                            <CustomSelectField options={companyNameOptions} onChange={handleCompanyNames} placeText={"Start Typing Here..."} isSearchable={true} onInputChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                {/* -- Company Type -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Company Type</p>
                    <div className="w-[70%]">
                        <div className="w-full text-left">
                            <CustomSelectField options={companyTypeOptions} onChange={handleCompanyTypes} placeText={"Select Your Company Type"} isSearchable={false} />
                        </div>
                    </div>
                </div>

                {/* -- Job Status -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Job Status</p>
                    <div className="w-[70%]">
                        <div className="w-full text-left">
                            <CustomSelectField options={jobStatusOptions} onChange={handleCompanyNames} placeText={"Select Job Status"} isSearchable={false} />
                        </div>
                    </div>
                </div>

                {/* -- Current Experience -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Job Experience (Current)</p>
                    <div className="w-[70%] grid grid-cols-2 gap-3">
                        <div className="w-full text-left">
                            <CustomSelectField options={yearsOfExperience} onChange={handleCompanyNames} placeText={"Select Year"} isSearchable={false} />
                        </div>
                        <div className="w-full text-left">
                            <CustomSelectField options={monthsOfExperience} onChange={handleCompanyNames} placeText={"Select Month"} isSearchable={false} />
                        </div>
                    </div>
                </div>

                {/* -- Total Experience -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Job Experience (Total)</p>
                    <div className="w-[70%] grid grid-cols-2 gap-3">
                        <div className="w-full text-left">
                            <CustomSelectField options={yearsOfExperience} onChange={handleCompanyNames} placeText={"Select Year"} isSearchable={false} />
                        </div>
                        <div className="w-full text-left">
                            <CustomSelectField options={monthsOfExperience} onChange={handleCompanyNames} placeText={"Select Month"} isSearchable={false} />
                        </div>
                    </div>
                </div>
            </>}

            {/* ----- Your Profession type Business man -----  */}
            {professionType === "Business Man" && <>
                {/* -- Company Type -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Company Type</p>
                    <div className="w-[70%]">
                        <div className="w-full text-left">
                            <CustomSelectField options={jobStatusOptions} onChange={handleCompanyNames} placeText={"Select Type"} isSearchable={false} />
                        </div>
                    </div>
                </div>

                {/* -- Company Type -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Business Category</p>
                    <div className="w-[70%]">
                        <div className="w-full text-left">
                            <CustomSelectField options={jobStatusOptions} onChange={handleCompanyNames} placeText={"Select Business Category"} isSearchable={false} />
                        </div>
                    </div>
                </div>

                {/* -- Company Type -- */}
                <div className="ml-3 my-3 flex items-center">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Your Business Type</p>
                    <div className="w-[70%]">
                        <div className="w-full text-left">
                            <CustomSelectField options={jobStatusOptions} onChange={handleCompanyNames} placeText={"Select Business Type"} isSearchable={false} />
                        </div>
                    </div>
                </div>
            </>}


            {/* ----- Your Profession type Land lord -----  */}
            {professionType === "Land Lord" && <>
                <div className="ml-3 my-3 flex gap-5">
                    <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Please Select Your House Type</p>
                    <div className="w-[70%] grid grid-cols-2 gap-5">
                        <div className="w-full mx-auto relative min-h-[100px] grid place-content-center h-[14vh] border hover:bg-[#00bef2] text-[#696969] hover:text-white cursor-pointer rounded-md">
                            <input type="checkbox" className='absolute top-2 left-2 h-3 w-3 bg-white border' />
                            <p className='relative text-[15px]'>Tin Shed House</p>
                        </div>
                    </div>
                </div>
            </>}

        </>
    );
};

export default FormSecondStep;