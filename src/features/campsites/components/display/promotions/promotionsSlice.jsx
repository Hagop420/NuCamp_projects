import { PROMOTIONS } from '../../../../../app/shared/PROMOTIONS'


export const selectFeaturedPromotions = () => {
   return PROMOTIONS.find(promotion_arg => (
      promotion_arg.featured
   ))
}