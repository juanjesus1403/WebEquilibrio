import React from 'react'
import Slider from "react-slick";
import foto1 from '../../images/sin fondo/ayni2.png'
import foto2 from '../../images/sin fondo/cne.png'
import foto3 from '../../images/sin fondo/edtech1.png'
import foto4 from '../../images/sin fondo/JesusMaria2.png'
import foto5 from '../../images/sin fondo/LaVictoria2.png'
import foto6 from '../../images/sin fondo/Markham1.png'
import foto7 from '../../images/sin fondo/Monterrico2.png'
import foto8 from '../../images/sin fondo/proa1.png'
import foto9 from '../../images/sin fondo/sunass.png'
import { 
  AlianzasContainer,
  AlianzasH1,
  AlianzasWrapper,
  AlianzasCard,
  AlianzasIcon,
 } from './AlianzasElements'





const Alianzas = () => {


  let settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }; 

  return (
    <AlianzasContainer id='Alianzas'>
      <AlianzasH1>ALIANZAS INTERINSTITUCIONALES</AlianzasH1>
      {/* <AlianzasWrapper> */}
        <Slider {...settings}>
        <AlianzasCard>
          <AlianzasIcon src={foto1} style={{width: 250}} />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto2} style={{width: 200}} />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto3} style={{width: 280}} />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto4} style={{width: 150}} />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto5} style={{width: 360}}   />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto6} style={{width: 360}}   />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto7} style={{width: 350}}   />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto8} style={{width: 300}}   />
        </AlianzasCard>
        <AlianzasCard>
          <AlianzasIcon src={foto9} style={{width: 250}}   />
        </AlianzasCard>
        </Slider>
      {/* </AlianzasWrapper>  */}
    </AlianzasContainer>
  )
}

export default Alianzas



  