import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
// import DisplayCard from './displayCard';
import AnimationCard from '../display/AnimatedDisplayCard';
import { selectFeaturedCampsites } from '../../campsitesSlice';
import { selectFeaturedPromotions } from './promotions/promotionsSlice';
import { selectFeaturedPartner } from '../../partners/partnersSlice'
import Loading from '../Loading';
import Error from '../Error'


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
      
         {item.map((data, indNum) => {
            const { featuredItem, isLoading, errMsg } = data
            if (isLoading) {
               return <Loading key={indNum} />
            }
            if (errMsg) {
               return <Error key={indNum} errMsg={errMsg} />
            }
           
               return (
                  featuredItem && (
                     <Col md className='BASIS OFC m-1 mx-auto' key={indNum}>
                        <AnimationCard data={featuredItem} />
                     </Col>
                  )
               )
            
         
     
         })}
      </Row>
   )
}

export default GetFeatures

