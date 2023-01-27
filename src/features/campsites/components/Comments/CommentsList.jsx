import { Col } from 'reactstrap';
import Comments from '../Comments/Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentFormModalOpenPage from './CommentForm'


const CommentsList = ({campsiteId}) => {
   const comments=selectCommentsByCampsiteId(campsiteId)

   if (comments && comments.length > 0) {
      return (
         <Col md='5' className='m-1'>
            
            <h3>Comments</h3>
           
            {comments.map(comms => {
               return <Comments key={comms.id} comms={comms} />
            })}
            <CommentFormModalOpenPage />
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