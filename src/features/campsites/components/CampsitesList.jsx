import React from 'react';
import {Col, Row} from 'reactstrap';
// import { CAMPSITES } from '../../../app/shared/CAMPSITES';
import AnimationCard from './display/AnimatedDisplayCard';
import CampsiteCard from "./CampsiteCard";
import {useSpring, animated} from 'react-spring'
import { SelectAllCampsites } from '../campsitesSlice'
import {useState, useEffect, useLayoutEffect} from 'react'
import AnimatedDisplayCard from './display/AnimatedDisplayCard';
// import { ToggleCampsiteByIdOnly } from '../../../pages/CamapsitesDirectoryPage'


const CampsitesList = ({ campsite }) => {
    
    const [toggle, setToggle] = useState(false)
 
    const animatedStyle = useSpring({
       opacity: toggle ? 11 : 0,
       transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
       config:{duration:100}
 
    })
 
    useEffect(()=> {
       setToggle(true)
    }, [])









    // end animation
    const campsites = SelectAllCampsites()
    return (
       <animated.div style={animatedStyle}>
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5'
                        className='m-4'
                        key={campsite.id}
                        >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
        </animated.div>
    )
};

   
         

export default CampsitesList