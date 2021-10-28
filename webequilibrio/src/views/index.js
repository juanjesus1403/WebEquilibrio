import React, {useState} from 'react'
// import HeroSection from '../components/HeroSection'
// import InfoSection from '../components/InfoSection'
// import {homeObjTwo  } from '../components/InfoSection/Data'
import InfoSection2 from '../components/InfoSection2'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Contacto from '../components/Contacto'
// import Services from '../components/ServicesSection'
import Footer from '../components/Footer'
import CarouselContainer from '../components/Carousel/CarouselContainer'
import Alianzas from '../components/Alianzas'
import Gallery from '../components/Galeria/Gallery'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }
 

  return (
    <>
      <Sidebar isOpen={isOpen} toggle=
      {toggle} />
      <Navbar toggle={toggle}/> 
      {/* <HeroSection/> */}
      <CarouselContainer/>
      {/* <InfoSection {...homeObjOne}/> */}
      <InfoSection2/>
      {/* <InfoSection {...homeObjTwo}/> */}
      <Gallery/>
      {/* <InfoSection {...homeObjThree}/> */}
      <Alianzas/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default Home
