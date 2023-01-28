import { PARTNERS } from '../../../app/shared/PARTNERS';
import {createSlice} from '@reduxjs/toolkit'




const initialState = {
   partnersArray:PARTNERS
}


const partnersSlice = createSlice({
   name: 'partnersObj',
   initialState
   
})


export const partnerSliceReducer=partnersSlice.reducer



export const selectAllPartners = (state) => {
   return state.partnersObj.partnersArray
}


export const selectFeaturedPartner = (state) => {
   const findPartnerFeature = state.partnersObj.partnersArray.find(fndFeat =>fndFeat.featured === true)
   
   
   return findPartnerFeature
}

