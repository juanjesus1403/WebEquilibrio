import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  },[] );

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
          <NavLogo to ='/' onClick={toggleHome} >Equilibrio</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>  
          <NavMenu>
            <NavItem>
              <NavLinks 
              to = 'Nosotros'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              > Nosotros 
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks 
              to = 'Services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              > Servicios </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks 
              to = 'Voluntariado'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              > Voluntariado </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to = 'Alianzas'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              > Alianzas </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to = 'Contáctanos'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              > Contáctanos </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/Donar">Donar</NavBtnLink>
          </NavBtn>         
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

