import { Container } from 'reactstrap';
// import { useState } from 'react';
// import CampsiteDetail from '../features/campsites/components/CampsiteDetail';
import CampsitesList from '../features/campsites/components/CampsitesList';
// import { SelectAllCampsites } from '../features/campsites/campsitesSlice';
// import { SelectRandomCampsiteIndex } from '../features/campsites/campsitesSlice';
import { GetCampsiteById } from '../features/campsites/campsitesSlice';
import SubHeader from '../../src/features/campsites/components/SubHeader'

// import { useState } from 'react';




const CampsitesDirectoryPage = () => {

    
    // let randomCampGround = SelectRandomCampsiteIndex()
    // const currCampsite = CAMPSITES[selectedCampsite]

    
   
    // const [randomCampGroundId, ToggleCampsiteByIdOnly] = useState(0)
    // const selectCampsite=GetCampsiteById(randomCampGroundId)
        
        // randomCampGround = SelectRandomCampsiteIndex()
        
       
        // console.log(randomCampGround);
        
    // end

    // console.log(currentCampsite);
    return (
        <Container>
            <SubHeader current='Directory' />
          <CampsitesList/>
        </Container>
    );
};

export default CampsitesDirectoryPage;