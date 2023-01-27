import { Routes, Route } from 'react-router-dom';
import HomePage from './features/campsites/components/HomePage';
import AboutPg from './features/campsites/components/AboutPage'
import ContactPage from './features/campsites/components/ContactPage';
import CampsitesDirectoryPage from './pages/CamapsitesDirectoryPage';
import Header from './features/campsites/components/header';
import Footer from './features/campsites/components/footer';
import './App.css';
import CampsiteIdPullDetails from '../src/features/campsites/components/CampsiteDetailPage'


// in jsx its the path and the location home is not # it's /

 function App() {
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
                    element={<CampsiteIdPullDetails />}/>
            </Routes>

        <Footer />
        
          
          
         
        </div>
    );
}

export default App;