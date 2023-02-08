import { formatDate } from '../../../../utilities/formatDate'
// import { useSelector } from 'react-redux';


// import { Col, Row } from 'reactstrap';


const Comment = ({ comms }) => {
    const { text: commentText, rating, author, date } = comms;
    

   return (
       <p>
           {commentText}
           <br />
         
           {rating}/5 stars -- {author}, {formatDate(date)}
       </p>
   );
};

export default Comment;
