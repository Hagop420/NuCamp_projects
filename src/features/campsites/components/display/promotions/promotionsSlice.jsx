// import { PROMOTIONS } from '../../../../../app/shared/PROMOTIONS'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../../../../app/shared/baseUrl';
import { mapImageURL } from '../../../../../utilities/mapImgURL';


export const fetchPromotions = createAsyncThunk(
   'promotion/fetchPromotions',
   async () => {
       
       const response = await fetch(baseUrl + 'promotions');
      
           if (!response.ok) {
               return Promise.reject('Unable to fetch, status: '+ response.status);
           }
           
           const data = await response.json();
           return data;
       
   }
)

const initialState = {
   promotionsArray: [],
   isLoading: true,
   errMsg: ''
};

const promotionsSlice = createSlice({
   name: 'promotion',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchPromotions.pending]: (state) => {
          state.isLoading = true;
      },
      [fetchPromotions.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.errMsg = '';
          state.promotionsArray = mapImageURL(action.payload);
      },
      [fetchPromotions.rejected]: (state, action) => {
         state.isLoading = false;
         state.errMsg = action.error ? action.error.message : 'Fetch failed';
     }
  }
});

export const promotionSliceReducer=promotionsSlice.reducer




export const selectFeaturedPromotions = (state) => {
   return {
      featuredItem:state.promotion.promotionsArray.find(promotion => (
         promotion.featured
      )),
      isLoading:state.promotion.isLoading,
      errMsg:state.promotion.errMsg
      id=2
      
   }
   
   
}