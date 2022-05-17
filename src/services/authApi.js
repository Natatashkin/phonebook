import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://connections-api.herokuapp.com';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: builder => ({
    register: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Contact'],
    }),
    // refresh: builder.query({
    //   query: () => ({
    //     url: '/users/current',
    //     method: 'GET',
    //   }),
    // }),
    // Contacts
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    removeContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    editContact: builder.mutation({
      query: ({ body }) => ({
        url: `/contacts/${body.id}`,
        method: 'PUTCH',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
  useEditContactMutation,
} = authApi;

export default authApi;
