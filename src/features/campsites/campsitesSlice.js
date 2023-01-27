import {createSlice} from '@reduxjs/toolkit'
import App from '../../App';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
   campsitesArray: CAMPSITES
};

const campsiteSlice = createSlice({
   name: 'campsites',
   initialState
})

export const campsiteSliceReducer=campsiteSlice.reducer


export const SelectAllCampsites = (state) => {
   console.log(state);
   return state.campsites.campsitesArray;
};





// export const SelectRandomCampsiteIndex = () => {  


//    const randomIndex = Math.floor(Math.random() * CAMPSITES.length);
//    return CAMPSITES[randomIndex];
 
 
// }


export const GetCampsiteById = (id) => {
   return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

// console.log(SelectRandomCampsiteIndex());




export const selectFeaturedCampsites = () => {
   return CAMPSITES.find(campsite_arg => (
      campsite_arg.featured
   ))
}
