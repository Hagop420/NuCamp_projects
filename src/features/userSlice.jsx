import {createSlice} from '@reduxjs/toolkit'



const initialState = {
   currentUser: null
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setCurrentUser: (state, action) => {
         const turningUserReturn =  { state, currentUser: action.payload }
         return  turningUserReturn

      }
   }
});

export const userReducer = userSlice.reducer;
export const {setCurrentUser} = userSlice.actions




export const selectCurrentUser = (state) => {
   return state.user.currentUser
}