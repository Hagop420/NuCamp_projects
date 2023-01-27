import { PARTNERS } from '../../../app/shared/PARTNERS';


export const selectAllPartners = () => {
   return PARTNERS
}


export const selectFeaturedPartner = () => {
   const findPartnerFeature = PARTNERS.find(fndFeat =>fndFeat.featured === true)
   
   
   return findPartnerFeature
}

