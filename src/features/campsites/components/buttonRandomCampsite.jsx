import { Container, Row, Col, Button } from 'reactstrap';
// import CampsiteDetail from '../features/campsites/components/CampsiteDetail';
// import { CAMPSITES } from '../app/shared/CAMPSITES';
// import CampsitesList from './features/campsites/components/CampsitesList';
import { SelectRandomCampsiteIndex } from '../campsitesSlice'


const campsiteToggle = () => {
   const selectedCampsite = SelectRandomCampsiteIndex()
   console.log(selectedCampsite)
}


const ButtonRandomCamp = () => {
   return (
      <Container>
         <Button onClick={campsiteToggle}>
            Select Random Campsite
         </Button>
      </Container>
   )
};


export default ButtonRandomCamp;
