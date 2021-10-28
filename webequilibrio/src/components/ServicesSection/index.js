import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
 } from './SevicesSectionElements'

const Services = () => {
  return (
    <ServicesContainer id='Services'>
      <ServicesH1> Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Voluntariado</ServicesH2>
          <ServicesP>Te ayudamos </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Voluntariado</ServicesH2>
          <ServicesP>Te ayudamos </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Voluntariado</ServicesH2>
          <ServicesP>Te ayudamos </ServicesP>
        </ServicesCard>
      </ServicesWrapper> 
    </ServicesContainer>
  )
}

export default Services
