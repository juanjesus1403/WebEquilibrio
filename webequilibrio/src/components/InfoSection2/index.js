import React from 'react'
import Icon1 from '../../images/mision.png'
import Icon2 from '../../images/vision.png'
import Icon3 from '../../images/value.png'
import { 
  InfoContainer,
  InfoH1,
  InfoWrapper,
  InfoCard,
  InfoIcon,
  InfoH2,
  InfoH3,
  InfoP
 } from './InfoElements'

const InfoSection2 = () => {
  return (
    <InfoContainer id='Nosotros'>
      <InfoH1> Somos Asociación Equilibrio </InfoH1>
      <InfoP> Asociación Equilibrio es una Organización No Gubernamental para el Desarrollo  (ONGD), que vela por la salud emocional, mediante la ejecución de programas y actividades educativas, deportivas, artísticas que a su vez contribuyan al desarrollo social comunitario y la sana convivencia; de la mano de los municipios, las entidades públicas y el sector privado.</InfoP>
      <InfoWrapper>
        <InfoCard>
          <InfoH2>Misión</InfoH2>
          <InfoIcon src={Icon1}/>
          <InfoH3>Contribuir al desarrollo social comunitario y la sana convivencia mediante la acción en conjunto con diversos agentes. </InfoH3>
        </InfoCard>
        <InfoCard>
          <InfoH2>Visión</InfoH2>
          <InfoIcon src={Icon2}/>
          <InfoH3>Lograr el desarrollo sostenible en igualdad de oportunidades para todas las personas. </InfoH3>
        </InfoCard>
        <InfoCard>
          <InfoH2>Valores</InfoH2>
          <InfoIcon src={Icon3}/>
          <InfoH3>Honestidad - Perseverancia - Tolerancia - Respeto </InfoH3>
        </InfoCard>
      </InfoWrapper> 
    </InfoContainer>
  )
}

export default InfoSection2
