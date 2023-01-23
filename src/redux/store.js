import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/account';

export const store = configureStore({
    reducer: {
        account: accountReducer
    },
})