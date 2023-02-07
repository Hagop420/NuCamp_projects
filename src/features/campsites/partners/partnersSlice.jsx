// import { PARTNERS } from '../../../app/shared/oldData/PARTNERS';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { baseUrl } from '../../../app/shared/baseUrl';
import { mapImageURL } from '../../../utilities/mapImgURL';

export const fetchPartners = createAsyncThunk(
   'partnersObj/fetchPartners',
   async () => {
       
      const response = await fetch(baseUrl + 'partners');
      




           if (!response.ok) {
               return Promise.reject('Unable to fetch, status: '+ response.status);
           }
           
           const data = await response.json();
           return data;
       
   }
)



const initialState = {
   partnersArray: [],
   isLoading: true,
   errMsg: ''
};


const partnersSlice = createSlice({
   name: 'partnersObj',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchPartners.pending]: (state) => {
          state.isLoading = true;
      },
      [fetchPartners.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.errMsg = '';
          state.partnersArray = mapImageURL(action.payload);
      },
      [fetchPartners.rejected]: (state, action) => {
         state.isLoading = false;
         console.log(action.error);

         state.errMsg = action.error ? action.error.message : 'Fetch failed';
     }
  }
   
})


export const partnerSliceReducer=partnersSlice.reducer



export const selectAllPartners = (state) => {
   return state.partnersObj.partnersArray
}


export const selectFeaturedPartner = (state) => {
   return {
      featuredItem: state.partnersObj.partnersArray.find
         ((fndFeat => fndFeat.featured)),
         isLoading:state.partnersObj.isLoading,
         errMsg:state.partnersObj.errMsg
   }
   
 
   
}