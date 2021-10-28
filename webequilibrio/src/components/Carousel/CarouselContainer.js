import React from 'react'
import {Carousel} from 'react-bootstrap'
import image1 from '../../images/foto 1.png'
import image2 from '../../images/foto 2.png'
import image3 from '../../images/foto 3.png'
import { CarouselP, CarouselH1,CarouselH2 } from './CarouselElements'

const CarouselContainer = () => {
  return (
<Carousel>
  <Carousel.Item interval={10000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <CarouselP>
      <CarouselH1>BIENESTAR SOCIOEMOCIONAL</CarouselH1>
      <CarouselH2>Incrementar la sensación de bienestar y aminorar los niveles de estrés, ansiedad y depresión de la población. (Medidas para sobre- llevar aislamiento e incertidumbre).</CarouselH2>
      </CarouselP>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <CarouselP>
      <CarouselH1>INCLUSIÓN</CarouselH1>
      <CarouselH2>Crear espacios de diálogo y de mejora en la calidad de vida de ciu- dadanos en estado de abandono (personas con discapacidad y adultos mayores).</CarouselH2>
      </CarouselP>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <CarouselP>
      <CarouselH1>MEJORA EDUCATIVA</CarouselH1>
      <CarouselH2>Brindar herramientas pedagógicas e incrementar el nivel educativo del país; así como evitar la deserción escolar desde la perspectiva de deficiencia cognitiva.</CarouselH2>
      </CarouselP>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
  )
}

export default CarouselContainer
