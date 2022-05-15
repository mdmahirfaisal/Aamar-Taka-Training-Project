import React from 'react';
import loan from './images/loan.PNG';
import deposit from './images/deposit.PNG';
import creditCard from './images/creditCard.PNG';
import insurance from './images/insurance.PNG';
import priceBond from './images/priceBond.PNG';
import Image from 'next/image';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { BiCalendar } from 'react-icons/bi';
import { RiMedicineBottleLine } from 'react-icons/ri';
import { MdOutlineSavings } from 'react-icons/md';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { IoIosGitCompare } from 'react-icons/io';
import { MdOutlinePriceChange } from 'react-icons/md';



const Header = () => {


    return (
        <div className='h-[92vh] bg-[#1b5f8d] grid place-items-center'>
            <div className="max-w-[1200px] mx-auto ">
                <h2 className='max-w-[1000px] mx-auto text-4xl md:text-5xl xl:text-6xl text-white mb-10'>Compare Rates, Check Eligibility & Apply</h2>
                <div className="grid grid-cols-5 gap-1">

                    <div className="header-card-container">
                        <Image src={loan} alt="Image" className=" header-card-image" />

                        <div className="header-card-overlay">
                            <a href=""><BsPerson color='lightblue' size="28px" /> Personal Loan</a>
                            <a href=""><BiHomeAlt color='orange' size="28px" /> Home Loan</a>
                            <a href=""><AiOutlineCar color='rgb(118, 193, 14)' size="28px" /> Car Loan</a>
                        </div>
                    </div>
                    <div className="header-card-container">
                        <Image src={deposit} alt="Image" className=" header-card-image" />

                        <div className="header-card-overlay">
                            <a href=""><RiMedicineBottleLine color='lightblue' size="28px" /> DPS</a>
                            <a href=""><RiMedicineBottleLine color='orange' size="28px" /> Fixed Deposit</a>
                            <a href=""><BiCalendar color='lightblue' size="28px" /> Monthly Benefit</a>
                            <a href=""><MdOutlineSavings color='lightblue' size="28px" /> Savings Account</a>
                            <a href=""><RiExchangeDollarLine color='rgb(218, 193, 14)' size="28px" /> Double Mony</a>
                            <a href=""><RiExchangeDollarLine color='rgb(118, 193, 14)' size="28px" /> Triple Mony</a>
                        </div>
                    </div>
                    <div className="header-card-container">
                        <Image src={creditCard} alt="Image" className=" header-card-image" />

                        <div className="header-card-overlay">
                            <a href=""><IoIosGitCompare color='lightblue' size="28px" /> Compare Rate</a>
                            <a href=""><IoIosGitCompare color='orange' size="28px" /> Check Eligibility</a>
                        </div>
                    </div>
                    <div className="header-card-container">
                        <Image src={insurance} alt="Image" className=" header-card-image" />

                        <div className="header-card-overlay">
                            <a href=""><AiOutlineCar color='lightblue' size="28px" /> Motor Insurance</a>
                        </div>
                    </div>
                    <div className="header-card-container">
                        <Image src={priceBond} alt="Image" className=" header-card-image" />

                        <div className="header-card-overlay">
                            <a href=""><MdOutlinePriceChange color='rgb(118, 193, 14)' size="28px" /> Price Bond</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;