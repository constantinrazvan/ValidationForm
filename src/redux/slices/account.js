import { createSlice } from '@reduxjs/toolkit'

const initialState = { }

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        SET_ACCOUNT: (state, action) => action.payload,
        RES_ACCOUNT: (state) => { }
    },
})

export const { SET_ACCOUNT} = accountSlice.actions
export const { RES_ACCOUNT} = accountSlice.actions

export default accountSlice.reducer