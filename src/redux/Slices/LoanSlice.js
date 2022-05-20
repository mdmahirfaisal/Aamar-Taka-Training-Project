import { createSlice } from '@reduxjs/toolkit'


export const loanSlice = createSlice({
    name: 'loan',
    initialState: {
        loanType: "",
        professionType: "",
        residenceType: "",
        genderType: "",
        location: "",
        dateOfBirth: {},

    },
    reducers: {
        handleLoanType: (state, { payload }) => {
            state.loanType = payload;
        },
        handleProfessionType: (state, { payload }) => {
            state.professionType = payload;
        },
        handleResidenceType: (state, { payload }) => {
            state.residenceType = payload;
        },
        handleGenderType: (state, { payload }) => {
            state.genderType = payload;
        },
        handleLocation: (state, { payload }) => {
            state.location = payload;
        },
        handleDateOfBirth: (state, { payload }) => {
            state.dateOfBirth = payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { handleLoanType, handleProfessionType, handleResidenceType, handleGenderType, handleLocation, handleDateOfBirth } = loanSlice.actions

export default loanSlice.reducer