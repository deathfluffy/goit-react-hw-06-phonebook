
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
  };
  
  export const contactFilterSlice = createSlice({
    name: 'contactFilter',
    initialState,
    reducers: {
      setFilter: (state, action) => {
        state.filter = action.payload;
      },
      filterContacts: (state, action) => {
        const filterValue = action.payload ? action.payload.toLowerCase().trim() : '';
        state.filter = filterValue;
      },
    },
  });

export const { setFilter, filterContacts } = contactFilterSlice.actions;


export const getFilter = state => state.contactFilter.filter;



