import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle
} from 'reactstrap';


const DisplayCard = ({ data }) => {
   const { image, name, description } = data;

   return (
      <Card>
         <CardImg src={image} alt={name} />
         <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
         </CardBody>
      </Card>
   )
}

export default DisplayCard