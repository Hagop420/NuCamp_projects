import { Col, Row } from 'reactstrap';
import DisplayCard from './displayCard';
import AnimationCard from '../display/AnimatedDisplayCard';
import { selectFeaturedCampsites } from '../../campsitesSlice';
import { selectFeaturedPromotions } from './promotions/promotionsSlice';
import {selectFeaturedPartner} from '../../partners/partnersSlice'



export const GetFeatures = () => {
   const item = [selectFeaturedCampsites(), selectFeaturedPromotions(), selectFeaturedPartner()]
   

  return (
    <Row>
      
       {item.map((data, indNum) => (
        data &&(
        <Col md className='BASIS OFC m-1 mx-auto' key={indNum}>
        <AnimationCard data={data}/>
           </Col>
        )
     
    ))}
      </Row>
   )
}

export default GetFeatures

