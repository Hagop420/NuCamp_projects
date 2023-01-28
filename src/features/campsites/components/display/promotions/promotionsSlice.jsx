import { PROMOTIONS } from '../../../../../app/shared/PROMOTIONS'
import {createSlice} from '@reduxjs/toolkit'




const initialState = {
   promotiosArray: PROMOTIONS
};

const promotionsSlice = createSlice({
   name: 'promotion',
   initialState
});

export const promotionSliceReducer=promotionsSlice.reducer




export const selectFeaturedPromotions = (state) => {
   return state.promotion.promotiosArray.find(promotion_arg => (
      promotion_arg.featured
   ))
}