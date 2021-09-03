
import React from 'react'
import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = 'Nosotros' onClick={toggle}>
            Nosotros
          </SidebarLink>
          <SidebarLink to = 'Servicios' onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to = 'Proyectos' onClick={toggle}>
            Proyectos
          </SidebarLink>
          <SidebarLink to = 'Ingresa' onClick={toggle}>
            Ingresa
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to = '/Donar'>Donar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
