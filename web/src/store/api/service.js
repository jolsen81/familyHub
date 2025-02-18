import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define the API slice
export const apiSlice = createApi({
    reducerPath: 'api', // Name of the slice
    baseQuery: fetchBaseQuery({
        baseUrl: '/api', // Match the proxy setup in vite.config.js
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users'],
        }),
        createUser: builder.mutation({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Users'],
        }),
    }),
});

export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;