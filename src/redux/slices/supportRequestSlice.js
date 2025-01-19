import { createSlice } from '@reduxjs/toolkit';

const supportRequestSlice = createSlice({
  name: 'supportRequest',
  initialState: [],
  reducers: {
    saveFormData(state, action) {
      state.push(action.payload);
    },
  },
});

export const { saveFormData } = supportRequestSlice.actions;
export default supportRequestSlice.reducer;
