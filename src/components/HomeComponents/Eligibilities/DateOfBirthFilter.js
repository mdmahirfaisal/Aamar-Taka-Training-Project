import React, { useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { handleDateOfBirth, handleCalculatedAge } from '../../../redux/Slices/LoanSlice';
///// Date Value arrays /////
const dayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const monthValues = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const yearValues = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];


/// Class names 
const SelectFieldClassNames = "cursor-pointer form-select appearance-none block w-full px-3 py-[11px] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:outline-none ";


const DateOfBirthFilter = () => {
    const dispatch = useDispatch();
    const { dateOfBirth, calculatedAge } = useSelector(state => state.loan);

    /// calculate total age
    const findAge = (current_date, current_month, current_year, birth_date, birth_month, birth_year) => {
        // days of every month
        let month = [31, 28, 31, 30, 31, 30, 31,
            31, 30, 31, 30, 31]
        if (birth_date > current_date) {
            current_date = current_date + month[birth_month - 1];
            current_month = current_month - 1;
        }

        if (birth_month > current_month) {
            current_year = current_year - 1;
            current_month = current_month + 12;
        }
        // calculate date, month, year
        let calculated_date = current_date - birth_date;
        let calculated_month = current_month - birth_month;
        let calculated_year = current_year - birth_year;
        return { calculated_date, calculated_month, calculated_year };
    };

    useEffect(() => {
        if (dateOfBirth.day && dateOfBirth.month && dateOfBirth.year) {
            /// get new date month and year 
            let dateObj = new Date();
            const current_date = dateObj.getUTCDate();
            const current_month = dateObj.getUTCMonth() + 1; //months from 1-12
            const current_year = dateObj.getUTCFullYear();
            const totalAge = findAge(current_date, current_month, current_year, dateOfBirth.day, dateOfBirth.month, dateOfBirth.year);
            dispatch(handleCalculatedAge(totalAge));
        }
    }, [dateOfBirth.day, dateOfBirth.month, dateOfBirth.year, dispatch])

    return (
        <div className="ml-3 my-3 flex items-center">
            <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Date of Birth</p>
            <div className="w-[70%] grid grid-cols-3">
                <div className="w-full relative">
                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                    <select onChange={(e) => dispatch(handleDateOfBirth({ name: e.target.name, value: e.target.value }))} defaultValue={''} name="day" className={SelectFieldClassNames} required>
                        <option className='hidden' value="">Day</option>
                        {dayValues?.map(day => <option
                            key={day}
                            value={day}
                        >{day}</option>)}
                    </select>
                </div>
                <div className="w-full relative">
                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                    <select onChange={(e) => dispatch(handleDateOfBirth({ name: e.target.name, value: e.target.value }))} defaultValue={''} name="month" className={SelectFieldClassNames} required>
                        <option className='hidden' value="">Month</option>
                        {monthValues?.map((month, index) => <option
                            key={month}
                            value={index + 1}
                        >{month}</option>)}
                    </select>
                </div>
                <div className="w-full relative">
                    <MdOutlineKeyboardArrowDown className='absolute right-1 top-[15px] text-2xl' />
                    <select onChange={(e) => dispatch(handleDateOfBirth({ name: e.target.name, value: e.target.value }))} defaultValue={''} name="year" className={SelectFieldClassNames} required>
                        <option className='hidden' value="">Year</option>
                        {yearValues?.map(year => <option
                            key={year}
                            value={year}
                        >{year}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DateOfBirthFilter;