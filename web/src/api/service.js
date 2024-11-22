import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define the API slice
export const apiSlice = createApi({
    reducerPath: 'api', // Name of the slice
    baseQuery: fetchBaseQuery({
        baseUrl: '/api', // Match the proxy setup in vite.config.js
    }),
    endpoints: (builder) => ({
        getHello: builder.query({
            query: () => '/hello', // This will translate to '/api/hello'
        }),
    }),
});

export const { useGetHelloQuery } = apiSlice;