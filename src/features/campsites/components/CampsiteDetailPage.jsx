import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { GetCampsiteById } from '../campsitesSlice';
import CampsiteDetail from '../components/CampsiteDetail'
import CommentsList from '../components/Comments/CommentsList';
// import CommentPage from '../components/Comments/Comment'
import SubHeader from '../components/SubHeader'
import Error from './Error';
import Loading from './Loading';

const CampsiteDetailPage = () => {
   const { campsiteId } = useParams()
   const getCampsitesId = useSelector(GetCampsiteById(campsiteId))



   const isLoading = useSelector((state) => state.campsites.isLoading)

   const err = useSelector((state) => state.campsites.errMsg)

   let content = null
   

   if (isLoading) {
      content=<Loading/>
   }else if (err) {
      content=<Error errMsg={err}/>
   } else {
      content = (
         <>
              <CampsiteDetail campsite={getCampsitesId} />
              <CommentsList campsiteId={campsiteId} />
         </>
      )
   }

   return (
      <Container>
         {getCampsitesId && <SubHeader current={getCampsitesId.name} detail={true} />}
         <Row>
            {content}
         </Row>

         
      </Container>
   )
}


export default CampsiteDetailPage