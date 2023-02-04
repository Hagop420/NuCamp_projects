import { useSelector } from 'react-redux';
import React from 'react';
import {Col, Row} from 'reactstrap';
// import { CAMPSITES } from '../../../app/shared/CAMPSITES';
import AnimationCard from './display/AnimatedDisplayCard';
import CampsiteCard from "./CampsiteCard";
import {useSpring, animated} from 'react-spring'
import { SelectAllCampsites } from '../campsitesSlice'
import {useState, useEffect, useLayoutEffect} from 'react'
import Error from './Error';
import Loading from './Loading';

// import { ToggleCampsiteByIdOnly } from '../../../pages/CamapsitesDirectoryPage'


const CampsitesList = ({ campsite }) => {
    
    const [toggle, setToggle] = useState(false)
 
    const animatedStyle = useSpring({
       opacity: toggle ? 11 : 0,
       transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
       config:{duration:150}
 
    })
 
    useEffect(()=> {
       setToggle(true)
    }, [])


    // end animation
    const campsites = useSelector(SelectAllCampsites)
    console.log(campsites);



    const isLoading = useSelector((state) => state.campsites.isLoading)
    const errMsg = useSelector((state) => state.campsites.errMsg)

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