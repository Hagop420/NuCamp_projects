import React from 'react';
import { useState } from 'react';
import {
        Navbar,
        NavbarBrand,
        Collapse,
        NavbarToggler,
        Nav,
        NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../../../app/assets/img/logo.png';
// 



const Header = () => {

        const [menuOpen, setMenuOpen] = useState(false)
   return (
      <Navbar dark color='primary' sticky='top' expand='md'>
                <NavbarBrand className='ms-5' href='/'>
              
                        <img className='float-start' src={NucampLogo} alt='nucamp logo' />
                        <h1 className='mt-2 text-lg'>NuCamp</h1>
                    
                   </NavbarBrand>


                   <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                   
                   {/* reserved prop name isOpen to toggle collapse */}
                   <Collapse isOpen={menuOpen} navbar>
                  
                <Nav className='ms-auto' navbar>
                        <NavItem className='text-white'>
                                <NavLink className='nav-link' to='/' >
                                <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                        </NavItem>  
                        

                        <NavItem className='text-white'>
                        <NavLink className=' nav-link' to='/directory'>
        <i className='fa fa-list fa-lg' /> Directory
                        </NavLink>
                        </NavItem>  


                        <NavItem className='text-white'>
                                <NavLink className=' nav-link' to='/about'>
                <i className='fa fa-info fa-lg' /> About
                                </NavLink>    
                        </NavItem>  
                        

                        <NavItem className='text-white'>
                                <NavLink className=' nav-link' to='/contactInfo'>
                                        <i className='fa fa-address-card fa-lg' /> Contact
                                        </NavLink>

                        </NavItem>    
                        
                        
                        </Nav>

                           </Collapse>
                          
        </Navbar>  
   )
}


export default Header