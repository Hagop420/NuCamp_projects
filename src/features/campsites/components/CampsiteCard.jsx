import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import AnimationCard from '../components/display/AnimatedDisplayCard';
import {Link} from 'react-router-dom'

const CampsiteCard = ({campsite}) => {
   const {image, id, name} = campsite
   return (
      <Link to={`${id}`}>
      <Card>
         <CardImg
            width='100%'
            src={image}
            alt={name}
         />          
         <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
         </CardImgOverlay>
         </Card> 
         </Link>
   )
}

console.clear()
export default CampsiteCard