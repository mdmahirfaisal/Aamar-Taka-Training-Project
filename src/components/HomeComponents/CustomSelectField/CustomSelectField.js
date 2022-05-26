import React from 'react';
import Select from 'react-select';


const CustomSelectField = ({ options, onChange, placeText, isSearchable, onInputChange, required }) => {


    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "white", color: '#555', padding: '6px 0',
            '&:hover': { style: 'none' },
            boxShadow: state.isFocused ? null : null,
            border: state.isFocused ? null : null,
        }),
        indicatorSeparator: state => ({ display: 'none', }),
        placeholder: (styles) => { return { ...styles, color: '#555' } },
        option: (styles,) => {
            return {
                ...styles,
                backgroundColor: "white",
                transition: 'all 0.1s ease',
                color: "#555",
                border: '0',
                cursor: "pointer",
                "&:hover": {
                    background: "#1b5f8d",
                    color: 'white',
                },
            };
        }
    };

    return <Select
        styles={customStyle}
        isSearchable={isSearchable}
        isFocused={false}
        placeholder={placeText}
        onChange={onChange}
        onInputChange={onInputChange}
        maxMenuHeight={200}
        isRequired={true}
        options={options}
    />;
};

export default CustomSelectField;