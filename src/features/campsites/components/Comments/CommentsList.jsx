import { Col, Row } from 'reactstrap';
import Comments from '../Comments/Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm'
import { fetchComments } from './commentsSlice';
import { useSelector } from 'react-redux';
import Error from '../Error';
import Loading from '../Loading';


const CommentsList = ({campsiteId}) => {
   const comments = useSelector(selectCommentsByCampsiteId(campsiteId))
   
   const isLoading = useSelector((state) => state.comments.isLoading)
   const errMsg = useSelector((state) => state.comments.errMsg)
   
   if (isLoading) {
      return (
        <Row>
            
            <Loading/>
       </Row>
      )
  } 
  

  if (errMsg) {
      return (
          <Row>
              <Error errMsg={ errMsg } />
      </Row> 
      )
  }

   if (comments && comments.length > 0) {
      
      return (
         <Col md='5' className='m-1'>
            
            <h3>Comments</h3>
           
            {comments.map(comms => {
               return <Comments key={comms.id} comms={comms} />
            })}
            <CommentForm campsiteId={campsiteId} />
         </Col>
      )
   
      
}
   return (
      <Col md='5' className='m-1'>
         There are no comments for this list yet.
      </Col>
   )
   }


export default CommentsList