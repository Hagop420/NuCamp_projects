import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice'
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';



const PartnersList = () => {
   const partners = useSelector(selectAllPartners)


   const isLoading = useSelector((state) => state.partnersObj.isLoading)
   const errMsg = useSelector((state) => state.partnersObj.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading/>
            </Row>
        )
      }
    

   
   //  if (err) {
   //      return (
   //          <Row>
   //              <Error errMsg={ err } />
   //      </Row> 
   //      )
   //  }


   return isLoading ? (
      <Loading />
  ) : errMsg ? (
      <Error errMsg={ errMsg } />
  ) : (
      <Col className='mt-4'>
         {partners.map(partner => {
            return (
               <div className="d-flex mb-5" key={partner.id}>
                  <Partner partner={partner}/>
               </div>
            )
         } )}
      </Col>
   )
}


export default PartnersList