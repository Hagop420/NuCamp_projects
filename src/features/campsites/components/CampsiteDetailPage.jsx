import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { GetCampsiteById } from '../campsitesSlice';
import CampsiteDetail from '../components/CampsiteDetail'
import CommentsList from '../components/Comments/CommentsList';
import CommentPage from '../components/Comments/Comment'
import SubHeader from '../components/SubHeader'

const CampsiteDetailPage = () => {
   const { campsiteId } = useParams()
   const getCampsitesId = GetCampsiteById(campsiteId)



   // Call the function using a return statement


   return (
      <Container>
            <SubHeader current={getCampsitesId.name} detail={true} />
         <Row>
            <CampsiteDetail campsite={getCampsitesId} />
         <CommentsList campsiteId={campsiteId} />
         </Row>

         
      </Container>
   )
}


export default CampsiteDetailPage