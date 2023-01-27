import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const SubHeader = ({ current, detail }) => {
   return (
      <Row>
         <Col>
            <Breadcrumb>
               <BreadcrumbItem>
                  

                     <i className="fa fa-home ttoooooopppoppp text-danger" aria-hidden="true"></i>
                  <Link to='/' className='text-info'>
                     Home
                  </Link>
                  

               </BreadcrumbItem>
               {detail && (
                  <BreadcrumbItem>
                  <Link to='/'>Directory</Link>
                  </BreadcrumbItem> 
               )}


               <BreadcrumbItem active>

                  {current}
               </BreadcrumbItem>
                  
            </Breadcrumb>

               < h2 className='sh'>{current}</h2>
                  <hr />
         </Col>
      </Row>
   )
}


export default SubHeader