import {createSlice} from '@reduxjs/toolkit'
// import App from '../../App';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
   campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
   name: 'campsites',
   initialState
});

export const campsiteSliceReducer=campsitesSlice.reducer


export const SelectAllCampsites = (state) => {   
   return state.campsites.campsitesArray;
};





// export const SelectRandomCampsiteIndex = () => {  


//    const randomIndex = Math.floor(Math.random() * CAMPSITES.length);
//    return CAMPSITES[randomIndex];
 
 
// }


export const GetCampsiteById = (id) => (state) => {
   return CAMPSITES.find(
      (campsite) => campsite.id === parseInt(id)
   )
}

// console.log(SelectRandomCampsiteIndex());




export const selectFeaturedCampsites = (state) => {
   return state.campsites.campsitesArray.find(campsite => (
      campsite.featured
   ))
}
