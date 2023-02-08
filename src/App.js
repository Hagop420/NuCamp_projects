import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './features/campsites/components/HomePage';
// FetchCampSites is a react thunk
import AboutPg from './features/campsites/components/AboutPage'
import ContactPage from './features/campsites/components/ContactPage';
import CampsitesDirectoryPage from './pages/CamapsitesDirectoryPage';
import Header from './features/campsites/components/header';
import Footer from './features/campsites/components/footer';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';
import CampsiteDetailPage from '../src/features/campsites/components/CampsiteDetailPage'
import { fetchPartners } from './features/campsites/partners/partnersSlice'
import {fetchPromotions} from './features/campsites/components/display/promotions/promotionsSlice'
import {fetchComments} from './features/campsites/components/Comments/commentsSlice';
// import CampsiteDetailPage from '../src/features/campsites/components/CampsiteDetailPage';


// in jsx its the path and the location home is not # it's /

 function App() {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);
     return (

        <div className='App'>
        <Header />

            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='directory' element={ <CampsitesDirectoryPage/>} />
                <Route path='about' element={<AboutPg />}/>
                <Route path='contactInfo' element={<ContactPage />}/>
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}/>
            </Routes>

        <Footer />
        
          
          
         
        </div>
    );
}

export default App;