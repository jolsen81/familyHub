import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/service.js'
import modalReducer from './reducers/modal.js'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        [apiSlice.reducerPath]: apiSlice.reducer, // Add the API reducer.
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Add the API middleware
});