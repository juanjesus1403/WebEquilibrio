import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to ='/'>Acerca de Nosotros</FooterLink>
                <FooterLink to ='/'>Como funciona</FooterLink>
                <FooterLink to ='/'>Testimonios</FooterLink>
                <FooterLink to ='/'>Proyectos</FooterLink>
                <FooterLink to ='/'>Voluntariado</FooterLink>
                <FooterLink to ='/'>Terminos y condiciones</FooterLink>
                <FooterLink to ='/'>Trabaja con Nosotros</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to ='/'>Acerca de Nosotros</FooterLink>
                <FooterLink to ='/'>Como funciona</FooterLink>
                <FooterLink to ='/'>Testimonios</FooterLink>
                <FooterLink to ='/'>Proyectos</FooterLink>
                <FooterLink to ='/'>Voluntariado</FooterLink>
                <FooterLink to ='/'>Terminos y condiciones</FooterLink>
                <FooterLink to ='/'>Trabaja con Nosotros</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to ='/'>Acerca de Nosotros</FooterLink>
                <FooterLink to ='/'>Como funciona</FooterLink>
                <FooterLink to ='/'>Testimonios</FooterLink>
                <FooterLink to ='/'>Proyectos</FooterLink>
                <FooterLink to ='/'>Voluntariado</FooterLink>
                <FooterLink to ='/'>Terminos y condiciones</FooterLink>
                <FooterLink to ='/'>Trabaja con Nosotros</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                <FooterLink to ='/'>Instagram</FooterLink>
                <FooterLink to ='/'>Facebook</FooterLink>
                <FooterLink to ='/'>YouTube</FooterLink>
                <FooterLink to ='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick = {toggleHome}>
              Equilibrio
            </SocialLogo>
            <WebsiteRights>Equilibrio © {new Date().getFullYear()} Todos los derechos reservados</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
