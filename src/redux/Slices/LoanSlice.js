import { createSlice } from '@reduxjs/toolkit'


export const loanSlice = createSlice({
    name: 'loan',
    initialState: {
        loanType: "",
        professionType: "",
        loanPurpose: "",
        residenceType: "",
        carType: "",
        genderType: "",
        location: "",
        dateOfBirth: {},
        calculatedAge: {},
        jobDetails: {
            companyName: "",
            companyType: "",
            jobStatus: "",
            currentExperience: {},
            totalExperience: {},
        },
    },
    reducers: {
        handleLoanType: (state, { payload }) => {
            state.loanType = payload;
        },
        handleProfessionType: (state, { payload }) => {
            state.professionType = payload;
        },
        handleLoanPurpose: (state, { payload }) => {
            state.loanPurpose = payload;
        },
        handleResidenceType: (state, { payload }) => {
            state.residenceType = payload;
        },
        handleCarType: (state, { payload }) => {
            state.carType = payload;
        },
        handleGenderType: (state, { payload }) => {
            state.genderType = payload;
        },
        handleLocation: (state, { payload }) => {
            state.location = payload;
        },
        handleDateOfBirth: (state, { payload }) => {
            if (payload.name === "day") {
                state.dateOfBirth.day = payload.value;
            }
            else if (payload.name === "month") {
                state.dateOfBirth.month = payload.value;
            }
            else if (payload.name === "year") {
                state.dateOfBirth.year = payload.value;
            };
        },
        handleCalculatedAge: (state, { payload }) => {
            state.calculatedAge = payload;
        },

        ///////// Job Type Details 
        handleCompanyName: (state, { payload }) => {
            state.jobDetails.companyName = payload;
        },
        handleCompanyType: (state, { payload }) => {
            state.jobDetails.companyType = payload;
        },
        handleJobStatus: (state, { payload }) => {
            state.jobDetails.jobStatus = payload;
        },
        handleCurrentExperience: (state, { payload }) => {
            state.jobDetails.currentExperience = payload;
        },
        handleTotalExperience: (state, { payload }) => {
            state.jobDetails.totalExperience = payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { handleLoanType, handleProfessionType, handleLoanPurpose, handleResidenceType, handleCarType, handleGenderType, handleLocation, handleDateOfBirth, handleCalculatedAge, handleCompanyName, handleCompanyType, handleJobStatus, handleCurrentExperience, handleTotalExperience } = loanSlice.actions

export default loanSlice.reducer