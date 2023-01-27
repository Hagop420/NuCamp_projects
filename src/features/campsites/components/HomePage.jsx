import { Container } from 'reactstrap';
import  DisplayList from '../../../features/campsites/components/display/displayList';
import SubHeader from '../components/SubHeader'

const HomePage = () => {
   return (
      <Container>
         <SubHeader current='Home' />
         <DisplayList/>
         </Container>
      )
}

export default HomePage