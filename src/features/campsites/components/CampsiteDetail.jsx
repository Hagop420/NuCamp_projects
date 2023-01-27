import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ( {campsite} ) => {
   const { image, name, description } =campsite;
//    console.log({c});
   return (
       <Col md='6' xs='11' className='m-3'>
           <Card>
               <CardImg top src={image} alt={name} />
               <CardBody>
                   <CardText>{description}</CardText>
               </CardBody>
           </Card>
       </Col>
   );
};

export default CampsiteDetail;
