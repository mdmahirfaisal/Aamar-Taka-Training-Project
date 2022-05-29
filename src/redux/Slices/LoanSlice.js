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
        businessDetails: {
            businessCompanyType: "",
            businessSharePercents: null,
            businessCategory: "",
            businessType: "",
        },
        landLordDetails: {
            tinShedHouse: false,
            semiPaka: false,
            buildingWithPlan: false,
            buildingWithoutPlan: false,
        }
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

        ///////// Salaried Type Details 
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
            if (payload.name === "year") state.jobDetails.currentExperience.year = payload.value;
            if (payload.name === "month") state.jobDetails.currentExperience.month = payload.value;

        },
        handleTotalExperience: (state, { payload }) => {
            if (payload.name === "year") state.jobDetails.totalExperience.year = payload.value;
            if (payload.name === "month") state.jobDetails.totalExperience.month = payload.value;
        },

        ////////  Business Type Details
        handleBusinessCompanyType: (state, { payload }) => {
            state.businessDetails.businessCompanyType = payload;
        },
        handleBusinessSharePercents: (state, { payload }) => {
            if (payload < 100) {
                state.businessDetails.businessSharePercents = payload;
            }
            else {
                state.businessDetails.businessSharePercents = null;
            }

        },
        handleBusinessCategory: (state, { payload }) => {
            state.businessDetails.businessCategory = payload;
        },
        handleBusinessType: (state, { payload }) => {
            state.businessDetails.businessType = payload;
        },

        //////// Land lord type type details
        handleLandLordDetails: (state, { payload }) => {
            if (payload.name === "tinShed") {
                state.landLordDetails.tinShedHouse = payload.value;
            }
            else if (payload.name === "semiPaka") {
                state.landLordDetails.semiPaka = payload.value;
            }
            else if (payload.name === "withPlan") {
                state.landLordDetails.buildingWithPlan = payload.value;
            }
            else if (payload.name === "withoutPlan") {
                state.landLordDetails.buildingWithoutPlan = payload.value;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { handleLoanType, handleProfessionType, handleLoanPurpose, handleResidenceType, handleCarType, handleGenderType, handleLocation, handleDateOfBirth, handleCalculatedAge, handleCompanyName, handleCompanyType, handleJobStatus, handleCurrentExperience, handleTotalExperience, handleBusinessCompanyType, handleBusinessSharePercents, handleBusinessCategory, handleBusinessType, handleLandLordDetails } = loanSlice.actions

export default loanSlice.reducer