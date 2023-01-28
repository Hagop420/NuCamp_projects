import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import DisplayCard from './displayCard';
import AnimationCard from '../display/AnimatedDisplayCard';
import { selectFeaturedCampsites } from '../../campsitesSlice';
import { selectFeaturedPromotions } from './promotions/promotionsSlice';
import {selectFeaturedPartner} from '../../partners/partnersSlice'



export const GetFeatures = () => {
   // const item = useSelector((state => [selectFeaturedCampsites(state), selectFeaturedPromotions(state), selectFeaturedPartner(state)]))
   
   const item = useSelector((st) => [
      selectFeaturedCampsites(st),
      selectFeaturedPromotions(st),
      selectFeaturedPartner(st)
   ]);
   
   // console.log(item);
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

