import React, { useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { handleDateOfBirth, handleCalculatedAge } from '../../../redux/Slices/LoanSlice';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
///// Date Value arrays /////
const dayValues = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
    { label: 11, value: 11 },
    { label: 12, value: 12 },
    { labe3l: 13, value: 13 },
    { lab4el: 14, value: 14 },
    { la5bel: 15, value: 15 },
    { l6abel: 16, value: 16 },
    { label: 17, value: 17 },
    { label: 18, value: 18 },
    { label: 19, value: 19 },
    { label: 20, value: 20 },
    { label: 20, value: 20 },
    { label: 21, value: 21 },
    { label: 22, value: 22 },
    { label: 23, value: 23 },
    { label: 24, value: 24 },
    { label: 25, value: 25 },
    { label: 26, value: 26 },
    { label: 27, value: 27 },
    { label: 28, value: 28 },
    { label: 29, value: 29 },
    { label: 30, value: 30 },
    { label: 31, value: 31 }
];
const monthValues = [
    { label: "jan", value: 1, },
    { label: "feb", value: 2 },
    { label: "mar", value: 3 },
    { label: "apr", value: 4 },
    { label: "may", value: 5 },
    { label: "jun", value: 6 },
    { label: "jul", value: 7 },
    { label: "aug", value: 8 },
    { label: "sep", value: 9 },
    { label: "oct", value: 10 },
    { label: "nov", value: 11 },
    { label: "dec", value: 12 }
];
const yearValues = [
    { label: 1960, value: 1960 },
    { label: 1961, value: 1961 },
    { label: 1962, value: 1962 },
    { label: 1963, value: 1963 },
    { label: 1964, value: 1964 },
    { label: 1965, value: 1965 },
    { label: 1966, value: 1966 },
    { label: 1967, value: 1967 },
    { label: 1968, value: 1968 },
    { label: 1969, value: 1969 },
    { label: 1970, value: 1970 },
    { label: 1971, value: 1971 },
    { label: 1972, value: 1972 },
    { label: 1973, value: 1973 },
    { label: 1974, value: 1974 },
    { label: 1975, value: 1975 },
    { label: 1976, value: 1976 },
    { label: 1977, value: 1977 },
    { label: 1978, value: 1978 },
    { label: 1979, value: 1979 },
    { label: 1980, value: 1980 },
    { label: 1981, value: 1981 },
    { label: 1982, value: 1982 },
    { label: 1983, value: 1983 },
    { label: 1984, value: 1984 },
    { label: 1985, value: 1985 },
    { label: 1986, value: 1986 },
    { label: 1987, value: 1987 },
    { label: 1988, value: 1988 },
    { label: 1989, value: 1989 },
    { label: 1990, value: 1990 },
    { label: 1991, value: 1991 },
    { label: 1992, value: 1992 },
    { label: 1993, value: 1993 },
    { label: 1994, value: 1994 },
    { label: 1995, value: 1995 },
    { label: 1996, value: 1996 },
    { label: 1997, value: 1997 },
    { label: 1998, value: 1998 },
    { label: 1999, value: 1999 },
    { label: 2000, value: 2000 },
    { label: 2001, value: 2001 },
    { label: 2002, value: 2002 },
    { label: 2003, value: 2003 },
    { label: 2004, value: 2004 },
    { label: 2005, value: 2005 },
    { label: 2006, value: 2006 },
    { label: 2007, value: 2007 },
    { label: 2008, value: 2008 },
    { label: 2009, value: 2009 },
    { label: 2010, value: 2010 }
];


const DateOfBirthFilter = () => {
    const dispatch = useDispatch();
    const { dateOfBirth } = useSelector(state => state.loan);

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
        if (dateOfBirth.day && dateOfBirth.month?.value && dateOfBirth.year) {
            /// get new date month and year 
            let dateObj = new Date();
            const current_date = dateObj.getUTCDate();
            const current_month = dateObj.getUTCMonth() + 1; //months from 1-12
            const current_year = dateObj.getUTCFullYear();
            const totalAge = findAge(current_date, current_month, current_year, dateOfBirth.day, dateOfBirth.month?.value, dateOfBirth.year);
            dispatch(handleCalculatedAge(totalAge));
        }
    }, [dateOfBirth.day, dateOfBirth.month, dateOfBirth.year, dispatch]);

    /// get input values
    const handleDayChange = value => {
        console.log(value.value);
        dispatch(handleDateOfBirth({ name: "day", value: value.value }))
    }
    const handleMonthChange = value => {
        console.log(value.value);
        dispatch(handleDateOfBirth({ name: "month", value }))
    }
    const handleYearChange = value => {
        console.log(value.value);
        dispatch(handleDateOfBirth({ name: "year", value: value.value }))
    }

    return (
        <div className="ml-3 my-3 flex items-center">
            <p className='w-[30%] text-[#696969] text-[16px] font-medium text-left '>Date of Birth</p>
            <div className="w-[70%] grid grid-cols-3">
                <div className="w-full relative text-left">
                    <CustomSelectField options={dayValues} onChange={handleDayChange} placeText={dateOfBirth.day || "Day"} isSearchable={false} />
                </div>
                <div className="w-full relative text-left">
                    <CustomSelectField options={monthValues} onChange={handleMonthChange} placeText={dateOfBirth.month?.label || "Month"} isSearchable={false} />
                </div>
                <div className="w-full relative text-left">
                    <CustomSelectField options={yearValues} onChange={handleYearChange} placeText={dateOfBirth.year || "Year"} isSearchable={false} />
                </div>
            </div>
        </div>
    );
};

export default DateOfBirthFilter;