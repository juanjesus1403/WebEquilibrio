import React from 'react'
import foto1 from '../../images/JOSE.JPG'
import foto2 from '../../images/MARIA.JPG'
import foto3 from '../../images/lucero.jpg'
import foto4 from '../../images/nataly.jpg'
import { 
  ContactoContainer,
  ContactoH1,
  ContactoWrapper,
  ContactoCard,
  ContactoIcon,
  ContactoH2,
  ContactoH3,
  ContactoP
 } from './ContactoElements'

const Contacto = () => {
  return (
    <ContactoContainer id='Contáctanos'>
      <ContactoH1>Contáctanos</ContactoH1>
      <ContactoWrapper>
        <ContactoCard>
          <ContactoIcon src={foto1}/>
          <ContactoH2>José Wakabayashi</ContactoH2>
          <ContactoH3>Director Administrativo de Asociación Equilibrio</ContactoH3>
          <ContactoP>josewakabayashi@gmail.com </ContactoP>
        </ContactoCard>
        <ContactoCard>
          <ContactoIcon src={foto2}/>
          <ContactoH2>María del Rosario Cabanillas</ContactoH2>
          <ContactoH3>Directora de Proyectos de Asociación Equlibrio</ContactoH3>
          <ContactoP>equilibrio.bienestarsocial@gmail.com</ContactoP>
        </ContactoCard>
        <ContactoCard>
          <ContactoIcon src={foto3}/>
          <ContactoH2>Lucero Arteaga</ContactoH2>
          <ContactoH3>Directora de Comunicación de Asociación Equilibrio</ContactoH3>
          <ContactoP>larteaga20a@gmail.com</ContactoP>
        </ContactoCard>
        <ContactoCard>
          <ContactoIcon src={foto4}/>
          <ContactoH2>Nataly Bringas</ContactoH2>
          <ContactoH3>Directora  Investigación y Formación Continua</ContactoH3>
          <ContactoP>natalybringasg@gmail.com</ContactoP>
        </ContactoCard>
      </ContactoWrapper> 
    </ContactoContainer>
  )
}

export default Contacto
