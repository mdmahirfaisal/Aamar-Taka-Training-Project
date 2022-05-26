import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsCircle } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/SharedComponents/Footer/Footer';
import NavigationBar from '../../components/SharedComponents/NavigationBar/NavigationBar';
import DisplayFilterData from '../../components/HomeComponents/Eligibilities/DisplayFilterData/DisplayFilterData';
import FormFirstStep from '../../components/HomeComponents/Eligibilities/FormFirstStep';
import FormSecondStep from '../../components/HomeComponents/Eligibilities/FormSecondStep';
import FormThirdStep from '../../components/HomeComponents/Eligibilities/FormThirdStep';
import FormFourthStep from '../../components/HomeComponents/Eligibilities/FormFourthStep';


//// Class names control ////
const stepsTextClassNames = "text-[12px] font-medium text-[#585858]";
const stepsIconClassNames = 'mx-auto text-[22px] text-[#b8b8b8]';
const stepsDoneIconClassNames = 'mx-auto text-[22px] text-[#0ab9f2]';
const stepsBorderClassNames = 'grow border-b-[3px] border-[#b8b8b8]';
const stepsDoneBorderClassNames = 'grow border-b-[3px] border-[#0ab9f2]';



const Index = () => {
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

    ///////// Eligibility Step controls 
    const [formStepValue, setFormStepValue] = useState(1);

    const increaseEligibilityStep = (e) => {
        if (formStepValue === 4) {
            alert("this form submit completed")
        } else {
            setFormStepValue(formStepValue + 1 > 4 ? 4 : formStepValue + 1);
        }
        e.preventDefault();
    };
    const decreaseEligibilityStep = () => {
        setFormStepValue(formStepValue - 1 < 1 ? 1 : formStepValue - 1);
    };

    return (
        <>
            <NavigationBar />
            <div className='h-[100%] py-10 lg:py-0 lg:py-[10vw] lg:min-h-[92vh] bg-[#1b5f8d]'>

                <div className="max-w-[1200px] mx-auto">

                    <div className="grid grid-cols-5 gap-3 container2">
                        {/* -------- Left Form items -------- */}
                        <div className="col-span-5 md:col-span-3 bg-[#effaff] rounded-md p-1">
                            <div className="bg-[#008ecc] flex items-center gap-2 rounded-md">
                                <img className='w-[51px] h-[50px] ' src={elgHeaderImg} alt="Eligibility" />

                                <h5 className='text-white font-medium text-[20px]'>{elgHeaderTitle}</h5>
                            </div>

                            {/* ------- Steps border style success control ------- */}
                            <div className="mt-1 px-2">
                                <div className="flex items-center justify-between">
                                    <p className={stepsTextClassNames}>STEP-1 </p>
                                    <p className={stepsTextClassNames}>STEP-2 </p>
                                    <p className={stepsTextClassNames}>STEP-3</p>
                                    <p className={stepsTextClassNames}>STEP-4 </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    {formStepValue === 1 && <>
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <BsCircle className={stepsIconClassNames} />
                                        <p className={stepsBorderClassNames} />

                                        <BsCircle className={stepsIconClassNames} />
                                        <p className={stepsBorderClassNames} />
                                        <BsCircle className={stepsIconClassNames} />
                                    </>}

                                    {formStepValue === 2 && <>
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <BsCircle className={stepsIconClassNames} />
                                        <p className={stepsBorderClassNames} />
                                        <BsCircle className={stepsIconClassNames} />
                                    </>}

                                    {formStepValue === 3 && <>
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <BsCircle className={stepsIconClassNames} />
                                    </>}

                                    {formStepValue === 4 && <>
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                        <p className={stepsDoneBorderClassNames} />
                                        <FaRegCheckCircle className={stepsDoneIconClassNames} />
                                    </>}

                                </div>
                            </div>

                            {/* ------- Steps filters control ------- */}

                            {/* ----- First Step -----  */}
                            {formStepValue === 1 && <>
                                <form onSubmit={increaseEligibilityStep}>
                                    <FormFirstStep />
                                    <div className="w-[70%] ml-auto">
                                        <button type='submit' className="w-[50%] mx-auto py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">NEXT <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>
                                    </div>
                                </form>
                            </>}
                            {/* ----- Second Step -----  */}
                            {formStepValue === 2 && <>
                                <form onSubmit={increaseEligibilityStep}>
                                    <FormSecondStep />
                                    <div className="w-[70%] ml-auto">
                                        <div className="w-[70%] ml-auto">
                                            <div className="grid grid-cols-2 gap-3">
                                                <button onClick={decreaseEligibilityStep} className="w-[80%] mx-auto  py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">BACK <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>

                                                <button type='submit' className="w-[80%] mx-auto py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">NEXT <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </>}
                            {/* ----- Third Step -----  */}
                            {formStepValue === 3 && <>
                                <form onSubmit={increaseEligibilityStep}>
                                    <FormThirdStep />
                                    <div className="w-[70%] ml-auto">
                                        <div className="w-[70%] ml-auto">
                                            <div className="grid grid-cols-2 gap-3">
                                                <button onClick={decreaseEligibilityStep} className="w-[80%] mx-auto  py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">BACK <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>

                                                <button type='submit' className="w-[80%] mx-auto py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">NEXT <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </>}
                            {/* ----- Fourth Step -----  */}
                            {formStepValue === 4 && <>
                                <form onSubmit={increaseEligibilityStep}>
                                    <FormFourthStep />
                                    <div className="w-[70%] ml-auto">
                                        <div className="grid grid-cols-2 gap-3">
                                            <button onClick={decreaseEligibilityStep} className="w-[80%] mx-auto py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">BACK <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>

                                            <button type='submit' className="w-[80%] mx-auto py-2 text-[#696969] my-2 rounded-[35px] border border-[#696969] font-semibold hover:text-white transition-all duration-600 hover:bg-[#0ab9f2] flex items-center justify-center">Submit Form <RiArrowRightSLine className='text-[18px] mt-[2px]' /></button>
                                        </div>
                                    </div>
                                </form>
                            </>}
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