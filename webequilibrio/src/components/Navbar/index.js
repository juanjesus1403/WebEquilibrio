import React from 'react'
import {FaBars} from 'react-icons/fa'
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to ='/'>Equilibrio</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>  
          <NavMenu>
            <NavItem>
              <NavLinks to = 'Nosotros'> Nosotros </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'Servicios'> Servicios </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'Proyectos'> Proyectos </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'Ingresa'> Ingresa </NavLinks>
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

