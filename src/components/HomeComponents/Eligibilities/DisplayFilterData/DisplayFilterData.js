import React from 'react';
import { GoCalendar } from 'react-icons/go';
import { ImLocation } from 'react-icons/im';
import { useSelector } from 'react-redux';


// flex display data container class names
const flexBoxContainerClassName = "flex items-center gap-2 rounded-md mt-2 bg-white border p-2";
const staticTitleClassName = "text-[#0ab9f2] text-[14px] text-left";
const dynamicTitleClassName = "text-[#585858] text-[14px] text-left";



const DisplayFilterData = ({ productType }) => {
    const { loanType, professionType, calculatedAge, genderType, location, residenceType, loanPurpose, carType } = useSelector(state => state.loan);
    const { companyName, companyType, jobStatus, currentExperience, totalExperience } = useSelector(state => state.loan?.jobDetails);


    return (
        <div className='overflow-y-scroll max-h-[470px] '>
            <div className="flex gap-2">
                {genderType && <img className='h-12 w-12 ' src={genderType === "Male" ? "https://i.ibb.co/fYddVST/male.png" : genderType === "Female" ? "https://i.ibb.co/pj0h4PF/female.png" : genderType === "Other" ? "https://i.ibb.co/djZBPbr/other.png" : ""} alt="" />}

                <div className={genderType && "mt-1"}>
                    {calculatedAge.calculated_year && <p className='text-[#585858] text-[14px] flex items-center gap-1'><GoCalendar /> {calculatedAge.calculated_year} Years {calculatedAge.calculated_month} Month {calculatedAge.calculated_date} days</p>}
                    {location && <p className='text-[#585858] text-[14px] flex items-center gap-1'><ImLocation /> {location}</p>}
                </div>
            </div>

            {productType && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src="https://i.ibb.co/9NmCTmK/product.png" alt="" />

                <div>
                    <p className={staticTitleClassName}>Product Type</p>
                    <p className={dynamicTitleClassName}>{productType}</p>
                </div>
            </div>}

            {professionType && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src="https://i.ibb.co/0sPn9DG/profession.png" alt="" />

                <div>
                    <p className={staticTitleClassName}>Profession</p>
                    <p className={dynamicTitleClassName}>{professionType}</p>
                </div>
            </div>}

            {residenceType && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src="https://i.ibb.co/cLCmhYr/residence.png" alt="" />

                <div>
                    <p className={staticTitleClassName}>Residence Type</p>
                    <p className={dynamicTitleClassName}>{residenceType}</p>
                </div>
            </div>}

            {location && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src="https://i.ibb.co/WV0bRb8/3.png" alt="Locationimg" />

                <div>
                    <p className={staticTitleClassName}>Location</p>
                    <p className={dynamicTitleClassName}>{location}</p>
                </div>
            </div>}

            {/* --- Loan type Info ---  */}

            <p className='text-[#585858] font-medium ml-1 mt-2 text-left text-[14px]'> {productType} Info</p>

            {loanType && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src={productType === "Personal Loan" ? "https://i.ibb.co/t2t1kBN/personal.png" : productType === "Home Loan" ? "https://i.ibb.co/BfmFhQd/4.png" : productType === "Car Loan" ? "https://i.ibb.co/py5CBXY/car.png" : ""} alt="" />

                <div>
                    <p className={staticTitleClassName}>{productType} Type</p>
                    <p className={dynamicTitleClassName}>{loanType}</p>
                </div>
            </div>}

            {carType && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src="https://i.ibb.co/py5CBXY/car.png" alt="Carloan" />

                <div>
                    <p className={staticTitleClassName}>Car Type</p>
                    <p className={dynamicTitleClassName}>{carType}</p>
                </div>
            </div>}

            {loanPurpose && <div className={flexBoxContainerClassName}>
                <img className='h-10 w-10 ' src="https://i.ibb.co/M8fh3Xy/apartment.png" alt="Apartment" />

                <div>
                    <p className={staticTitleClassName}>Apartment Type</p>
                    <p className={dynamicTitleClassName}>{loanPurpose}</p>
                </div>
            </div>}
        </div>
    );
};

export default DisplayFilterData;